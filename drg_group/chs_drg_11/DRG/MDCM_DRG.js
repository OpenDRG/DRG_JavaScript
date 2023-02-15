import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCM_DRG=class{

    MB19_group(record){
        return true;
    };

    MC19_group(record){
        return true;
    };

    MA19_group(record){
        return true;
    };

    MJ19_group(record){
        return true;
    };

    MZ19_group(record){
        return true;
    };

    MR11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    MS15_group(record){
        return true;
    };

    MR15_group(record){
        return true;
    };

    MD15_group(record){
        return true;
    };

}
