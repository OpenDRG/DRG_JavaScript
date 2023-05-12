import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["50.5100","50.5100x001","50.5900x001","50.5900x004","50.5900x005","50.5901","50.5902"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合AB1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AB19_group(record)){
            return 'AB19';
        }

        return 'AB1';
    }else{
        return '';
    }
}
  