import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GU2_group(record){
    let adrg_zd=["K22.100","K22.101","K22.102","K22.103","K25.300x001","K25.700","K25.900x001","K25.901","K25.902","K25.903","K26.701","K26.900x001","K26.900x002","K27.300","K27.700x001","K27.900x001","K27.900x002","K27.900x005","K27.901","K27.902","K28.300x001","K28.700","K28.900x001","K28.901","K31.800x808","K63.303","K63.304","K63.305","K63.306","K63.307"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合GU2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GU29_group(record)){
            return 'GU29';
        }

        return 'GU2';
    }else{
        return '';
    }
}
  