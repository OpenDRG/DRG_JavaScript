import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCX_DRG} from '../DRG/MDCX_DRG.js';

export default function XJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && SS_VALID.includes(record.ssList[0])){
        putMessage('符合XJ1入组条件，匹配规则：存在手术');
        let drg=new MDCX_DRG();
                
        if (drg.XJ11_group(record)){
            return 'XJ11';
        }        if (drg.XJ1B_group(record)){
            return 'XJ1B';
        }
        return 'XJ1';
    }else{
        return '';
    }
}
  