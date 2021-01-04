import { IFill } from "../interface";
import { assign_properties } from "../utils";
/** 填充数据 **/
class Fill extends IFill {
    constructor(){
        super();
    }

    fill(source = {}){
        assign_properties(this, source);
    }

}

export default Fill;