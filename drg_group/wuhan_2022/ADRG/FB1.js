import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["37.5200x001","37.5300x001","37.5400","37.5500","37.6000","37.6101","37.6200x002","37.6201","37.6301","37.6400x001","37.6500x001","37.6600x001","37.6600x002","37.6700","37.6800x001","37.6800x002","37.6800x003","37.6800x004","37.6800x005","39.6500"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FB19_group(record)){
            return 'FB19';
        }
        return 'FB1';
    }else{
        return '';
    }
}
  