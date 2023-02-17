import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GE2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["53.4101","53.4201","53.4301","53.4901","53.4902","53.5100","53.5101","53.5900x001","53.5901","53.5902","53.6101","53.6900x002","53.6901","53.7100","53.7100x001","53.7101","53.7200x001","53.7201","53.7202","53.7500","53.9x00x015","53.9x00x016","53.9x00x017","53.9x00x020","53.9x00x021","53.9x00x022","53.9x01","53.9x02","53.9x03","53.9x04","53.9x05","53.9x06"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GE2入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
                
        if (drg.GE2A_group(record)){
            return 'GE2A';
        }        if (drg.GE25_group(record)){
            return 'GE25';
        }
        return 'GE2';
    }else{
        return '';
    }
}
  