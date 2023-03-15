import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCF_DRG=class{

    FB19_group(record){
        return true;
    };

    FB29_group(record){
        return true;
    };

    FD39_group(record){
        return true;
    };

    FE19_group(record){
        return true;
    };

    FE29_group(record){
        return true;
    };

    FF19_group(record){
        return true;
    };

    FJ19_group(record){
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

    FL39_group(record){
        return true;
    };

    FM29_group(record){
        return true;
    };

    FM49_group(record){
        return true;
    };

    FN19_group(record){
        return true;
    };

    FP19_group(record){
        return true;
    };

    FR19_group(record){
        return true;
    };

    FR49_group(record){
        return true;
    };

    FT29_group(record){
        return true;
    };

    FU29_group(record){
        return true;
    };

    FC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FD11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FD21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FL21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FM11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FM31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FN21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FT41_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FW21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FD23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FC15_group(record){
        return true;
    };

    FD15_group(record){
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

    FL25_group(record){
        return true;
    };

    FM15_group(record){
        return true;
    };

    FM35_group(record){
        return true;
    };

    FN25_group(record){
        return true;
    };

    FR25_group(record){
        return true;
    };

    FR35_group(record){
        return true;
    };

    FT15_group(record){
        return true;
    };

    FT35_group(record){
        return true;
    };

    FT45_group(record){
        return true;
    };

    FU15_group(record){
        return true;
    };

    FV25_group(record){
        return true;
    };

    FV35_group(record){
        return true;
    };

    FW15_group(record){
        return true;
    };

    FW25_group(record){
        return true;
    };

    FZ15_group(record){
        return true;
    };

}
