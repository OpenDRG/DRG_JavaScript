import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.1300","07.1400","07.1500","07.5300","07.5301","07.6100x002","07.6100x003","07.6100x004","07.6200x003","07.6200x007","07.6201","07.6202","07.6301","07.6400x001","07.6500","07.6501","07.6800","07.6900x001","07.7100","07.7200x002","07.7200x003","07.7201","07.7202","07.7203","07.7901"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合KC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KC19_group(record)){
            return 'KC19';
        }

        return 'KC1';
    }else{
        return '';
    }
}
  