import {putMessage,intersect,has_mcc,has_cc,SS_VALID} from '../Base.js';

export var MDCB_DRG=class{

    BT10_group(record){
        return record.age<=17;
    };

    BU20_group(record){
        return record.age<=17;
    };

    BY10_group(record){
        return record.age<=17;
    };

    BZ10_group(record){
        return record.age<=17;
    };

    BB19_group(record){
        return true;
    };

    BB29_group(record){
        return true;
    };

    BC19_group(record){
        return true;
    };

    BC29_group(record){
        return true;
    };

    BD19_group(record){
        return true;
    };

    BD29_group(record){
        return true;
    };

    BE19_group(record){
        return true;
    };

    BE29_group(record){
        return true;
    };

    BL19_group(record){
        return true;
    };

    BU29_group(record){
        return true;
    };

    BU39_group(record){
        return true;
    };

    BV29_group(record){
        return true;
    };

    BV39_group(record){
        return true;
    };

    BW29_group(record){
        return true;
    };

    BX19_group(record){
        return true;
    };

    BX29_group(record){
        return true;
    };

    BR17_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    BR27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    BY27_group(record){
        return record.inHospitalTime<5 && (record.leavingType=="2" || record.leavingType=="5");
    };

    BV12_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1)) && record.age<=17;
    };

    BJ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BM11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BR11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BR21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BS11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BT11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BT21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BU11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BV11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BW11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BY11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BY21_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BY31_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BZ11_group(record){
        return record.zdList.length>1 && has_mcc(record.zdList[0],record.zdList.slice(1));
    };

    BV14_group(record){
        return record.zdList.length>1 && has_cc(record.zdList[0],record.zdList.slice(1))&& record.age<=17;
    };

    BJ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BM13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BR13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BR23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BS13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BT13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BT23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BU13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BV13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BW13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BY13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BY23_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BY33_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BZ13_group(record){
        return record.zdList.length>1 && (has_mcc(record.zdList[0],record.zdList.slice(1)) || has_cc(record.zdList[0],record.zdList.slice(1)));
    };

    BV16_group(record){
        return record.age<=17;
    };

    BJ15_group(record){
        return true;
    };

    BM15_group(record){
        return true;
    };

    BR15_group(record){
        return true;
    };

    BR25_group(record){
        return true;
    };

    BS15_group(record){
        return true;
    };

    BT15_group(record){
        return true;
    };

    BT25_group(record){
        return true;
    };

    BU15_group(record){
        return true;
    };

    BV15_group(record){
        return true;
    };

    BW15_group(record){
        return true;
    };

    BY15_group(record){
        return true;
    };

    BY25_group(record){
        return true;
    };

    BY35_group(record){
        return true;
    };

    BZ15_group(record){
        return true;
    };

}
