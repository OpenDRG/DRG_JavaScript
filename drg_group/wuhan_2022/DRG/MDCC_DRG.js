import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCC_DRG=class{

    CB19_group(record){
        return true;
    };

    CB29_group(record){
        return true;
    };

    CB39_group(record){
        return true;
    };

    CB49_group(record){
        return true;
    };

    CC19_group(record){
        return true;
    };

    CD19_group(record){
        return true;
    };

    CD29_group(record){
        return true;
    };

    CJ19_group(record){
        return true;
    };

    CR19_group(record){
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

    CS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CX1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CZ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    CS15_group(record){
        return true;
    };

    CT15_group(record){
        return true;
    };

    CX15_group(record){
        return true;
    };

    CZ15_group(record){
        return true;
    };

}
