import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["56.0x01","56.0x02","56.4100x012","57.0x00x003","57.0x00x005","57.0x00x006","57.0x01","57.0x02","57.0x03","57.0x04","57.4100x002","57.4900x001","57.4901","57.4902","57.4903","57.4904","57.9101","57.9102","57.9201","57.9301","59.8x00x004","59.8x00x005","59.8x00x006","59.8x03","59.8x04"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
        
        if (drg.LD11_group(record)){
            return 'LD11';
        }

        if (drg.LD13_group(record)){
            return 'LD13';
        }

        if (drg.LD15_group(record)){
            return 'LD15';
        }

        return 'LD1';
    }else{
        return '';
    }
}
  