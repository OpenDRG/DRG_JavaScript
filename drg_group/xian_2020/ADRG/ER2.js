import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function ER2_group(record){
    let adrg_zd=["I26.900x001","I26.900x002","I26.900x003","I26.900x005","I26.900x006","I26.900x007","I26.900x008","I26.900x009","I26.900x010","I26.900x011","I26.900x012","I26.900x013","I26.900x015","I26.900x016","I26.900x017","I26.900x018","I26.901","I26.902","I28.800x010","T79.100"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合ER2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
        
        if (drg.ER29_group(record)){
            return 'ER29';
        }

        return 'ER2';
    }else{
        return '';
    }
}
  