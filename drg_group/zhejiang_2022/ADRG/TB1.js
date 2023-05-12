import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && SS_VALID.includes(record.ssList[0])){
        putMessage('符合TB1入组条件，匹配规则：存在手术');
        let drg=new MDCT_DRG();
        
        if (drg.TB19_group(record)){
            return 'TB19';
        }

        return 'TB1';
    }else{
        return '';
    }
}
  