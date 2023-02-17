import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JZ1_group(record){
    let adrg_zd=["A28.100","A44.100","A51.300x002","A51.300x003","A51.300x004","A51.300x005","A51.301","A51.302","A51.303","A51.304","A63.000","A63.001","B07.x00x006","B07.x00x008","B07.x00x009","B07.x00x010","B07.x00x011","B07.x01","B07.x03","B07.x03","B07.x04","B07.x05","B08.100","B08.200","B08.200x002","B08.300","B35.000","B35.000x001","B35.001","B35.002","B35.003","B35.100","B35.100x002","B35.200","B35.300","B35.400","B35.400","B35.500","B35.600","B35.600x002","B35.800x002","B35.800x003","B35.800x004","B35.801","B35.901","B36.000x001","B36.000x003","B36.000x003","B36.100","B36.100","B36.100","B36.100","B36.100","B36.200","B36.300","B36.300x002","B36.901","B37.200x003","B37.201","B37.202","B37.203","B37.204","B37.205","B38.300","B40.300","B40.301+L99.8*","B40.302+L99.8*","B41.800x002","B43.000","B43.200","B44.800x002","B45.200","B46.300x001+L99.8*","B47.000","B47.100x001","B47.900","B48.000","B72.x00","B72.x00x001","B74.000x002","B74.100x001","B74.100x002","B74.200x002","B74.900x003","B76.900x003","B85.000","B85.100","B85.200","B85.300","B86.x00","B86.x00x003","B86.x00x004","B86.x00x005","B86.x00x006","B86.x00x007","B87.000x001+L99.8*","B87.100","B87.900","B88.000x002","B88.000x003","B88.100","B88.300","B88.900x001","B88.900x002","B88.900x003","D22.901","D48.502","D48.504","D48.506","D48.508","D48.510","D48.512","D48.514","D48.516","I89.000x004","I89.000x013","I89.000x015","I89.000x017","I89.000x026","I89.002","I89.009","I89.900","L01.000x013","L03.003","L05.900","L08.000x005","L08.000x010","L08.003","L08.100","L08.900x028","L08.910","L11.000","L11.100","L11.800","L12.201","L21.000","L21.001","L21.002","L23.000","L23.001","L23.002","L23.100","L23.101","L23.200","L23.400","L23.501","L23.502","L23.503","L23.504","L23.600","L23.700","L23.801","L25.400","L28.202","L40.200","L40.500","L40.800","L42.x00","L43.000","L43.100","L43.200","L43.300","L43.301","L43.800","L43.901","L43.902","L44.000","L44.100","L44.200","L44.300","L44.800","L44.900","L50.000","L50.100","L50.200","L50.201","L50.202","L50.300","L50.400","L50.500","L50.600","L50.801","L50.802","L50.803","L50.900","L53.100","L53.101","L53.300","L53.800","L53.801","L53.900","L55.000","L55.100","L55.200","L55.800","L55.900","L56.000","L56.100","L56.300","L56.400","L56.401","L56.900","L57.000","L57.001","L57.100","L57.200","L57.300","L57.400","L57.500","L57.800x004","L57.800x005","L57.800x006","L57.803","L57.900","L59.900","L60.000","L60.100","L60.200","L60.201","L60.300","L60.301","L60.400","L60.500","L60.800x004","L60.800x005","L60.800x006","L60.800x007","L60.800x008","L60.800x009","L60.800x010","L60.800x011","L60.800x012","L60.800x013","L60.800x014","L60.800x015","L60.800x016","L60.800x017","L60.800x018","L60.800x019","L60.800x020","L60.800x021","L60.800x022","L60.800x023","L60.800x024","L60.800x025","L60.800x026","L60.800x027","L60.800x028","L60.800x029","L60.800x030","L60.800x031","L60.800x032","L60.800x033","L60.800x034","L60.801","L60.802","L60.803","L60.900","L63.000","L63.100","L63.200","L63.800","L63.900","L64.801","L64.900","L65.000","L65.100","L65.200","L65.800x003","L65.800x004","L65.800x005","L65.801","L65.802","L65.901","L65.902","L65.903","L65.904","L66.000","L66.100","L66.200","L66.300","L66.400","L66.800","L66.900","L67.000","L67.100","L67.101","L67.102","L67.103","L67.104","L67.105","L67.106","L67.800","L67.900","L68.000","L68.100","L68.200","L68.300","L68.800","L68.900","L70.000","L70.001","L70.002","L70.003","L70.004","L70.005","L70.100","L70.200","L70.201","L70.202","L70.203","L70.300","L70.400","L70.500","L70.801","L70.802","L70.803","L70.900","L70.900x002","L71.000","L71.100","L71.800","L71.900","L72.000","L72.000x006","L72.000x007","L72.000x010","L72.000x011","L72.100","L72.101","L72.102","L72.103","L72.104","L72.105","L72.106","L72.200","L72.800x001","L72.800x003","L72.800x004","L72.900x001","L72.900x002","L72.900x003","L72.901","L72.902","L72.903","L72.904","L72.905","L73.000","L73.100","L73.800","L73.800x005","L73.800x006","L73.800x007","L73.801","L73.802","L73.803","L73.804","L73.805","L73.900","L74.000","L74.001","L74.100","L74.200","L74.300","L74.400","L74.801","L74.900","L75.000","L75.100","L75.200","L75.201","L75.201","L75.800","L75.900","L80.x00","L81.000","L81.100","L81.200","L81.300","L81.400","L81.400x001","L81.403","L81.404","L81.405","L81.407","L81.500","L81.600","L81.601","L81.700x002","L81.702","L81.703","L81.800","L81.800x003","L81.800x005","L81.801","L81.802","L81.803","L81.900","L82.x00","L82.x00","L82.x01","L82.x02","L83.x01","L83.x02","L84.x00x001","L84.x00x002","L84.x01","L85.000","L85.100","L85.200","L85.300","L85.800","L85.801","L85.803","L85.804","L85.900","L85.900x001","L87.001","L87.200","L87.800","L87.900","L90.000","L90.100","L90.200","L90.300","L90.400","L90.401","L90.600","L90.801","L90.803","L90.804","L90.805","L90.900x001","L90.901","L90.902","L91.002","L91.800","L91.900","L92.100","L92.300","L92.301","L92.302","L94.100","L94.200","L94.300","L94.301","L94.400","L94.600","L94.800","L94.900","L95.000","L95.802","L95.900x001","L95.901","L98.500","L98.501","L98.503","L98.600","L98.700x001","L98.701","L98.701","L98.702","L98.800","L98.800x001","L98.800x007","L98.800x010","L98.800x011","L98.800x014","L98.800x015","L98.800x016","L98.800x017","L98.800x018","L98.800x020","L98.800x021","L98.800x022","L98.800x023","L98.800x026","L98.800x027","L98.801","L98.802","L98.804","L98.900x002","M35.600","Q18.301","Q18.902","Q82.000","Q82.100","Q82.200","Q82.201","Q82.300","Q82.400","Q82.500x005","Q82.501","Q82.502","Q82.503","Q82.504","Q82.505","Q82.506","Q82.507","Q82.508","Q82.800x001","Q82.800x003","Q82.800x004","Q82.800x006","Q82.800x018","Q82.800x019","Q82.803","Q82.807","Q82.808","Q82.809","Q82.810","Q84.000","Q84.200","Q84.201","Q84.202","Q84.300","Q84.400","Q84.500","Q84.501","Q84.502","Q84.600x001","Q84.600x002","Q84.600x003","Q84.600x004","Q84.601","Q84.602","Q84.801","Q85.900","Q85.900x024","Q85.900x025","Q85.900x026","Q85.900x028","Q85.900x049","R21.x00x001","R21.x00x003","R21.x00x004","R21.x02","R23.400x001","R23.400x003","R23.401","R23.800x001","R23.800x002","R23.801","R58.x00x004","R58.x02","T81.800x009","Z41.000","Z41.100x002","Z41.100x003","Z41.100x004","Z41.100x005","Z41.100x006","Z41.100x007","Z41.100x008","Z41.100x009","Z41.100x010","Z41.100x011","Z41.100x012","Z41.100x013","Z41.100x014","Z41.100x015","Z41.100x016","Z41.100x017","Z41.100x018","Z41.100x019","Z41.100x020","Z41.100x021","Z41.100x022","Z41.100x023","Z41.100x024","Z41.104","Z42.100x001","Z42.200x001","Z42.200x002","Z42.200x003","Z42.201","Z42.202","Z42.203","Z42.204","Z42.205","Z42.300x001","Z42.301","Z42.302","Z42.303","Z42.304","Z42.400x001","Z42.401","Z42.402","Z42.403","Z42.800x001","Z42.800x002","Z42.801","Z52.100"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合JZ1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCJ_DRG();
                
        if (drg.JZ19_group(record)){
            return 'JZ19';
        }
        return 'JZ1';
    }else{
        return '';
    }
}
  