import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCA_DRG=class{

    AH11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    AH15_group(record){
        return true;
    };

}
