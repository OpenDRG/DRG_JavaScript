import {putMessage,intersect,SS_VALID} from '../Base.js'
import MA1_group from '../ADRG/MA1.js';
import MB1_group from '../ADRG/MB1.js';
import MC1_group from '../ADRG/MC1.js';
import MD1_group from '../ADRG/MD1.js';
import MJ1_group from '../ADRG/MJ1.js';
import MR1_group from '../ADRG/MR1.js';
import MS1_group from '../ADRG/MS1.js';
import MZ1_group from '../ADRG/MZ1.js';

export default function MDCM_group(record){
    let mdc_zd=["E29.002","E29.101","S39.900x010","R86.901","S30.205","Q54.200","N50.824","R86.800","E29.000","N49.101","A54.203+N51.1*","Q54.901","N50.802","N50.800x042","D07.400","Q55.004","D29.400","C63.702","D18.000x815","C60.100","Q55.901","N42.300","N50.800x001","D18.108","N50.800x038","D40.701","D29.700x005","N48.812","N42.802","Q55.001","T83.600","N50.815","N43.000","N48.201","C79.815","Q55.802","Q53.202","Q55.606","R86.902","N50.823","A06.800x004+N51.2*","Q55.600x008","N50.903","N48.001","N43.301","N48.808","R86.700","N49.900","Q54.800","N43.101","A18.118+N51.1*","R86.903","I87.120","D40.901","N41.101","A56.102+N51.1*","Q55.400x006","T19.800x002","N44.x01","D29.000","E29.100x002","N50.800x016","C62.100","D17.600x001","N46.x01","I89.800x010","N50.822","D40.900x001","C60.000","S30.203","E29.800","N50.800x025","N48.800x009","Q55.601","N48.101","Q56.300","N49.800","Q55.201","N43.400","N47.x03","Q55.404","E29.103","E29.900","D40.100x002","N48.803","I89.000x023","C63.000","N48.402","C63.801","S38.200x004","N49.103","Q55.800","S30.202","N46.x00x007","D29.703","Q55.603","N48.401","Q55.801","A18.100x018+N51.8*","N50.819","Q53.201","Q55.401","R86.400","N50.810","N48.809","D17.700x034","N48.102","N48.802","N48.100","N47.x01","D40.700x001","Q56.100","D40.702","Q56.002","N49.001","N42.102","S37.802","N45.002","C79.820","C79.816","A18.109+N51.0*","N41.100","T83.401","N50.817","Q53.200","N41.900x001","Q54.000","N40.x00","N50.000","Q53.900","Z31.000x004","Q85.900x032","Q54.001","N50.800x012","I89.008","N50.803","N50.103","S39.900x007","N48.810","N48.400x006","E29.100x004","C60.201","N49.205","N48.813","Q55.502","Q55.403","C79.817","D48.127","C79.800x231","N41.000","S38.000","C63.800","S31.300x002","N48.806","A18.100x020+N51.8*","Q55.101","Q55.604","N50.811","N50.816","Q54.400","N48.203","R86.300","D07.500","Q54.900","N48.300","N46.x02","N50.800","Q55.605","S30.206","N45.903","N49.102","N50.807","E29.001","A59.000x003+N51.0*","N41.800","N48.804","N50.820","N45.905","N49.204","D40.101","N50.805","C62.001","E89.501","Q53.901","N42.901","E29.104","Q55.600x009","Q55.501","D18.000x818","R86.200","D29.300","N48.301","Q53.100","N48.000x003","N42.801","S38.200x003","N41.200","N50.900x008","N47.x02","A56.103+N51.1*","N44.x00","N49.202","N36.801","N48.811","Z41.200","D40.704","N50.800x002","Q53.102","A60.003+N51.8*","Q56.001","C63.900","Q56.400","N50.900x006","N49.104","N48.400x005","N48.805","N41.900x002","N50.821","N50.902","N50.800x041","I87.804","N50.813","E29.106","N49.203","A18.116+N51.8*","N48.801","D17.700x033","S39.900x009","N43.001","C62.000","Q55.400x008","N48.000","D29.100","E29.100","N42.101","Q55.405","C63.701","C79.800x233","A18.110+N51.8*","Q53.200x001","N45.000","C63.100","N50.101","S38.001","R86.600","C79.818","C60.200","I86.200","C79.819","A54.202+N51.0*","N50.900x007","N45.907","N46.x00","D29.900","N48.901","D07.602","I89.000x022","Q54.300","D07.401","Q53.000x003","D29.200","N45.906","D07.603","D29.702","N49.201","D29.001","N50.809","N47.x00x001","N50.800x014","B37.402+N51.2*","N48.204","N48.800x005","D07.601","N50.827","N50.818","R86.500","I89.000x025","Q55.100x002","Q54.100","N43.300","C63.200","N50.102","B26.000+N51.1*","Q55.200x901","Q55.202","N50.814","N50.800x024","Q55.602","S37.910","D29.701","S37.804","Q53.902","N48.400x008","T83.601","S37.801","R86.000","S30.208","Q56.000","S37.811","Q55.203","C60.900","N43.100","I86.100","C63.201","D40.700x002","C60.800","N50.800x027","N48.400","Q55.900","S31.300x001","D40.000x001","R86.900x003","N45.001","N48.807","N50.100x001","A18.117+N51.1*","N45.904","D40.703","N41.300","S39.904","E29.102","I86.101","N50.900x005","D29.401","N49.002","Q53.000x002","S31.301","I89.000x024","N43.201","R93.802","R86.100","C79.800x228","A54.204+N51.1*","N50.806","N40.x01","N50.901","Q53.101","E29.105","N43.302","D29.700x004","N48.403","N48.500","Q53.000","A60.000x004+N51.8*","D07.402","S38.200x005","S31.501","Q55.600x007","D40.700x003","N50.812","C60.901","N50.804","Q85.900x047","N50.800x028","N50.801","Q55.800x001","A18.119+N51.8*","N48.600","N44.x02","N42.000","C62.901","D18.000x855","N48.202","N45.901","N42.200","Q55.402","D40.001","N50.808","E29.000x002","S31.200","C61.x00","N45.902","Q55.300","C63.700","N45.908","Q53.100x001","N42.301","N50.825","Q55.002","N48.400x007","N50.826","Q55.003","C62.900","N50.800x023"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]) && record.gender && record.gender=="1")){
        return '';
    }
    
    putMessage('符合MDCM入组条件，匹配规则：主诊断匹配、男性');
    let result;

    if (result=MA1_group(record)){
        return result;
    }

    if (result=MB1_group(record)){
        return result;
    }

    if (result=MC1_group(record)){
        return result;
    }

    if (result=MD1_group(record)){
        return result;
    }

    if (result=MJ1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合MQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'MQY';
    }

    if (result=MR1_group(record)){
        return result;
    }

    if (result=MS1_group(record)){
        return result;
    }

    if (result=MZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}