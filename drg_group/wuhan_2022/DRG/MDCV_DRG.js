import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
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

    VZ19_group(record){
        return true;
    };

    VJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    VS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    VS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    VJ15_group(record){
        return true;
    };

    VS15_group(record){
        return true;
    };

    VS25_group(record){
        return true;
    };

    VT15_group(record){
        return true;
    };

}
