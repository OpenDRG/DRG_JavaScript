import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCY_DRG} from '../DRG/MDCY_DRG.js';

export default function YR2_group(record){
    let adrg_zd=["R75.x00x001","Z21.x00x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList,adrg_zd)){
        putMessage('符合YR2入组条件，匹配规则：某一诊断匹配');
        let drg=new MDCY_DRG();
        
        if (drg.YR29_group(record)){
            return 'YR29';
        }

        return 'YR2';
    }else{
        return '';
    }
}
  