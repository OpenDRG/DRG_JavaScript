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

    PS19_group(record){
        return true;
    };

    PS29_group(record){
        return true;
    };

    PS39_group(record){
        return true;
    };

    PS49_group(record){
        return true;
    };

    PV19_group(record){
        return true;
    };

    PK11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    PK15_group(record){
        return true;
    };

    PR15_group(record){
        return true;
    };

    PU15_group(record){
        return true;
    };

}
