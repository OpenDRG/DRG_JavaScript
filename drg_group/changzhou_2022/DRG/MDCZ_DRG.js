import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCZ_DRG=class{

    ZB19_group(record){
        return true;
    };

    ZD19_group(record){
        return true;
    };

    ZZ17_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    ZJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    ZJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    ZJ15_group(record){
        return true;
    };

    ZZ15_group(record){
        return true;
    };

    ZC14_group(record){
        return record.ssList.length>1 && intersect(record.ssList.slice(1),["31.1x00x005","31.2100x001","31.2900x001","31.7400","31.7400x001","96.0400"]);
    };

    ZC18_group(record){
        return true;
    };

}
