import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';


export default function BV3_group(record){
    let adrg_zd=["G43.000","G43.100","G43.100x002","G43.100x005","G43.100x006","G43.100x011","G43.102","G43.103","G43.105","G43.106","G43.200","G43.300","G43.800x002","G43.801","G43.802","G43.803","G43.804","G43.900","G44.000","G44.000x002","G44.000x004","G44.001","G44.002","G44.003","G44.004","G44.005","G44.100","G44.100x004","G44.200","G44.200x003","G44.200x005","G44.201","G44.202","G44.204","G44.205","G44.207","G44.208","G44.300","G44.400","G44.800","G44.800x001","G44.800x002","G44.800x006","G97.101","R51.x00","R51.x00x002","R51.x00x003"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合BV3入组条件，匹配规则：主诊断匹配');
        
        let drg=new MDCB_DRG();
        
        if (drg.BV31_group(record)){
            return 'BV31';
        }

        if (drg.BV33_group(record)){
            return 'BV33';
        }

        if (drg.BV35_group(record)){
            return 'BV35';
        }

        return '';
    }else{
        return '';
    }
}
  