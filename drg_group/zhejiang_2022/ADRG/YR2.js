import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCY_DRG} from '../DRG/MDCY_DRG.js';

export default function YR2_group(record){
    let adrg_zd=["R75.x00x001","Z20.600","Z21.x00x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合YR2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCY_DRG();
        
        if (drg.YR21_group(record)){
            return 'YR21';
        }

        if (drg.YR23_group(record)){
            return 'YR23';
        }

        return 'YR2';
    }else{
        return '';
    }
}
  