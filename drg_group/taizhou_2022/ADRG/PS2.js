import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PS2_group(record){
    let adrg_zd=["P07.200","P07.200x011","P07.200x021","P07.300","P07.300x001","P07.300x011","P07.300x021"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList,adrg_zd) && record.weight>0 && record.weight>=1500 && record.weight<2000 && record.ageDay<=28){
        putMessage('符合PS2入组条件，匹配规则：某一诊断匹配、体重1500至2000克、新生儿');
        let drg=new MDCP_DRG();
                
        if (drg.PS21_group(record)){
            return 'PS21';
        }        if (drg.PS23_group(record)){
            return 'PS23';
        }        if (drg.PS25_group(record)){
            return 'PS25';
        }
        return 'PS2';
    }else{
        return '';
    }
}
  