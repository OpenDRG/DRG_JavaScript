import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCT_DRG=class{

    TB19_group(record){
        return true;
    };

    TR19_group(record){
        return true;
    };

    TR29_group(record){
        return true;
    };

    TT19_group(record){
        return true;
    };

    TT29_group(record){
        return true;
    };

    TU19_group(record){
        return true;
    };

    TV19_group(record){
        return true;
    };

    TW19_group(record){
        return true;
    };

    TS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    TS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    TS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    TS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    TS15_group(record){
        return true;
    };

    TS25_group(record){
        return true;
    };

}
