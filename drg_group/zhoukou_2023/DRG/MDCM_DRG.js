import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCM_DRG=class{

    MA19_group(record){
        return true;
    };

    MC19_group(record){
        return true;
    };

    MJ19_group(record){
        return true;
    };

    MB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    MR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    MZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    MB13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MB15_group(record){
        return true;
    };

    MD15_group(record){
        return true;
    };

    MR15_group(record){
        return true;
    };

    MS15_group(record){
        return true;
    };

    MZ15_group(record){
        return true;
    };

}
