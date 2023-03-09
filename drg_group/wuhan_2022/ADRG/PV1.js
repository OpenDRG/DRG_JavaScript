import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PV1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合PV1入组条件，匹配规则：');
        let drg=new MDCP_DRG();
        
        if (drg.PV19_group(record)){
            return 'PV19';
        }

        return 'PV1';
    }else{
        return '';
    }
}
  