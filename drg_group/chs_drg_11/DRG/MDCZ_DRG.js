import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCZ_DRG=class{

    ZD19_group(record){
        return true;
    };

    ZB19_group(record){
        return true;
    };

    ZJ11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZC11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZZ11_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZJ15_group(record){
        return true;
    };

    ZC15_group(record){
        return true;
    };

    ZZ15_group(record){
        return true;
    };

}
