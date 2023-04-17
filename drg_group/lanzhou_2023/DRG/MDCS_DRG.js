import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCS_DRG=class{

    SB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    SR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    SS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ST11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    SZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ST13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    SZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    SB1B_group(record){
        return true;
    };

    SR1B_group(record){
        return true;
    };

    SS1B_group(record){
        return true;
    };

    ST15_group(record){
        return true;
    };

    SZ15_group(record){
        return true;
    };

    SV11A_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1)) && record.age<14;
    };

    SU1AA_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1))) && record.age<14;
    };

    SV13A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1))) && record.age<14;
    };

    SU15A_group(record){
        return record.age<14;
    };

    SV15A_group(record){
        return record.age<14;
    };

    SU11B_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    SV11B_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    SU13B_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    SV13B_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    SU15B_group(record){
        return true;
    };

    SV15B_group(record){
        return true;
    };

}
