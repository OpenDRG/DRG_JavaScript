import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCK_DRG=class{

    KT10_group(record){
        return record.age<=17;
    };

    KB19_group(record){
        return true;
    };

    KC19_group(record){
        return true;
    };

    KD19_group(record){
        return true;
    };

    KD29_group(record){
        return true;
    };

    KE19_group(record){
        return true;
    };

    KF19_group(record){
        return true;
    };

    KR19_group(record){
        return true;
    };

    KV19_group(record){
        return true;
    };

    KS17_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    KJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KJ15_group(record){
        return true;
    };

    KS15_group(record){
        return true;
    };

    KT15_group(record){
        return true;
    };

    KU15_group(record){
        return true;
    };

    KZ15_group(record){
        return true;
    };

}
