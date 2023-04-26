import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCN_DRG=class{

    NA19_group(record){
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

    NJ19_group(record){
        return true;
    };

    NS19_group(record){
        return true;
    };

    NB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NA23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NB13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NF13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NA25_group(record){
        return true;
    };

    NB15_group(record){
        return true;
    };

    NF15_group(record){
        return true;
    };

    NR15_group(record){
        return true;
    };

    NZ15_group(record){
        return true;
    };

}
