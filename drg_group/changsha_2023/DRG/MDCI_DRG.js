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

    IC49_group(record){
        return true;
    };

    IG19_group(record){
        return true;
    };

    IR29_group(record){
        return true;
    };

    IS29_group(record){
        return true;
    };

    IT19_group(record){
        return true;
    };

    IU19_group(record){
        return true;
    };

    IU29_group(record){
        return true;
    };

    IU39_group(record){
        return true;
    };

    IV19_group(record){
        return true;
    };

    IF11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IF41_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IH11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IZ21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ID13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IE13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF53_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ID15_group(record){
        return true;
    };

    IE15_group(record){
        return true;
    };

    IF15_group(record){
        return true;
    };

    IF35_group(record){
        return true;
    };

    IF45_group(record){
        return true;
    };

    IF55_group(record){
        return true;
    };

    IH15_group(record){
        return true;
    };

    IJ15_group(record){
        return true;
    };

    IR15_group(record){
        return true;
    };

    IS15_group(record){
        return true;
    };

    IT25_group(record){
        return true;
    };

    IT35_group(record){
        return true;
    };

    IZ15_group(record){
        return true;
    };

    IZ25_group(record){
        return true;
    };

}
