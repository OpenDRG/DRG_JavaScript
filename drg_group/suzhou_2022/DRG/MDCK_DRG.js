import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCK_DRG=class{

    KB19_group(record){
        return true;
    };

    KC19_group(record){
        return true;
    };

    KE19_group(record){
        return true;
    };

    KJ19_group(record){
        return true;
    };

    KR19_group(record){
        return true;
    };

    KS19_group(record){
        return true;
    };

    KT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KD1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KD2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KU1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KD15_group(record){
        return true;
    };

    KD25_group(record){
        return true;
    };

    KT15_group(record){
        return true;
    };

    KU15_group(record){
        return true;
    };

    KV15_group(record){
        return true;
    };

    KZ15_group(record){
        return true;
    };

}
