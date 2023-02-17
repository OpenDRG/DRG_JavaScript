import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["93.9000x003","93.9001","96.7101"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ageDay<=28){
        putMessage('符合PK1入组条件，匹配规则：主手术匹配、新生儿');
        let drg=new MDCP_DRG();
                

        return 'PK1';
    }else{
        return '';
    }
}
  