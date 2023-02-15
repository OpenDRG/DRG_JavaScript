import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCR_DRG=class{

    RA39_group(record){
        return true;
    };

    RA49_group(record){
        return true;
    };

    RG19_group(record){
        return true;
    };

    RT29_group(record){
        return true;
    };

    RA11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RA21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RB21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RW21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RA23_group(record){
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

    RA15_group(record){
        return true;
    };

    RA25_group(record){
        return true;
    };

    RB15_group(record){
        return true;
    };

    RB25_group(record){
        return true;
    };

    RD15_group(record){
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

    RU15_group(record){
        return true;
    };

    RW15_group(record){
        return true;
    };

    RW25_group(record){
        return true;
    };

    RC12_group(record){
        return record.inHospitalTime>=13;
    };

    RC14_group(record){
        return record.inHospitalTime>=6 && record.inHospitalTime<13;
    };

    RC16_group(record){
        return record.inHospitalTime>=2 && record.inHospitalTime<6;
    };

    RC18_group(record){
        return record.inHospitalTime==1;
    };

    RC22_group(record){
        return record.inHospitalTime>=14;
    };

    RC24_group(record){
        return record.inHospitalTime>=7 && record.inHospitalTime<14;
    };

    RC26_group(record){
        return record.inHospitalTime>=3 && record.inHospitalTime<7;
    };

    RC28_group(record){
        return record.inHospitalTime>=1 && record.inHospitalTime<3;
    };

    RE12_group(record){
        return record.inHospitalTime>=14;
    };

    RE14_group(record){
        return record.inHospitalTime>=7 && record.inHospitalTime<14;
    };

    RE16_group(record){
        return record.inHospitalTime>=1 && record.inHospitalTime<7;
    };

}
