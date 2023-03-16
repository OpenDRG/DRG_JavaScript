import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCE_DRG=class{

    EB19_group(record){
        return true;
    };

    EC19_group(record){
        return true;
    };

    ED19_group(record){
        return true;
    };

    EJ19_group(record){
        return true;
    };

    ER29_group(record){
        return true;
    };

    ES19_group(record){
        return true;
    };

    ES29_group(record){
        return true;
    };

    ET19_group(record){
        return true;
    };

    ET29_group(record){
        return true;
    };

    EU19_group(record){
        return true;
    };

    EV19_group(record){
        return true;
    };

    EW19_group(record){
        return true;
    };

    EX19_group(record){
        return true;
    };

    EX29_group(record){
        return true;
    };

    EZ19_group(record){
        return true;
    };

    ER11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ER31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ER13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ER33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ER15_group(record){
        return true;
    };

    ER35_group(record){
        return true;
    };

}
