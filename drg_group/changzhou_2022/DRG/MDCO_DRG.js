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

    OS19_group(record){
        return true;
    };

    OS29_group(record){
        return true;
    };

    OT19_group(record){
        return true;
    };

    OZ17_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    OZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    OZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    OZ15_group(record){
        return true;
    };

}
