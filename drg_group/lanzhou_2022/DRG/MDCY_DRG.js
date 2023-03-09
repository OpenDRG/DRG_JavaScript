import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCY_DRG=class{

    YR29_group(record){
        return true;
    };

    YC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    YR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    YR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    YC15_group(record){
        return true;
    };

    YR15_group(record){
        return true;
    };

}
