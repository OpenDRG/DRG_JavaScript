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

    FD19_group(record){
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

    FF29_group(record){
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

    FL29_group(record){
        return true;
    };

    FL39_group(record){
        return true;
    };

    FM19_group(record){
        return true;
    };

    FM29_group(record){
        return true;
    };

    FM39_group(record){
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

    FR39_group(record){
        return true;
    };

    FR49_group(record){
        return true;
    };

    FT29_group(record){
        return true;
    };

    FT39_group(record){
        return true;
    };

    FV19_group(record){
        return true;
    };

    FF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU21_group(record){
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

    FN2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT4A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FW1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FF33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FW2B_group(record){
        return true;
    };

    FD25_group(record){
        return true;
    };

    FF35_group(record){
        return true;
    };

    FN25_group(record){
        return true;
    };

    FR25_group(record){
        return true;
    };

    FT15_group(record){
        return true;
    };

    FT45_group(record){
        return true;
    };

    FU15_group(record){
        return true;
    };

    FU25_group(record){
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

    FZ15_group(record){
        return true;
    };

}
