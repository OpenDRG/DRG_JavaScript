import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RT2_group(record){
    let adrg_zd=["D19.900x001","D36.700x011","D36.700x012","D36.700x021","D36.700x023","D36.700x025","D36.700x028","D36.704","D36.705","D36.709","D36.710","D36.711"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RT2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RT29_group(record)){
            return 'RT29';
        }

        return 'RT2';
    }else{
        return '';
    }
}
  