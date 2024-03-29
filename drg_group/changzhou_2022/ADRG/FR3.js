import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FR3_group(record){
    let adrg_zd=["I20.000","I20.000x004","I20.000x005","I20.001","I20.002","I20.003","I20.004","I20.005","I20.006","I20.101","I20.102","I20.800x006","I20.800x007","I20.801","I20.802","I20.803","I20.806","I20.807","I20.808","I20.900","I24.800x007","I24.801","I24.900x001","I24.901"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FR3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FR31_group(record)){
            return 'FR31';
        }

        if (drg.FR33_group(record)){
            return 'FR33';
        }

        if (drg.FR35_group(record)){
            return 'FR35';
        }

        if (drg.FR37_group(record)){
            return 'FR37';
        }

        return 'FR3';
    }else{
        return '';
    }
}
  