import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCA_DRG=class{

    AA19_group(record){
        return true;
    };

    AB19_group(record){
        return true;
    };

    AC19_group(record){
        return true;
    };

    AD19_group(record){
        return true;
    };

    AE19_group(record){
        return true;
    };

    AF19_group(record){
        return true;
    };

    AG19_group(record){
        return true;
    };

    AG29_group(record){
        return true;
    };

    AH13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    AH11_group(record){
        return record.ssList.length>1 && record.ssList.includes("39.6500");
    };

    AH19_group(record){
        return record.ssList.length>1 && intersect(record.ssList,["31.1x00x005","31.2100x001","31.2900x001","96.0400"]) && record.ssList.includes("96.7201");
    };

}
