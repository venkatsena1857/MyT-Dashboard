import { Injectable } from "@angular/core";
import { MyTTable } from '../common/myTtable';

@Injectable()
export class TableBuilderService{
    public build(table: MyTTable, deedRules: JSON, responseJSON: JSON) {
        if(deedRules!=null) {
            if(deedRules['sequence']!=null) {
                var currSequence: string[] = deedRules['sequence'];
                //Adding Headears
                table.header.push('Sl No');
                for(var i = 0; i<currSequence.length;i++) {
                    table.header.push(deedRules['headers'][currSequence[i]]);
                }
                if(responseJSON['deedData']!=null) {
                    var deedData = responseJSON['deedData'];
                    for(var i = 0;i<deedData.length;i++) {
                        var currentDeedData = deedData[i];
                        var newRow: string[] = [];
                        newRow.push(String(i+1))
                        for(var j = 0; j< currSequence.length ;j++){
                            newRow.push(currentDeedData[currSequence[j]])
                        }
                        table.dataRows.push(newRow);
                    }
                }
            }
        }
    }
} 