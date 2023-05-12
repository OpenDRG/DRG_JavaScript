import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FK2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.5201","00.5202","00.5302","37.7000","37.7100","37.7200","37.7300","37.7401","37.7402","37.7501","37.7600x002","37.7701","37.7800","37.7900x003","37.7900x004","37.7901","37.7902","37.8000x002","37.8501","37.8601","37.8700x002","37.8701","37.8901","37.8902","37.8903","39.6400"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FK2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FK29_group(record)){
            return 'FK29';
        }

        return 'FK2';
    }else{
        return '';
    }
}
  