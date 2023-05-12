import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCJ_DRG=class{

    JA19_group(record){
        return true;
    };

    JA29_group(record){
        return true;
    };

    JB19_group(record){
        return true;
    };

    JC19_group(record){
        return true;
    };

    JD29_group(record){
        return true;
    };

    JR29_group(record){
        return true;
    };

    JS29_group(record){
        return true;
    };

    JT19_group(record){
        return true;
    };

    JZ19_group(record){
        return true;
    };

    JJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JB2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JB3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JD1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JV1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JV2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JS1B_group(record){
        return true;
    };

    JB25_group(record){
        return true;
    };

    JB35_group(record){
        return true;
    };

    JD15_group(record){
        return true;
    };

    JJ15_group(record){
        return true;
    };

    JR15_group(record){
        return true;
    };

    JU15_group(record){
        return true;
    };

    JV15_group(record){
        return true;
    };

    JV25_group(record){
        return true;
    };

}
