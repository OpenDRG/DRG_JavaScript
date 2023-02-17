import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCA_DRG=class{

    AF19_group(record){
        return true;
    };

    AG19_group(record){
        return true;
    };

    AG29_group(record){
        return true;
    };

    AH11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

}
