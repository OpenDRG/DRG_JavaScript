import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCX_DRG=class{

    XR19_group(record){
        return true;
    };

    XT19_group(record){
        return true;
    };

    XT29_group(record){
        return true;
    };

    XR31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XJ1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR2A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XS1A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT3A_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XR3B_group(record){
        return true;
    };

    XJ15_group(record){
        return true;
    };

    XR25_group(record){
        return true;
    };

    XS15_group(record){
        return true;
    };

    XS25_group(record){
        return true;
    };

    XT35_group(record){
        return true;
    };

}
