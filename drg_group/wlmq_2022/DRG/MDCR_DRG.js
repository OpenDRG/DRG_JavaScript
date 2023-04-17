import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCR_DRG=class{

    RA19_group(record){
        return true;
    };

    RA39_group(record){
        return true;
    };

    RA49_group(record){
        return true;
    };

    RB19_group(record){
        return true;
    };

    RD19_group(record){
        return true;
    };

    RE19_group(record){
        return true;
    };

    RG19_group(record){
        return true;
    };

    RS29_group(record){
        return true;
    };

    RT29_group(record){
        return true;
    };

    RW19_group(record){
        return true;
    };

    RW29_group(record){
        return true;
    };

    RA21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RB21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RA25_group(record){
        return true;
    };

    RB25_group(record){
        return true;
    };

    RC15_group(record){
        return true;
    };

    RR15_group(record){
        return true;
    };

    RS15_group(record){
        return true;
    };

    RT15_group(record){
        return true;
    };

    RU15_group(record){
        return true;
    };

    RV15_group(record){
        return true;
    };

}
