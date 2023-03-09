import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCJ_DRG=class{

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

    JU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    JU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    JU15_group(record){
        return true;
    };

}
