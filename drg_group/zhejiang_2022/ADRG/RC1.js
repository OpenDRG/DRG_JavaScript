import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["92.2001","92.2100","92.2201","92.2301","92.2302","92.2303","92.2400x002","92.2400x003","92.2400x004","92.2400x005","92.2400x006","92.2400x007","92.2501","92.2601","92.2602","92.2700x002","92.2701","92.2702","92.2703","92.2704","92.2705","92.2706","92.2900x001","92.2900x002","92.2900x003","92.3000","92.3101","92.3102","92.3200x001","92.3201","92.3202","92.3300","92.3900"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RC11_group(record)){
            return 'RC11';
        }

        if (drg.RC13_group(record)){
            return 'RC13';
        }

        if (drg.RC15_group(record)){
            return 'RC15';
        }

        return 'RC1';
    }else{
        return '';
    }
}
  