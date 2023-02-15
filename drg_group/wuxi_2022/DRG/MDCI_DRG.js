import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
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

    IC49_group(record){
        return true;
    };

    IE19_group(record){
        return true;
    };

    IF49_group(record){
        return true;
    };

    IF59_group(record){
        return true;
    };

    IH19_group(record){
        return true;
    };

    IR19_group(record){
        return true;
    };

    IR29_group(record){
        return true;
    };

    IS19_group(record){
        return true;
    };

    IS29_group(record){
        return true;
    };

    IT19_group(record){
        return true;
    };

    IT39_group(record){
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

    IF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ID13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IG13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ID15_group(record){
        return true;
    };

    IF15_group(record){
        return true;
    };

    IF25_group(record){
        return true;
    };

    IF35_group(record){
        return true;
    };

    IG15_group(record){
        return true;
    };

    IJ15_group(record){
        return true;
    };

    IT25_group(record){
        return true;
    };

    IU15_group(record){
        return true;
    };

    IU35_group(record){
        return true;
    };

    IV15_group(record){
        return true;
    };

}
