import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FD3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["35.4200x003","35.4200x009","35.5200x001","35.5200x002","35.5200x002","35.5201","35.5500x001","35.5500x001","35.9800x001","35.9800x002","36.9900x005","36.9901","39.7800x008","39.7900x402"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FD3入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FD39_group(record)){
            return 'FD39';
        }

        return 'FD3';
    }else{
        return '';
    }
}
  