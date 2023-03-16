import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCG_DRG=class{

    GB19_group(record){
        return true;
    };

    GB29_group(record){
        return true;
    };

    GC19_group(record){
        return true;
    };

    GC29_group(record){
        return true;
    };

    GD19_group(record){
        return true;
    };

    GD29_group(record){
        return true;
    };

    GE19_group(record){
        return true;
    };

    GF19_group(record){
        return true;
    };

    GF29_group(record){
        return true;
    };

    GG19_group(record){
        return true;
    };

    GK19_group(record){
        return true;
    };

    GK29_group(record){
        return true;
    };

    GK39_group(record){
        return true;
    };

    GS19_group(record){
        return true;
    };

    GU19_group(record){
        return true;
    };

    GU29_group(record){
        return true;
    };

    GW19_group(record){
        return true;
    };

    GZ19_group(record){
        return true;
    };

    GE21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    GJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    GR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    GT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    GV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    GE23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    GJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    GR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    GT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    GV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    GE25_group(record){
        return true;
    };

    GJ15_group(record){
        return true;
    };

    GR15_group(record){
        return true;
    };

    GT15_group(record){
        return true;
    };

    GV15_group(record){
        return true;
    };

}
