import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AH1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["31.1x00x005","31.2100x001","31.2900x001","39.6500","96.0400","96.7201"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合AH1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AH11_group(record)){
            return 'AH11';
        }

        if (drg.AH13_group(record)){
            return 'AH13';
        }

        if (drg.AH19_group(record)){
            return 'AH19';
        }

        return 'AH1';
    }else{
        return '';
    }
}
  