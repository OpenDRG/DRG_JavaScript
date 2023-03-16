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

    JB29_group(record){
        return true;
    };

    JB39_group(record){
        return true;
    };

    JD29_group(record){
        return true;
    };

    JS19_group(record){
        return true;
    };

    JS29_group(record){
        return true;
    };

    JT19_group(record){
        return true;
    };

    JU19_group(record){
        return true;
    };

    JV29_group(record){
        return true;
    };

    JZ19_group(record){
        return true;
    };

    JC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JC15_group(record){
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

    JR25_group(record){
        return true;
    };

    JV15_group(record){
        return true;
    };

}
