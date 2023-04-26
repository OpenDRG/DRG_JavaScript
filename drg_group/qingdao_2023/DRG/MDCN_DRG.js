import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCN_DRG=class{

    NA19_group(record){
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

    NS19_group(record){
        return true;
    };

    NR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NA23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NF13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NA25_group(record){
        return true;
    };

    NF15_group(record){
        return true;
    };

    NJ15_group(record){
        return true;
    };

    NR15_group(record){
        return true;
    };

    NZ15_group(record){
        return true;
    };

}
