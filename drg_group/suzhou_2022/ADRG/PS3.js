import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PS3_group(record){
    let adrg_zd=["P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011","P07.300x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList,adrg_zd) && record.weight>0 && record.weight>=2000 && record.weight<2500 && record.ageDay<=28){
        putMessage('符合PS3入组条件，匹配规则：某一诊断匹配、体重2000至2500克、新生儿');
        let drg=new MDCP_DRG();
                
        if (drg.PS31_group(record)){
            return 'PS31';
        }        if (drg.PS3B_group(record)){
            return 'PS3B';
        }
        return 'PS3';
    }else{
        return '';
    }
}
  