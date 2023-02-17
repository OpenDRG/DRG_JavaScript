import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCD_DRG=class{

    DA19_group(record){
        return true;
    };

    DB19_group(record){
        return true;
    };

    DB29_group(record){
        return true;
    };

    DC19_group(record){
        return true;
    };

    DC29_group(record){
        return true;
    };

    DD19_group(record){
        return true;
    };

    DD29_group(record){
        return true;
    };

    DE29_group(record){
        return true;
    };

    DG19_group(record){
        return true;
    };

    DG29_group(record){
        return true;
    };

    DG39_group(record){
        return true;
    };

    DS19_group(record){
        return true;
    };

    DV19_group(record){
        return true;
    };

    DW19_group(record){
        return true;
    };

    DJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DK11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DE1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DK13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DJ1B_group(record){
        return true;
    };

    DR1B_group(record){
        return true;
    };

    DE15_group(record){
        return true;
    };

    DK15_group(record){
        return true;
    };

    DT15_group(record){
        return true;
    };

    DT25_group(record){
        return true;
    };

    DU15_group(record){
        return true;
    };

    DZ15_group(record){
        return true;
    };

}
