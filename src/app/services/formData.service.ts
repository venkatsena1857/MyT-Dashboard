import { Injectable } from '@angular/core';
import { FormDataServiceCallBack } from '../interfaces/apiCallBack.interfaces';

@Injectable()
export class FormDataService {
    getData(formEle : any, values: any [],  callback?: FormDataServiceCallBack ) {
        if(formEle!=null && values !=null) {
            var builtAPIJSON = {}
            var allPresent: boolean = true;
            var formEleControls = formEle.controls;
            for(let i = 0; i<values.length ; i++) {
                var curValue = values[i];
                if(formEleControls[curValue.formName]!=undefined && 
                    formEleControls[curValue.formName].value!=="") {
                        builtAPIJSON[curValue.JSONName] = formEleControls[curValue.formName].value;
                } else if (curValue.mandatory===undefined || curValue.mandatory === false){  
                    alert("Please Fill Complete Form");
                    allPresent = false;
                    break;
                }
            }
            if(allPresent) {
                callback(builtAPIJSON);
            }
        }
    }
}