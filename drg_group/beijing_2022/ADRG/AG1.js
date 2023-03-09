import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AG1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["41.0000","41.0200","41.0300","41.0500","41.0600","41.0800x001"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合AG1入组条件，匹配规则：主手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AG11_group(record)){
            return 'AG11';
        }

        if (drg.AG15_group(record)){
            return 'AG15';
        }

        return 'AG1';
    }else{
        return '';
    }
}
  