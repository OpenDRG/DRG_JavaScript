import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PS1_group(record){
    let adrg_zd=["P05.001","P05.102","P07.000","P07.001","P07.002","P07.100","P07.102","P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.weight>0 && record.weight<1500 && record.ageDay<=28){
        putMessage('符合PS1入组条件，匹配规则：主诊断匹配、体重小于1500克、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PS11_group(record)){
            return 'PS11';
        }

        if (drg.PS19_group(record)){
            return 'PS19';
        }

        return 'PS1';
    }else{
        return '';
    }
}
  