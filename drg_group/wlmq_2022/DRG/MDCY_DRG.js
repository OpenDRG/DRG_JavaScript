import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCY_DRG=class{

    YR19_group(record){
        return true;
    };

    YR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    YC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    YR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    YC15_group(record){
        return true;
    };

    YR25_group(record){
        return true;
    };

}
