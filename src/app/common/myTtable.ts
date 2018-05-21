export class MyTTable{
    header:string [];
    dataRows: string[][];
    hidden: string[];

    addHeader(headers: string[]){
        this.addStringArray(this.header,headers);
    }

    private addStringArray(our: string[], incoming: string[]) {
        our=incoming;
    }
    constructor () {
        this.header = [];
        this.dataRows = [];
        this.hidden = [];
    }
    
}