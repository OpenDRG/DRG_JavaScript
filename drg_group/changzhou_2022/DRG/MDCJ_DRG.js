import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCJ_DRG=class{

    JJ10_group(record){
        return record.age<=17;
    };

    JU10_group(record){
        return record.age<=17;
    };

    JZ10_group(record){
        return record.age<=17;
    };

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

    JR19_group(record){
        return true;
    };

    JR29_group(record){
        return true;
    };

    JS29_group(record){
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

    JS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JT13_group(record){
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

    JS15_group(record){
        return true;
    };

    JT15_group(record){
        return true;
    };

    JV15_group(record){
        return true;
    };

}
