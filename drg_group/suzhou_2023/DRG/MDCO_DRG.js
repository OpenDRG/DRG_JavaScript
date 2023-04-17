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

    OJ19_group(record){
        return true;
    };

    OR19_group(record){
        return true;
    };

    OZ19_group(record){
        return true;
    };

    OS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OS2B_group(record){
        return true;
    };

    OS15_group(record){
        return true;
    };

    OT15_group(record){
        return true;
    };

}
