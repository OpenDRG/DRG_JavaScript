import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCU_DRG=class{

    US19_group(record){
        return true;
    };

    UR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    UR15_group(record){
        return true;
    };

}
