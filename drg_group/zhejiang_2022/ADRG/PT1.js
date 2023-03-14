import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PT1_group(record){
    let adrg_zd=["P05.001","P05.102","P07.100","P07.101","P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011","P07.300x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.weight>0 && record.weight>=1500 && record.weight<2500 && record.ageDay<=28){
        putMessage('符合PT1入组条件，匹配规则：主诊断匹配、体重1500至2500克、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PT11_group(record)){
            return 'PT11';
        }

        if (drg.PT13_group(record)){
            return 'PT13';
        }

        if (drg.PT15_group(record)){
            return 'PT15';
        }

        return 'PT1';
    }else{
        return '';
    }
}
  