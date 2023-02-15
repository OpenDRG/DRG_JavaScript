import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FV3_group(record){
    let adrg_zd=["I95.100","I95.101","R55.x00x001","R55.x00x002","R55.x00x003","R55.x00x004","R55.x00x005","R55.x00x006","R55.x00x007","R55.x00x008","R55.x00x009","R55.x00x010","R55.x00x011","R55.x00x012","R55.x00x013","R55.x00x014","R55.x02"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FV3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FV3A_group(record)){
            return 'FV3A';
        }        if (drg.FV35_group(record)){
            return 'FV35';
        }
        return 'FV3';
    }else{
        return '';
    }
}
  