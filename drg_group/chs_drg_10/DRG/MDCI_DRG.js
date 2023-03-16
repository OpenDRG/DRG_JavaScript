import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCI_DRG=class{

    IB19_group(record){
        return true;
    };

    IB29_group(record){
        return true;
    };

    IB39_group(record){
        return true;
    };

    IC19_group(record){
        return true;
    };

    IC29_group(record){
        return true;
    };

    IC39_group(record){
        return true;
    };

    IE19_group(record){
        return true;
    };

    IF19_group(record){
        return true;
    };

    IF29_group(record){
        return true;
    };

    IF39_group(record){
        return true;
    };

    IF49_group(record){
        return true;
    };

    IF59_group(record){
        return true;
    };

    IG19_group(record){
        return true;
    };

    IH19_group(record){
        return true;
    };

    IJ19_group(record){
        return true;
    };

    IT29_group(record){
        return true;
    };

    IT39_group(record){
        return true;
    };

    IU19_group(record){
        return true;
    };

    IU29_group(record){
        return true;
    };

    IZ19_group(record){
        return true;
    };

    IZ29_group(record){
        return true;
    };

    ID11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IR31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ID13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IR33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ID15_group(record){
        return true;
    };

    IR15_group(record){
        return true;
    };

    IR25_group(record){
        return true;
    };

    IR35_group(record){
        return true;
    };

    IS15_group(record){
        return true;
    };

    IS25_group(record){
        return true;
    };

    IT15_group(record){
        return true;
    };

    IU35_group(record){
        return true;
    };

    IV15_group(record){
        return true;
    };

}
