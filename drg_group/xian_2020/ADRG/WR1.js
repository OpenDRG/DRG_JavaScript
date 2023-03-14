import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCW_DRG} from '../DRG/MDCW_DRG.js';

export default function WR1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合WR1入组条件，匹配规则：');
        let drg=new MDCW_DRG();
        
        if (drg.WR11_group(record)){
            return 'WR11';
        }

        if (drg.WR13_group(record)){
            return 'WR13';
        }

        if (drg.WR15_group(record)){
            return 'WR15';
        }

        return 'WR1';
    }else{
        return '';
    }
}
  