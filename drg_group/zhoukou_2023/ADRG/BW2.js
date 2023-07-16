import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';


export default function BW2_group(record){
    let adrg_zd=["G80.000","G80.000x011","G80.000x021","G80.100","G80.101","G80.200","G80.200x001","G80.300","G80.300x003","G80.301","G80.302","G80.303","G80.305","G80.400","G80.800","G80.801","G80.802","G80.900","G81.000","G81.100","G81.900","G81.900x002","G81.901","G81.902","G81.903"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合BW2入组条件，匹配规则：主诊断匹配');
        
        let drg=new MDCB_DRG();
        
        if (drg.BW21_group(record)){
            return 'BW21';
        }

        if (drg.BW23_group(record)){
            return 'BW23';
        }

        if (drg.BW25_group(record)){
            return 'BW25';
        }

        return '';
    }else{
        return '';
    }
}
  