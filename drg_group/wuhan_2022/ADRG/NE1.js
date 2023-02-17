import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["68.2101","68.2201","68.2202","68.2204","68.2206","68.2300","68.2300x005","68.2301","68.2900x038","68.2900x048","68.2902","68.2903","68.2909","68.2910","68.2911","68.2913","68.2914","69.7x00","97.7102","98.1600x001","98.1600x002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合NE1入组条件，匹配规则：主手术匹配');
        let drg=new MDCN_DRG();
                
        if (drg.NE19_group(record)){
            return 'NE19';
        }
        return 'NE1';
    }else{
        return '';
    }
}
  