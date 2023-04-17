import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["81.0100x001","81.0101","81.0103","81.0104","81.0200x001","81.0200x002","81.0400x004","81.0400x005","81.0401","81.0402","81.0600x005","81.0600x006","81.0601","81.0602"];
    let adrg_ss1=["81.0102","81.0105","81.0300x001","81.0300x002","81.0500x005","81.0500x006","81.0501","81.0502","81.0700x002","81.0701","81.0702","81.0800x016","81.0800x017","81.0800x018","81.0801","81.0802"];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss) && intersect(record.ssList,adrg_ss1)){
        putMessage('符合IB1入组条件，匹配规则：双手术匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IB19_group(record)){
            return 'IB19';
        }

        return 'IB1';
    }else{
        return '';
    }
}
  