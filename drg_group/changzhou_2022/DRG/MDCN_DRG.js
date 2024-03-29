import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCN_DRG=class{

    NA19_group(record){
        return true;
    };

    NA29_group(record){
        return true;
    };

    NB19_group(record){
        return true;
    };

    NC19_group(record){
        return true;
    };

    ND19_group(record){
        return true;
    };

    NE19_group(record){
        return true;
    };

    NF19_group(record){
        return true;
    };

    NJ19_group(record){
        return true;
    };

    NS19_group(record){
        return true;
    };

    NR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NR15_group(record){
        return true;
    };

    NZ15_group(record){
        return true;
    };

}
