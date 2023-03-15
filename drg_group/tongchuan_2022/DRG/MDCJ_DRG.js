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

    JC19_group(record){
        return true;
    };

    JD29_group(record){
        return true;
    };

    JR19_group(record){
        return true;
    };

    JS29_group(record){
        return true;
    };

    JT19_group(record){
        return true;
    };

    JV19_group(record){
        return true;
    };

    JV29_group(record){
        return true;
    };

    JZ19_group(record){
        return true;
    };

    JS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JD15_group(record){
        return true;
    };

    JJ15_group(record){
        return true;
    };

    JR25_group(record){
        return true;
    };

    JS15_group(record){
        return true;
    };

    JU15_group(record){
        return true;
    };

}
