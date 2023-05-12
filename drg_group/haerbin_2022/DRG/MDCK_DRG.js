import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

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

    KS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KU11_group(record){
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

    KT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KV1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KS1B_group(record){
        return true;
    };

    KU1B_group(record){
        return true;
    };

    KZ1B_group(record){
        return true;
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

    KV15_group(record){
        return true;
    };

}
