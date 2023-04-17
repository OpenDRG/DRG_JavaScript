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

    PT19_group(record){
        return true;
    };

    PT29_group(record){
        return true;
    };

    PU19_group(record){
        return true;
    };

    PV19_group(record){
        return true;
    };

    PR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    PR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    PR15_group(record){
        return true;
    };

}
