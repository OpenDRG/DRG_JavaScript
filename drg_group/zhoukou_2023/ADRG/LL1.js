import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';


export default function LL1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["39.9500x004","39.9500x005","39.9500x006","39.9500x007","39.9501","39.9600x002","39.9600x003","54.9800","54.9800x005","54.9800x006","54.9800x007","54.9800x008","39.9500"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LL1入组条件，匹配规则：主手术匹配');
        
        let drg=new MDCL_DRG();
        
        if (drg.LL11_group(record)){
            return 'LL11';
        }

        if (drg.LL13_group(record)){
            return 'LL13';
        }

        if (drg.LL15_group(record)){
            return 'LL15';
        }

        return '';
    }else{
        return '';
    }
}
  