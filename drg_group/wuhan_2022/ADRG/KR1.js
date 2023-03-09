import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KR1_group(record){
    let adrg_zd=["C73.x00","C73.x00x003","C74.000","C74.100","C74.900","C75.000","C75.100","C75.200","C75.300","C75.900","C79.700","C79.800x839","C79.805","C79.825","D09.300","D09.301","D09.302","D09.303","D09.304"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合KR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KR19_group(record)){
            return 'KR19';
        }

        return 'KR1';
    }else{
        return '';
    }
}
  