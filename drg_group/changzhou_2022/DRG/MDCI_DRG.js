import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCI_DRG=class{

    IG10_group(record){
        return record.age<=17;
    };

    IJ10_group(record){
        return record.age<=17;
    };

    IS10_group(record){
        return record.age<=17;
    };

    IU10_group(record){
        return record.age<=17;
    };

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

    IT39_group(record){
        return true;
    };

    IZ19_group(record){
        return true;
    };

    IR27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    IS27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    IT27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    IU27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    ID11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IJ11_group(record){
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

    IT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    IU31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ID13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IJ13_group(record){
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

    IT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IU33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    IZ23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ID15_group(record){
        return true;
    };

    IJ15_group(record){
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

    IT25_group(record){
        return true;
    };

    IU15_group(record){
        return true;
    };

    IU25_group(record){
        return true;
    };

    IU35_group(record){
        return true;
    };

    IV15_group(record){
        return true;
    };

    IZ25_group(record){
        return true;
    };

}
