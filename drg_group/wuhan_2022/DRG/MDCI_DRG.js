import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCI_DRG=class{

    IB19_group(record){
        return true;
    };

    IB29_group(record){
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

    IF29_group(record){
        return true;
    };

    IF49_group(record){
        return true;
    };

    IR19_group(record){
        return true;
    };

    IR39_group(record){
        return true;
    };

    IU19_group(record){
        return true;
    };

    IU29_group(record){
        return true;
    };

    IV19_group(record){
        return true;
    };

    IZ29_group(record){
        return true;
    };

    IB31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IF51_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IG11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IH11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ID1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IS2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IT3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IB33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IG13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IF5B_group(record){
        return true;
    };

    IH1B_group(record){
        return true;
    };

    IJ1B_group(record){
        return true;
    };

    IR2B_group(record){
        return true;
    };

    IT1B_group(record){
        return true;
    };

    IT2B_group(record){
        return true;
    };

    IU3B_group(record){
        return true;
    };

    IZ1B_group(record){
        return true;
    };

    IB35_group(record){
        return true;
    };

    ID15_group(record){
        return true;
    };

    IF15_group(record){
        return true;
    };

    IF35_group(record){
        return true;
    };

    IG15_group(record){
        return true;
    };

    IS15_group(record){
        return true;
    };

    IS25_group(record){
        return true;
    };

    IT35_group(record){
        return true;
    };

}
