import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCZ_DRG} from '../DRG/MDCZ_DRG.js';


export default function ZZ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && !intersect(record.ssList,SS_VALID)){
        putMessage('符合ZZ1入组条件，匹配规则：无手术');
        
        let drg=new MDCZ_DRG();
        
        if (drg.ZZ11_group(record)){
            return 'ZZ11';
        }

        if (drg.ZZ13_group(record)){
            return 'ZZ13';
        }

        if (drg.ZZ15_group(record)){
            return 'ZZ15';
        }

        return '';
    }else{
        return '';
    }
}
  