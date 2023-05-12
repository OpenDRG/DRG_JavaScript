import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NG1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["65.9900x006","69.9200x004","69.9200x006","69.9200x007","69.9200x008","69.9202","75.9900x004"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合NG1入组条件，匹配规则：主手术匹配');
        let drg=new MDCN_DRG();
        
        if (drg.NG19_group(record)){
            return 'NG19';
        }

        return 'NG1';
    }else{
        return '';
    }
}
  