import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCD_DRG=class{

    DE29_group(record){
        return true;
    };

    DD19_group(record){
        return true;
    };

    DT29_group(record){
        return true;
    };

    DJ19_group(record){
        return true;
    };

    DB39_group(record){
        return true;
    };

    DA19_group(record){
        return true;
    };

    DK19_group(record){
        return true;
    };

    DC29_group(record){
        return true;
    };

    DE19_group(record){
        return true;
    };

    DG19_group(record){
        return true;
    };

    DD29_group(record){
        return true;
    };

    DB29_group(record){
        return true;
    };

    DS19_group(record){
        return true;
    };

    DC19_group(record){
        return true;
    };

    DT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DG21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DW13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DB13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DG23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DU15_group(record){
        return true;
    };

    DB15_group(record){
        return true;
    };

    DW15_group(record){
        return true;
    };

    DZ15_group(record){
        return true;
    };

    DV15_group(record){
        return true;
    };

    DG25_group(record){
        return true;
    };

    DR15_group(record){
        return true;
    };

    DT15_group(record){
        return true;
    };

}
