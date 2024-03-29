import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCV_DRG} from '../DRG/MDCV_DRG.js';

export default function VS1_group(record){
    let adrg_zd=["T78.000","T78.101","T78.102","T78.200","T78.201","T78.300","T78.300x003","T78.300x004","T78.301","T78.400","T78.400x002","T80.300","T80.300x001","T80.400","T80.500","T80.500x001","T80.600x004","T80.600x005","T80.600x006","T80.601","T80.602","T80.603","T80.900x003","T80.901","T80.903","T88.600","T88.601","T88.700x004"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合VS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCV_DRG();
        
        if (drg.VS15_group(record)){
            return 'VS15';
        }

        if (drg.VS1A_group(record)){
            return 'VS12';
        }

        return 'VS1';
    }else{
        return '';
    }
}
  