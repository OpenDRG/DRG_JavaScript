import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCR_DRG=class{

    RW10_group(record){
        return record.age<=17;
    };

    RA19_group(record){
        return true;
    };

    RA49_group(record){
        return true;
    };

    RB19_group(record){
        return true;
    };

    RC19_group(record){
        return true;
    };

    RD19_group(record){
        return true;
    };

    RE19_group(record){
        return true;
    };

    RF19_group(record){
        return true;
    };

    RT29_group(record){
        return true;
    };

    RU29_group(record){
        return true;
    };

    RV19_group(record){
        return true;
    };

    RA21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RA31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RW21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RA23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RA33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RW13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RW23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RA25_group(record){
        return true;
    };

    RA35_group(record){
        return true;
    };

    RR15_group(record){
        return true;
    };

    RS15_group(record){
        return true;
    };

    RS25_group(record){
        return true;
    };

    RT15_group(record){
        return true;
    };

    RW15_group(record){
        return true;
    };

    RW25_group(record){
        return true;
    };

    RU10_group(record){
        return record.inHospitalTime<=7;
    };

    RU12_group(record){
        return record.inHospitalTime>7 && record.inHospitalTime<=30;
    };

    RU14_group(record){
        return record.inHospitalTime>30 && record.inHospitalTime<=60;
    };

}
