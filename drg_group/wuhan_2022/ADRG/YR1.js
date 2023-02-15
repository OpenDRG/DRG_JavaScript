import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCY_DRG} from '../DRG/MDCY_DRG.js';

export default function YR1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合YR1入组条件，匹配规则：');
        let drg=new MDCY_DRG();
                
        if (drg.YR11_group(record)){
            return 'YR11';
        }        if (drg.YR13_group(record)){
            return 'YR13';
        }        if (drg.YR15_group(record)){
            return 'YR15';
        }
        return 'YR1';
    }else{
        return '';
    }
}
  