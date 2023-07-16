import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';


export default function PJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["21.0902","31.3x03","31.7900x004","31.7900x005","45.9301","45.9303","47.1900x001","49.9100","58.0x05","58.3103","58.3905","58.5x00","58.5x01","59.0201","59.0202"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ageDay<=28){
        putMessage('符合PJ1入组条件，匹配规则：主手术匹配、新生儿');
        
        let drg=new MDCP_DRG();
        
        if (drg.PJ19_group(record)){
            return 'PJ19';
        }

        return '';
    }else{
        return '';
    }
}
  