import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["58.0x00x003","58.0x00x004","58.0x01","58.0x02","58.0x03","58.0x04","58.0x05","58.1x01","58.3101","58.3103","58.3901","58.3902","58.3903","58.3904","58.3905","58.3906","58.4100","58.4200","58.4301","58.4302","58.4303","58.4304","58.4305","58.4400","58.4400x001","58.4401","58.4500x001","58.4500x002","58.4501","58.4502","58.4503","58.4600x001","58.4600x002","58.4600x003","58.4600x004","58.4600x005","58.4600x006","58.4600x007","58.4600x008","58.4600x009","58.4601","58.4700","58.4701","58.4702","58.4900x003","58.4900x005","58.4900x006","58.4901","58.4902","58.5x00","58.5x00x002","58.5x01","58.5x02","58.5x03","58.6x00x001","58.6x00x004","58.6x01","58.6x02","58.6x03","58.9101","58.9102","58.9200x002","58.9201","58.9300","58.9901","59.5x00","59.5x01","59.5x02","59.6x00","59.7900x001","59.7901","59.7903","59.7904","59.9903","63.6x00x002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LE1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LE19_group(record)){
            return 'LE19';
        }
        return 'LE1';
    }else{
        return '';
    }
}
  