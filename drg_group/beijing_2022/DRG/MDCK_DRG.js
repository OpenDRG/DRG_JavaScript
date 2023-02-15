import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCK_DRG=class{

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

    KU19_group(record){
        return true;
    };

    KJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    KR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    KJ15_group(record){
        return true;
    };

    KR15_group(record){
        return true;
    };

    KS15_group(record){
        return true;
    };

    KT15_group(record){
        return true;
    };

    KV15_group(record){
        return true;
    };

    KZ15_group(record){
        return true;
    };

}
