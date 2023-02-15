import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCD_DRG=class{

    DE29_group(record){
        return true;
    };

    DB19_group(record){
        return true;
    };

    DC29_group(record){
        return true;
    };

    DS19_group(record){
        return true;
    };

    DG29_group(record){
        return true;
    };

    DZ19_group(record){
        return true;
    };

    DK19_group(record){
        return true;
    };

    DB29_group(record){
        return true;
    };

    DG19_group(record){
        return true;
    };

    DT29_group(record){
        return true;
    };

    DR19_group(record){
        return true;
    };

    DC19_group(record){
        return true;
    };

    DD29_group(record){
        return true;
    };

    DB39_group(record){
        return true;
    };

    DD19_group(record){
        return true;
    };

    DU19_group(record){
        return true;
    };

    DV19_group(record){
        return true;
    };

    DW19_group(record){
        return true;
    };

    DT19_group(record){
        return true;
    };

    DA19_group(record){
        return true;
    };

    DJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DE13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    DJ15_group(record){
        return true;
    };

    DE15_group(record){
        return true;
    };

}
