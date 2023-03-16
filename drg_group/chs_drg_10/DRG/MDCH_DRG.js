import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCH_DRG=class{

    HB19_group(record){
        return true;
    };

    HC19_group(record){
        return true;
    };

    HC29_group(record){
        return true;
    };

    HC39_group(record){
        return true;
    };

    HC49_group(record){
        return true;
    };

    HJ19_group(record){
        return true;
    };

    HK19_group(record){
        return true;
    };

    HL19_group(record){
        return true;
    };

    HL29_group(record){
        return true;
    };

    HS19_group(record){
        return true;
    };

    HS29_group(record){
        return true;
    };

    HS39_group(record){
        return true;
    };

    HT19_group(record){
        return true;
    };

    HR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HZ21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HZ31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    HR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HZ23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HZ33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    HR15_group(record){
        return true;
    };

    HU15_group(record){
        return true;
    };

    HZ15_group(record){
        return true;
    };

    HZ25_group(record){
        return true;
    };

    HZ35_group(record){
        return true;
    };

}
