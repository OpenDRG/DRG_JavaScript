import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCL_DRG=class{

    LA19_group(record){
        return true;
    };

    LA29_group(record){
        return true;
    };

    LB19_group(record){
        return true;
    };

    LC19_group(record){
        return true;
    };

    LD19_group(record){
        return true;
    };

    LE19_group(record){
        return true;
    };

    LF19_group(record){
        return true;
    };

    LT19_group(record){
        return true;
    };

    LX19_group(record){
        return true;
    };

    LB21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LL11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    LJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    LR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    LU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    LB25_group(record){
        return true;
    };

    LJ15_group(record){
        return true;
    };

    LL15_group(record){
        return true;
    };

    LR15_group(record){
        return true;
    };

    LS15_group(record){
        return true;
    };

    LU15_group(record){
        return true;
    };

    LV15_group(record){
        return true;
    };

    LW15_group(record){
        return true;
    };

    LZ15_group(record){
        return true;
    };

}
