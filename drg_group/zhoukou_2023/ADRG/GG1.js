import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';


export default function GG1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["54.5100","54.5100x005","54.5100x009","54.5101","54.5102","54.5103","54.5900x007","54.5901","54.5902","54.5903","54.5904","54.5905","54.5906"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GG1入组条件，匹配规则：主手术匹配');
        
        let drg=new MDCG_DRG();
        
        if (drg.GG19_group(record)){
            return 'GG19';
        }

        return '';
    }else{
        return '';
    }
}
  