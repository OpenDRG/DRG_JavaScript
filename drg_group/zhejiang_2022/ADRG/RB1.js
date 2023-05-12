import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RB11_group(record)){
            return 'RB11';
        }

        if (drg.RB13_group(record)){
            return 'RB13';
        }

        if (drg.RB15_group(record)){
            return 'RB15';
        }

        return 'RB1';
    }else{
        return '';
    }
}
  