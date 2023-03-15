import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCO_DRG=class{

    OC19_group(record){
        return true;
    };

    OD29_group(record){
        return true;
    };

    OE19_group(record){
        return true;
    };

    OF19_group(record){
        return true;
    };

    OF29_group(record){
        return true;
    };

    OS19_group(record){
        return true;
    };

    OB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OB15_group(record){
        return true;
    };

    OD15_group(record){
        return true;
    };

    OJ15_group(record){
        return true;
    };

    OR15_group(record){
        return true;
    };

    OS25_group(record){
        return true;
    };

    OT15_group(record){
        return true;
    };

    OZ15_group(record){
        return true;
    };

}
