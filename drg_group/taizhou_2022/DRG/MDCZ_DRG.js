import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCZ_DRG=class{

    ZC19_group(record){
        return true;
    };

    ZD19_group(record){
        return true;
    };

    ZJ19_group(record){
        return true;
    };

    ZB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZB13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZB15_group(record){
        return true;
    };

    ZZ15_group(record){
        return true;
    };

}
