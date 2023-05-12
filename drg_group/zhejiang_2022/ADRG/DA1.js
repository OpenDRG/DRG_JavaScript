import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DA1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DA1入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DA11_group(record)){
            return 'DA11';
        }

        if (drg.DA13_group(record)){
            return 'DA13';
        }

        if (drg.DA15_group(record)){
            return 'DA15';
        }

        return 'DA1';
    }else{
        return '';
    }
}
  