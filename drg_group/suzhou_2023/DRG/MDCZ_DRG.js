import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCZ_DRG=class{

    ZB19_group(record){
        return true;
    };

    ZC19_group(record){
        return true;
    };

    ZD19_group(record){
        return true;
    };

    ZJ19_group(record){
        return true;
    };

    ZZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZZ1B_group(record){
        return true;
    };

}
