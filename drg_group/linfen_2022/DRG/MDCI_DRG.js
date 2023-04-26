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

    IC29_group(record){
        return true;
    };

    ID19_group(record){
        return true;
    };

    IF39_group(record){
        return true;
    };

    IG19_group(record){
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

    IT39_group(record){
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

    IZ19_group(record){
        return true;
    };

    IC31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IF51_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IZ21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IC43_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IE13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF43_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IH13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IC15_group(record){
        return true;
    };

    IC35_group(record){
        return true;
    };

    IC45_group(record){
        return true;
    };

    IE15_group(record){
        return true;
    };

    IF15_group(record){
        return true;
    };

    IF25_group(record){
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

    IS25_group(record){
        return true;
    };

    IT15_group(record){
        return true;
    };

    IT25_group(record){
        return true;
    };

    IU15_group(record){
        return true;
    };

    IZ25_group(record){
        return true;
    };

}
