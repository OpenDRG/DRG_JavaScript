import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PS4_group(record){
    let adrg_zd=["P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011","P07.300x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList,adrg_zd) && record.weight>0 && record.weight>=2500 && record.ageDay<=28){
        putMessage('符合PS4入组条件，匹配规则：某一诊断匹配、体重大于2500克、新生儿');
        let drg=new MDCP_DRG();
                
        if (drg.PS41_group(record)){
            return 'PS41';
        }        if (drg.PS4B_group(record)){
            return 'PS4B';
        }
        return 'PS4';
    }else{
        return '';
    }
}
  