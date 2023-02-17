import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCO_DRG=class{

    OB19_group(record){
        return true;
    };

    OC19_group(record){
        return true;
    };

    OD19_group(record){
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

    OR19_group(record){
        return true;
    };

    OS19_group(record){
        return true;
    };

    OD21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OD23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OD25_group(record){
        return true;
    };

    OJ15_group(record){
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
