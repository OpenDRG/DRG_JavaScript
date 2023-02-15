import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCR_DRG=class{

    RA19_group(record){
        return true;
    };

    RT29_group(record){
        return true;
    };

    RW19_group(record){
        return true;
    };

    RE12_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1)) && record.age<17;
    };

    RB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RB21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RG11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RW21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    RE14_group(record){
        return record.zdList.length>1 && has_cc(record.zdList[0],record.zdList.slice(1))&& record.age<17;
    };

    RA23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RC13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RW23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    RE16_group(record){
        return record.age<17;
    };

    RA25_group(record){
        return true;
    };

    RB15_group(record){
        return true;
    };

    RB25_group(record){
        return true;
    };

    RC15_group(record){
        return true;
    };

    RD15_group(record){
        return true;
    };

    RG15_group(record){
        return true;
    };

    RR15_group(record){
        return true;
    };

    RS15_group(record){
        return true;
    };

    RS25_group(record){
        return true;
    };

    RT15_group(record){
        return true;
    };

    RU15_group(record){
        return true;
    };

    RW25_group(record){
        return true;
    };

}
