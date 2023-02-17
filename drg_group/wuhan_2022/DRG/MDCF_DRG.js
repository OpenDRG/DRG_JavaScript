import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCF_DRG=class{

    FB19_group(record){
        return true;
    };

    FB29_group(record){
        return true;
    };

    FC19_group(record){
        return true;
    };

    FC29_group(record){
        return true;
    };

    FC39_group(record){
        return true;
    };

    FD19_group(record){
        return true;
    };

    FD39_group(record){
        return true;
    };

    FF19_group(record){
        return true;
    };

    FK19_group(record){
        return true;
    };

    FK29_group(record){
        return true;
    };

    FK39_group(record){
        return true;
    };

    FL19_group(record){
        return true;
    };

    FM19_group(record){
        return true;
    };

    FM29_group(record){
        return true;
    };

    FN19_group(record){
        return true;
    };

    FR29_group(record){
        return true;
    };

    FR39_group(record){
        return true;
    };

    FS19_group(record){
        return true;
    };

    FT29_group(record){
        return true;
    };

    FT39_group(record){
        return true;
    };

    FU19_group(record){
        return true;
    };

    FV29_group(record){
        return true;
    };

    FV49_group(record){
        return true;
    };

    FW19_group(record){
        return true;
    };

    FB31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FE11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FN21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR41_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FW21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FD2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF4A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FJ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FL2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FM3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FB33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FE1B_group(record){
        return true;
    };

    FN2B_group(record){
        return true;
    };

    FR1B_group(record){
        return true;
    };

    FR4B_group(record){
        return true;
    };

    FT1B_group(record){
        return true;
    };

    FV1B_group(record){
        return true;
    };

    FW2B_group(record){
        return true;
    };

    FB35_group(record){
        return true;
    };

    FD25_group(record){
        return true;
    };

    FF25_group(record){
        return true;
    };

    FF35_group(record){
        return true;
    };

    FF45_group(record){
        return true;
    };

    FJ15_group(record){
        return true;
    };

    FL25_group(record){
        return true;
    };

    FM35_group(record){
        return true;
    };

    FU25_group(record){
        return true;
    };

    FV35_group(record){
        return true;
    };

    FZ15_group(record){
        return true;
    };

}
