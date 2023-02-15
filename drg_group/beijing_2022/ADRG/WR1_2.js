import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCW_DRG} from '../DRG/MDCW_DRG.js';

export default function WR1_2_group(record){
    let adrg_zd=[];
    let adrg_zd1=["T31.300","T31.400","T31.500","T31.600","T31.700","T31.800","T31.900","T32.300","T32.400","T32.500","T32.600","T32.700","T32.800","T32.900"];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList.slice(1),adrg_zd1)){
        putMessage('符合WR1_2入组条件，匹配规则：其他诊断匹配');
        let drg=new MDCW_DRG();
                
        if (drg.WR11_group(record)){
            return 'WR11';
        }        if (drg.WR15_group(record)){
            return 'WR15';
        }
        return 'WR1';
    }else{
        return '';
    }
}
  