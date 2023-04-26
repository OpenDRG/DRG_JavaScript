import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCP_DRG=class{

    PK19_group(record){
        return true;
    };

    PR19_group(record){
        return true;
    };

    PS19_group(record){
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

    PU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PU15_group(record){
        return true;
    };

}
