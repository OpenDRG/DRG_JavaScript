import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FV2_group(record){
    let adrg_zd=["E10.700x022","E10.700x023","E11.700x022","E11.700x023","E14.700x022","E14.700x023","E16.800x101","E16.800x102","I10.x00x002","I10.x00x007","I10.x00x008","I10.x00x009","I10.x00x015","I10.x00x016","I10.x00x017","I10.x02","I10.x03","I10.x04","I10.x05","I10.x06","I10.x08","I10.x09","I10.x10","I10.x12","I10.x13","I10.x14","I11.901","I13.900x001","I13.900x001","I15.000","I15.100x001","I15.101","I15.102","I15.103","I15.200x001","I15.200x002","I15.200x003","I15.200x004","I15.200x005","I15.800x001","I15.800x002","I15.800x003","I15.800x004","I15.800x006","I15.900"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FV2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FV21_group(record)){
            return 'FV21';
        }        if (drg.FV23_group(record)){
            return 'FV23';
        }        if (drg.FV25_group(record)){
            return 'FV25';
        }
        return 'FV2';
    }else{
        return '';
    }
}
  