import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCA_DRG=class{

    AF19_group(record){
        return true;
    };

    AE19_group(record){
        return true;
    };

    AB19_group(record){
        return true;
    };

    AD19_group(record){
        return true;
    };

    AC19_group(record){
        return true;
    };

    AG29_group(record){
        return true;
    };

    AG19_group(record){
        return true;
    };

    AA19_group(record){
        return true;
    };

    AH11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    AH15_group(record){
        return true;
    };

}
