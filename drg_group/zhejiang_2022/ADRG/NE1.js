import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["68.2100x002","68.2101","68.2201","68.2202","68.2204","68.2206","68.2300","68.2300x005","68.2301","68.2302","68.2900x038","68.2900x048","68.2902","68.2903","68.2913","68.2914","68.2915","68.2916","69.7x00","97.7101","97.7102","98.1600x001","98.1600x002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合NE1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCN_DRG();
        
        if (drg.NE11_group(record)){
            return 'NE11';
        }

        if (drg.NE13_group(record)){
            return 'NE13';
        }

        if (drg.NE15_group(record)){
            return 'NE15';
        }

        return 'NE1';
    }else{
        return '';
    }
}
  