import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.7000x001","00.7100x001","00.7200x001","00.7201","00.7300x001","00.7300x002","00.7300x003","00.7301","00.8000x001","00.8100x001","00.8200x001","00.8201","00.8300x001","00.8400x001","81.9700x002","81.9701","81.9702"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合IC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IC13_group(record)){
            return 'IC13';
        }

        if (drg.IC15_group(record)){
            return 'IC15';
        }

        return 'IC1';
    }else{
        return '';
    }
}
  