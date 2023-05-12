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

    AH1B_group(record){
        return true;
    };

    AH11_group(record){
        return record.ssList.length>1 && record.ssList.includes("39.6500");
    };

    AH13_group(record){
        return record.ssList.length>1 && record.ssList.includes("96.7201") && record.ssList.includes("39.9500x007");
    };

    AH19_group(record){
        return record.ssList.length>1 && record.ssList.includes("96.7201");
    };

}
