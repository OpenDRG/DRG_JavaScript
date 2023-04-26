import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCC_DRG=class{

    CB49_group(record){
        return true;
    };

    CJ19_group(record){
        return true;
    };

    CR19_group(record){
        return true;
    };

    CS19_group(record){
        return true;
    };

    CT19_group(record){
        return true;
    };

    CU19_group(record){
        return true;
    };

    CV19_group(record){
        return true;
    };

    CW19_group(record){
        return true;
    };

    CB13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CB23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CB33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CD23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CX13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CB15_group(record){
        return true;
    };

    CB25_group(record){
        return true;
    };

    CB35_group(record){
        return true;
    };

    CC15_group(record){
        return true;
    };

    CD15_group(record){
        return true;
    };

    CD25_group(record){
        return true;
    };

    CX15_group(record){
        return true;
    };

    CZ15_group(record){
        return true;
    };

}
