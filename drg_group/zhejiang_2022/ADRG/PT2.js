import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PT2_group(record){
    let adrg_zd=["P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011","P07.300x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0])) && record.weight>0 && record.weight>=2500 && record.ageDay<=28){
        putMessage('符合PT2入组条件，匹配规则：主诊断匹配、体重大于2500克、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PT21_group(record)){
            return 'PT21';
        }

        if (drg.PT23_group(record)){
            return 'PT23';
        }

        if (drg.PT25_group(record)){
            return 'PT25';
        }

        return 'PT2';
    }else{
        return '';
    }
}
  