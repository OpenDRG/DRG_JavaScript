import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function ER3_group(record){
    let adrg_zd=["J68.101","J80.x00","J80.x01","J81.x00","J81.x00x002","J95.100","J95.200","J95.300","J95.800x004","J95.811","J96.000","J96.100","J96.900x001","J96.900x002","J96.900x003"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合ER3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
        
        if (drg.ER39_group(record)){
            return 'ER39';
        }

        return 'ER3';
    }else{
        return '';
    }
}
  