import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCM_DRG} from '../DRG/MDCM_DRG.js';


export default function MB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["60.0x00x001","60.0x00x003","60.0x01","60.0x02","60.0x03","60.2100x001","60.2100x002","60.2900x003","60.2900x004","60.2901","60.2902","60.3x01","60.4x01","60.5x01","60.5x02","60.6100x001","60.6100x002","60.6101","60.6200","60.6201","60.6900x001","60.6900x002","60.8201","60.9300","60.9400x001","60.9401","60.9500x001","60.9600x001","60.9701","60.9702","60.9901"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合MB1入组条件，匹配规则：主手术匹配');
        
        let drg=new MDCM_DRG();
        
        if (drg.MB11_group(record)){
            return 'MB11';
        }

        if (drg.MB13_group(record)){
            return 'MB13';
        }

        if (drg.MB15_group(record)){
            return 'MB15';
        }

        return '';
    }else{
        return '';
    }
}
  