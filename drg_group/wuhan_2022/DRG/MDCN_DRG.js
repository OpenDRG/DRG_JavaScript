import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCN_DRG=class{

    NE19_group(record){
        return true;
    };

    NG19_group(record){
        return true;
    };

    NZ19_group(record){
        return true;
    };

    NA11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NC11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    NA2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NB1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ND1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NF1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NJ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    NA1B_group(record){
        return true;
    };

    NC1B_group(record){
        return true;
    };

    NR1B_group(record){
        return true;
    };

    NS1B_group(record){
        return true;
    };

    NA25_group(record){
        return true;
    };

    NB15_group(record){
        return true;
    };

    ND15_group(record){
        return true;
    };

    NF15_group(record){
        return true;
    };

    NJ15_group(record){
        return true;
    };

}
