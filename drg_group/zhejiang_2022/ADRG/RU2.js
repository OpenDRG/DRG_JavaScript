import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RU2_group(record){
    let adrg_zd=["Z51.800x095","Z51.800x951","Z51.800x952","Z51.802","Z51.805","Z51.808","Z51.810"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合RU2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RU21_group(record)){
            return 'RU21';
        }

        if (drg.RU23_group(record)){
            return 'RU23';
        }

        if (drg.RU25_group(record)){
            return 'RU25';
        }

        return 'RU2';
    }else{
        return '';
    }
}
  