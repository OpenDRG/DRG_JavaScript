import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FF1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.0900x003","38.5900x005","38.5900x008","38.5900x009","38.5900x010","38.5901","38.5902","38.5903","38.5904","38.5905","38.5906","38.5907","39.2900x001","39.2900x002","39.2900x044"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FF1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FF19_group(record)){
            return 'FF19';
        }

        return 'FF1';
    }else{
        return '';
    }
}
  