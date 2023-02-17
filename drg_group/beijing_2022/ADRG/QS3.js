import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QS3_group(record){
    let adrg_zd=["D60.000x001","D60.100x001","D60.800","D60.900x001","D61.000","D61.000x006","D61.001","D61.002","D61.003","D61.004","D61.005","D61.006","D61.007","D61.101","D61.102","D61.200x002","D61.201","D61.202","D61.300","D61.800x002","D61.801","D61.802","D61.900","D61.900x001","D61.901","D61.902","D61.903","D61.904","D61.905","D61.906","D61.907","D61.908","D61.909"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合QS3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCQ_DRG();
                
        if (drg.QS31_group(record)){
            return 'QS31';
        }        if (drg.QS35_group(record)){
            return 'QS35';
        }
        return 'QS3';
    }else{
        return '';
    }
}
  