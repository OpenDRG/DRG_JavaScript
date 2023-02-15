import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
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

    FF19_group(record){
        return true;
    };

    FF29_group(record){
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

    FM49_group(record){
        return true;
    };

    FN29_group(record){
        return true;
    };

    FT19_group(record){
        return true;
    };

    FT29_group(record){
        return true;
    };

    FT49_group(record){
        return true;
    };

    FE21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FM31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FP11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR41_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FT31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FU21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV31_group(record){
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

    FF33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FN13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FR43_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FV33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FW13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FW23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FD25_group(record){
        return true;
    };

    FE25_group(record){
        return true;
    };

    FF35_group(record){
        return true;
    };

    FJ15_group(record){
        return true;
    };

    FM35_group(record){
        return true;
    };

    FN15_group(record){
        return true;
    };

    FP15_group(record){
        return true;
    };

    FR15_group(record){
        return true;
    };

    FR25_group(record){
        return true;
    };

    FR35_group(record){
        return true;
    };

    FR45_group(record){
        return true;
    };

    FT35_group(record){
        return true;
    };

    FU15_group(record){
        return true;
    };

    FU25_group(record){
        return true;
    };

    FV15_group(record){
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
