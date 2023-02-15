import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BX1_group(record){
    let adrg_zd=["F01.000","F01.100","F01.102","F01.200","F01.300","F01.800x001","F01.900","F01.901","F01.902","F03.x00","F03.x01","G10.x00","G10.x01+F02.2*","G93.804","M30.005+F02.8*","N18.502+F02.8*"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合BX1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCB_DRG();
                
        if (drg.BX11_group(record)){
            return 'BX11';
        }        if (drg.BX13_group(record)){
            return 'BX13';
        }        if (drg.BX15_group(record)){
            return 'BX15';
        }
        return 'BX1';
    }else{
        return '';
    }
}
  