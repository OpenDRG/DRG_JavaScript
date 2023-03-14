import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FV4_group(record){
    let adrg_zd=["R07.101","R07.200","R07.301","R07.400","Z03.400"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FV4入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FV41_group(record)){
            return 'FV41';
        }

        if (drg.FV43_group(record)){
            return 'FV43';
        }

        if (drg.FV45_group(record)){
            return 'FV45';
        }

        return 'FV4';
    }else{
        return '';
    }
}
  