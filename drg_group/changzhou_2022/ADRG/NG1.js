import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NG1_group(record){
    let adrg_zd=["Z31.100","Z31.200","Z31.200x003","Z31.201","Z31.300x001","Z31.300x002"];
    let adrg_zd1=[];
    let adrg_ss=["65.9900x005","65.9900x006","65.9900x008","69.9200x004","69.9200x006","69.9200x007","69.9200x008","69.9201","69.9202","75.9900x004"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合NG1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCN_DRG();
        
        return 'NG1';
    }else{
        return '';
    }
}
  