import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BY2_group(record){
    let adrg_zd=["S01.800x031","S01.801","S06.000","S06.100","S06.200x001","S06.200x002","S06.200x011","S06.200x021","S06.200x031","S06.200x032","S06.200x033","S06.200x081","S06.200x082","S06.201","S06.202","S06.203","S06.204","S06.205","S06.206","S06.300x001","S06.300x002","S06.300x011","S06.300x021","S06.300x031","S06.300x032","S06.300x041","S06.300x042","S06.300x081","S06.300x082","S06.301","S06.302","S06.400","S06.401","S06.410","S06.500","S06.500x002","S06.500x004","S06.500x005","S06.500x006","S06.500x007","S06.501","S06.502","S06.510","S06.600","S06.600x002","S06.610","S06.700","S06.700x001","S06.700x002","S06.700x003","S06.700x004","S06.800x002","S06.800x004","S06.800x005","S06.800x007","S06.800x009","S06.800x010","S06.800x011","S06.800x012","S06.800x013","S06.801","S06.802","S06.803","S06.804","S06.805","S06.900","S06.901","S06.912"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合BY2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BY21_group(record)){
            return 'BY21';
        }

        if (drg.BY23_group(record)){
            return 'BY23';
        }

        if (drg.BY25_group(record)){
            return 'BY25';
        }

        return 'BY2';
    }else{
        return '';
    }
}
  