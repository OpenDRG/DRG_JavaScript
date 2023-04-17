import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCD_DRG=class{

    DJ10_group(record){
        return record.age<=17;
    };

    DU10_group(record){
        return record.age<=17;
    };

    DZ10_group(record){
        return record.age<=17;
    };

    DA19_group(record){
        return true;
    };

    DB19_group(record){
        return true;
    };

    DB29_group(record){
        return true;
    };

    DC19_group(record){
        return true;
    };

    DD19_group(record){
        return true;
    };

    DD29_group(record){
        return true;
    };

    DE19_group(record){
        return true;
    };

    DE29_group(record){
        return true;
    };

    DG19_group(record){
        return true;
    };

    DG39_group(record){
        return true;
    };

    DK19_group(record){
        return true;
    };

    DS19_group(record){
        return true;
    };

    DT19_group(record){
        return true;
    };

    DT29_group(record){
        return true;
    };

    DV19_group(record){
        return true;
    };

    DR17_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    DC21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DG21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DC23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DG23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DW13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DC25_group(record){
        return true;
    };

    DG25_group(record){
        return true;
    };

    DJ15_group(record){
        return true;
    };

    DR15_group(record){
        return true;
    };

    DU15_group(record){
        return true;
    };

    DW15_group(record){
        return true;
    };

    DZ15_group(record){
        return true;
    };

}
