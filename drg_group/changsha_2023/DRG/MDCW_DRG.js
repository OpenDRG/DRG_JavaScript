import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCW_DRG=class{

    WB19_group(record){
        return true;
    };

    WC19_group(record){
        return true;
    };

    WJ19_group(record){
        return true;
    };

    WZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    WR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    WR15_group(record){
        return true;
    };

    WZ15_group(record){
        return true;
    };

}
