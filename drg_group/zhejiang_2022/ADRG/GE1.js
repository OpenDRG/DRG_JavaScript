import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["17.1100x001","17.1200x001","17.1300x001","17.1300x002","17.2100x001","17.2200x001","17.2300x001","17.2400x001","53.0001","53.0002","53.0100x001","53.0101","53.0102","53.0201","53.0202","53.0203","53.0204","53.0301","53.0302","53.0401","53.0501","53.1000","53.1101","53.1201","53.1202","53.1203","53.1301","53.1401","53.1501","53.1601","53.1701","53.2101","53.2901","53.3101","53.3901","53.6200","53.6301","53.6302","53.6901"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GE1入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GE10_group(record)){
            return 'GE10';
        }

        if (drg.GE11_group(record)){
            return 'GE11';
        }

        if (drg.GE13_group(record)){
            return 'GE13';
        }

        if (drg.GE15_group(record)){
            return 'GE15';
        }

        if (drg.GE19_group(record)){
            return 'GE19';
        }

        return 'GE1';
    }else{
        return '';
    }
}
  