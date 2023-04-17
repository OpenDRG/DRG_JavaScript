import {putMessage,intersect,SS_VALID} from '../Base.js';
import YC1_group from '../ADRG/YC1.js';
import YR1_group from '../ADRG/YR1.js';
import YR2_group from '../ADRG/YR2.js';

export default function MDCY_group(record){
    let mdc_zd=["B20.000x001","B20.001","B20.002","B20.003","B20.004","B20.005","B20.006","B20.100x001","B20.200x001","B20.300x001","B20.301","B20.400x001","B20.500x001","B20.600x001","B20.700x001","B20.801","B20.901","B21.000x001","B21.100x001","B21.200x001","B21.300","B21.700","B21.800","B21.900","B22.000x001","B22.000x003","B22.000x004","B22.000x005","B22.001+F02.4*","B22.100","B22.200","B22.700","B22.701","B23.000","B23.100","B23.100x001","B23.100x002","B23.200","B23.201","B23.800","B23.800x001","B23.800x002","B23.801","B24.x01","I33.000x018","O98.700","R75.x00x001","Z20.600","Z21.x00x001"];
    let dept_list=[];
    if (!(true && intersect(record.zdList,mdc_zd))){
        return '';
    }
    
    putMessage('符合MDCY入组条件，匹配规则：某一诊断匹配、更改主诊断');
    let result;

    if (result=YC1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合YQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'YQY';
    }

    if (result=YR1_group(record)){
        return result;
    }

    if (result=YR2_group(record)){
        return result;
    }
 
    putMessage('不符合MDCY的ADRG入组条件');
}