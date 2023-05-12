import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCZ_DRG=class{

    ZB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZB1B_group(record){
        return true;
    };

    ZC1B_group(record){
        return true;
    };

    ZD1B_group(record){
        return true;
    };

    ZJ1B_group(record){
        return true;
    };

    ZZ1B_group(record){
        return true;
    };

}
