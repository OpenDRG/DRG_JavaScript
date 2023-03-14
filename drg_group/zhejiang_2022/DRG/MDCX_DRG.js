import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCX_DRG=class{

    XJ19_group(record){
        return true;
    };

    XR29_group(record){
        return true;
    };

    XS19_group(record){
        return true;
    };

    XS29_group(record){
        return true;
    };

    XT19_group(record){
        return true;
    };

    XT39_group(record){
        return true;
    };

    XR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR15_group(record){
        return true;
    };

    XT25_group(record){
        return true;
    };

}
