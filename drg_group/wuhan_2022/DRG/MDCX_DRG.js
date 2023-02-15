import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js'
export var MDCX_DRG=class{

    XR19_group(record){
        return true;
    };

    XR29_group(record){
        return true;
    };

    XS29_group(record){
        return true;
    };

    XT29_group(record){
        return true;
    };

    XJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XT31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    XS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XT33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    XJ1B_group(record){
        return true;
    };

    XT1B_group(record){
        return true;
    };

    XS15_group(record){
        return true;
    };

    XT35_group(record){
        return true;
    };

}
