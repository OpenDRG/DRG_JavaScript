import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCO_DRG=class{

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

    OR19_group(record){
        return true;
    };

    OS29_group(record){
        return true;
    };

    OT19_group(record){
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

    OC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OB15_group(record){
        return true;
    };

    OC15_group(record){
        return true;
    };

    OD15_group(record){
        return true;
    };

    OJ15_group(record){
        return true;
    };

    OS15_group(record){
        return true;
    };

    OZ15_group(record){
        return true;
    };

}
