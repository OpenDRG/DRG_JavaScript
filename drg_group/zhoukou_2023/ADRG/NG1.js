import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';


export default function NG1_group(record){
    let adrg_zd=["N96.x00x003","N97.000x001","N97.100x001","N97.100x003","N97.101","N97.200x001","N97.200x002","N97.300","N97.800x004","N97.801","N97.900","N97.901","N97.902","Z31.100","Z31.200","Z31.200x003","Z31.201","Z31.300x001","Z31.300x002"];
    let adrg_zd1=[];
    let adrg_ss=["65.9900x008","69.9200x004","69.9200x006","69.9200x007","69.9200x008","69.9201","69.9202"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合NG1入组条件，匹配规则：主诊断匹配、主手术匹配');
        
        let drg=new MDCN_DRG();
        
        if (drg.NG19_group(record)){
            return 'NG19';
        }

        return '';
    }else{
        return '';
    }
}
  