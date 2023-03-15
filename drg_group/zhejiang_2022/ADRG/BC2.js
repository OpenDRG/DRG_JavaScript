import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["02.2200x005","02.2206","02.2207","02.2208","02.2209","02.2210","02.2211","02.2212","02.2213","02.2214","02.2215","02.2216","02.3101","02.3102","02.3103","02.3200x001","02.3201","02.3202","02.3203","02.3204","02.3300x001","02.3301","02.3400x002","02.3401","02.3402","02.3403","02.3404","02.3405","02.3501","02.3502","02.3901","02.4101","02.4102","02.4201","02.4202","02.4203","02.4204","02.4301","04.0726","54.9502"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合BC2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BC21_group(record)){
            return 'BC21';
        }

        if (drg.BC23_group(record)){
            return 'BC23';
        }

        if (drg.BC25_group(record)){
            return 'BC25';
        }

        return 'BC2';
    }else{
        return '';
    }
}
  