import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCV_DRG=class{

    VB19_group(record){
        return true;
    };

    VC19_group(record){
        return true;
    };

    VR19_group(record){
        return true;
    };

    VS19_group(record){
        return true;
    };

    VT19_group(record){
        return true;
    };

    VZ19_group(record){
        return true;
    };

    VS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    VJ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VJ15_group(record){
        return true;
    };

    VS25_group(record){
        return true;
    };

}
