import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCW_DRG=class{

    WB19_group(record){
        return true;
    };

    WC19_group(record){
        return true;
    };

    WJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    WR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    WZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    WJ15_group(record){
        return true;
    };

    WR15_group(record){
        return true;
    };

    WZ15_group(record){
        return true;
    };

}
