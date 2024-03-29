import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCQ_DRG=class{

    QR10_group(record){
        return record.age<=17;
    };

    QS20_group(record){
        return record.age<=17;
    };

    QC19_group(record){
        return true;
    };

    QJ19_group(record){
        return true;
    };

    QS19_group(record){
        return true;
    };

    QS49_group(record){
        return true;
    };

    QB11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    QR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    QS21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    QS31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    QT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    QD13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    QR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    QS23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    QS33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    QT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    QB15_group(record){
        return true;
    };

    QD15_group(record){
        return true;
    };

    QR15_group(record){
        return true;
    };

    QS25_group(record){
        return true;
    };

    QS35_group(record){
        return true;
    };

    QT15_group(record){
        return true;
    };

}
