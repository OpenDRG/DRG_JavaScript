import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCD_DRG=class{

    DB19_group(record){
        return true;
    };

    DB29_group(record){
        return true;
    };

    DC19_group(record){
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

    DT29_group(record){
        return true;
    };

    DW19_group(record){
        return true;
    };

    DZ19_group(record){
        return true;
    };

    DR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    DA13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DB33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DE13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DG23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DK13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DA15_group(record){
        return true;
    };

    DB35_group(record){
        return true;
    };

    DE15_group(record){
        return true;
    };

    DG25_group(record){
        return true;
    };

    DJ15_group(record){
        return true;
    };

    DK15_group(record){
        return true;
    };

    DR15_group(record){
        return true;
    };

    DS15_group(record){
        return true;
    };

    DT15_group(record){
        return true;
    };

    DU15_group(record){
        return true;
    };

    DV15_group(record){
        return true;
    };

    DC2D_group(record){
        return record.age<=6;
    };

    DC29_group(record){
        return true;
    };

}
