import {putMessage,intersect,SS_VALID} from '../Base.js'
import AA1_group from '../ADRG/AA1.js';
import AB1_group from '../ADRG/AB1.js';
import AC1_group from '../ADRG/AC1.js';
import AD1_group from '../ADRG/AD1.js';
import AE1_group from '../ADRG/AE1.js';
import AF1_group from '../ADRG/AF1.js';
import AG1_group from '../ADRG/AG1.js';
import AG2_group from '../ADRG/AG2.js';
import AH1_1_group from '../ADRG/AH1_1.js';
import AH1_2_group from '../ADRG/AH1_2.js';

export default function MDCA_group(record){
    let mdc_zd=[];
    let dept_list=[];
    if (!(true && record.ssList && record.ssList && SS_VALID.includes(record.ssList[0]))){
        return '';
    }
    
    putMessage('符合MDCA入组条件，匹配规则：存在手术');
    let result;

    if (result=AA1_group(record)){
        return result;
    }

    if (result=AB1_group(record)){
        return result;
    }

    if (result=AC1_group(record)){
        return result;
    }

    if (result=AD1_group(record)){
        return result;
    }

    if (result=AE1_group(record)){
        return result;
    }

    if (result=AF1_group(record)){
        return result;
    }

    if (result=AG1_group(record)){
        return result;
    }

    if (result=AG2_group(record)){
        return result;
    }

    if (result=AH1_1_group(record)){
        return result;
    }

    if (result=AH1_2_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合AQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'AQY';
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}