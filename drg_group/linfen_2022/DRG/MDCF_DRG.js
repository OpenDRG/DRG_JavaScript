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

    FN19_group(record){
        return true;
    };

    FN29_group(record){
        return true;
    };

    FP19_group(record){
        return true;
    };

    FR39_group(record){
        return true;
    };

    FR49_group(record){
        return true;
    };

    FT19_group(record){
        return true;
    };

    FT29_group(record){
        return true;
    };

    FT39_group(record){
        return true;
    };

    FU29_group(record){
        return true;
    };

    FV19_group(record){
        return true;
    };

    FV29_group(record){
        return true;
    };

    FZ19_group(record){
        return true;
    };

    FF31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FV31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    FD23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FM43_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FT43_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FW23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    FD25_group(record){
        return true;
    };

    FF35_group(record){
        return true;
    };

    FM45_group(record){
        return true;
    };

    FR15_group(record){
        return true;
    };

    FR25_group(record){
        return true;
    };

    FT45_group(record){
        return true;
    };

    FU15_group(record){
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

}
