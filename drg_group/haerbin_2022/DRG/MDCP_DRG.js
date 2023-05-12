import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCP_DRG=class{

    PB19_group(record){
        return true;
    };

    PC19_group(record){
        return true;
    };

    PJ19_group(record){
        return true;
    };

    PK19_group(record){
        return true;
    };

    PS19_group(record){
        return true;
    };

    PS29_group(record){
        return true;
    };

    PS49_group(record){
        return true;
    };

    PV19_group(record){
        return true;
    };

    PR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PS31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    PR1B_group(record){
        return true;
    };

    PS3B_group(record){
        return true;
    };

    PU15_group(record){
        return true;
    };

}
