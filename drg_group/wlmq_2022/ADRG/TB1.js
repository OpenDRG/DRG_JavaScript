import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && SS_VALID.includes(record.ssList[0])){
        putMessage('符合TB1入组条件，匹配规则：存在手术');
        let drg=new MDCT_DRG();
        
        if (drg.TB13_group(record)){
            return 'TB13';
        }

        if (drg.TB15_group(record)){
            return 'TB15';
        }

        return 'TB1';
    }else{
        return '';
    }
}
  