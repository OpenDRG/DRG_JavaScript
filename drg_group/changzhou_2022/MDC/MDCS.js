import {putMessage,intersect,SS_VALID} from '../Base.js';
import SB1_group from '../ADRG/SB1.js';
import SR1_group from '../ADRG/SR1.js';
import SS1_group from '../ADRG/SS1.js';
import ST1_group from '../ADRG/ST1.js';
import SU1_group from '../ADRG/SU1.js';
import SV1_group from '../ADRG/SV1.js';
import SZ1_group from '../ADRG/SZ1.js';

export default function MDCS_group(record){
    let mdc_zd=[];
    let dept_list=[];
    if (!(true)){
        return '';
    }
    
    putMessage('符合MDCS入组条件，匹配规则：无限制条件');
    let result;

    if (result=SB1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合SQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'SQY';
    }

    if (result=SR1_group(record)){
        return result;
    }

    if (result=SS1_group(record)){
        return result;
    }

    if (result=ST1_group(record)){
        return result;
    }

    if (result=SU1_group(record)){
        return result;
    }

    if (result=SV1_group(record)){
        return result;
    }

    if (result=SZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCS的ADRG入组条件');
}