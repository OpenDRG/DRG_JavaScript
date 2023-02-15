import {putMessage,intersect,SS_VALID} from '../Base.js'
import JA1_group from '../ADRG/JA1.js';
import JA2_group from '../ADRG/JA2.js';
import JB1_group from '../ADRG/JB1.js';
import JB2_group from '../ADRG/JB2.js';
import JB3_group from '../ADRG/JB3.js';
import JC1_group from '../ADRG/JC1.js';
import JD1_group from '../ADRG/JD1.js';
import JD2_group from '../ADRG/JD2.js';
import JJ1_group from '../ADRG/JJ1.js';
import JR1_group from '../ADRG/JR1.js';
import JR2_group from '../ADRG/JR2.js';
import JS1_group from '../ADRG/JS1.js';
import JS2_group from '../ADRG/JS2.js';
import JT1_group from '../ADRG/JT1.js';
import JU1_group from '../ADRG/JU1.js';
import JV1_group from '../ADRG/JV1.js';
import JV2_group from '../ADRG/JV2.js';
import JZ1_group from '../ADRG/JZ1.js';

export default function MDCJ_group(record){
    let mdc_zd=["M34.200","L02.200x009","D86.300x002","D48.601","S80.800x013","T14.002","S20.201","L10.000","S31.002","Q80.200","S70.700x001","L08.001","I89.800x020","L29.802","L05.000","D22.505","Q82.400","L30.500x003","T09.000","C50.000","L02.206","L30.500","T14.101","Q84.600x002","B36.100","L63.200","L23.700","L92.302","M54.003","L90.500x072","L81.400","L73.805","L08.900x028","L13.800","D48.510","D22.900","Z42.403","S70.800x022","L72.103","T09.000x031","L90.500x047","E14.600x022","L70.203","L90.500x067","L10.200","D17.500x010","S90.800x012","B37.203","L74.900","D03.800","L66.100","L53.100","L50.500","S20.200x003","D17.300x004","L90.300","D23.600x002","L98.803","C44.507","Q82.800x019","I89.000x015","L98.101","L65.901","D22.510","I89.800x029","D24.x01","I89.000x017","R21.x00x004","Q82.100","T00.300x001","D48.500x008","S60.800x042","L67.100","S60.800x023","B07.x05","L91.900","L53.800","Z41.100x005","L74.000","L81.600","N64.802","E14.600x027+L99.8*","L90.500x016","N64.502","L65.802","C44.603","S80.800x022","S20.400x001","N61.x00x013","Q85.900x049","L02.202","L81.401","L90.500x051","C44.604","N60.801","R22.902","B07.x00x006","E10.600x023","Q82.201","L60.800x015","L89.203","Z42.800x002","Z42.304","L90.500x033","C43.504","L90.500x008","L89.103","L73.900","L92.200","L89.105","B00.100","S60.800x032","L90.500x065","E10.600x027+L99.8*","L67.000","A18.402","L65.904","L94.301","S90.700","L08.000x001","L84.x00x002","A36.300","M79.400","T85.401","B07.x04","L43.000","C43.706","Z42.300x001","L60.801","B08.800x007","L93.202","B38.300","E14.600x026","L70.201","L58.100","Z42.202","D17.100x002","B43.200","L95.000","S20.803","L70.000","L72.100","L60.800x006","D17.500x011","Z41.100x008","T09.000x011","L21.900","L25.100","L27.201","L03.000x015","L92.100","S60.800x043","L24.900","L93.200","D04.601","L94.100","L03.801","L03.002","B40.301+L99.8*","L63.100","C50.902","D17.300x002","S30.000x003","L30.301","D17.100x003","L30.201","C43.602","L90.500x027","C79.200x007","B07.x00x008","L56.900","L02.205","L98.800","L88.x00","B36.000x003","R22.700x001","T00.900x006","L30.803","L56.401","L40.101","L11.900","S70.900x001","B00.100x005","L90.500x024","E11.603+L99.8*","C43.502","S20.800x002","L68.000","D03.503","L90.500x052","M79.807","D23.602","C44.701","Q85.900x024","L65.800x003","L90.500x043","L72.800x001","E10.600x024","M54.002","S60.800x031","S30.900x003","L44.800","T13.000x031","L50.400","L90.900x001","D48.505","D22.506","Q80.900","C44.509","B07.x00x011","N62.x01","L24.206","L40.102","L28.000x007","D48.600x001","L73.800x005","L90.500x060","L53.300","L81.800x005","L90.805","R23.801","Z42.204","L50.801","L67.900","L92.800","C43.506","S30.003","D03.504","D17.300x005","L57.802","M79.401","L90.500x014","L44.400","D23.501","Q82.809","S50.800x081","Z41.100x006","E14.600x028","A18.400x013","T85.400","L03.101","L98.700x001","L72.900x002","D48.517","T11.000x031","S80.800x042","L90.500x053","L84.x00x001","S70.800x031","N60.400","D36.716","L89.006","L27.003","S50.101","L01.008","C44.508","R22.200x004","L60.800x026","B35.400","Q83.100x002","L95.801","L60.800x008","Q18.902","D23.502","L74.001","L90.500x048","S70.800x032","R22.200x001","L60.800x033","T00.900x003","L60.800x013","S90.800x023","I89.800x024","D17.000x004","R22.000x005","D22.602","S30.002","L98.500","B00.101","L81.702","I89.000x026","L40.000","L98.900x002","B88.000x006+L99.8*","D24.x02","C44.602","S80.800x023","S60.000x001","L91.800","R58.x02","L87.001","C79.200x005","T79.700","Z42.200x001","L90.100","Z41.100x023","L23.801","L60.800x022","C79.204","L89.200","L02.300","L24.201","S60.800x012","M34.803","S30.800x002","L98.800x015","L60.900","L08.800x011","L68.900","L03.300","A18.811","L81.802","L98.503","Q82.505","S80.800x011","D17.301","L60.800x031","L03.802","B37.900x001","Q80.200x002","D23.500x010","D22.700","Q82.800x001","R22.700x002","L72.900x001","L74.200","D22.504","L90.500x029","T00.000x001","L50.803","R22.903","L57.500","N60.900","L90.500x044","S30.900x001","L98.300","L10.100","C79.205","L30.400","L68.800","L58.000","L90.500x018","S40.000x003","L20.801","L64.801","D04.504","B07.x00x010","C43.900","D03.500x002","L25.300","E11.600x021","A18.411","Z41.100x016","C79.800x831","C50.001","E83.201","L89.207","L41.000x002","L70.801","L28.001","L24.700","L30.100","L90.500x020","L98.800x021","C44.506","L89.301","L02.100","L74.400","L73.800x007","L23.400","L08.000x005","L60.800x010","N64.504","L60.800x024","L89.306","C43.702","R23.800x001","L60.800x018","D04.501","L60.000","Q84.101","C43.701","L02.900x001","L94.600","L40.800","R22.005","Z42.302","L90.500x015","L81.601","L24.000","S80.100x002","Q82.800x010","L89.001","L83.x00","L90.502","D22.511","D23.700x001","C44.500","L30.202","Q82.806","Z41.100x024","Q82.200","D04.700x001","L93.200x003","C50.000x001","E50.801+L86*","L01.000x011","L90.500x038","L66.900","L60.800x012","N60.000x001","N63.x01","M79.811","D23.400x003","L90.500x023","C50.804","L59.000","D48.514","D48.516","D22.900x017","B37.204","D03.600x002","B37.201","R22.302","R22.203","Q84.600x004","L89.206","L89.101","L01.001","R22.904","L67.800","L72.900x003","Z42.303","L90.500x011","L08.000x008","L44.900","Z42.200x003","L27.900","Q84.601","L11.100","L23.200","D23.506","L57.800x004","C43.601","B35.002","C43.604","M79.403","L85.803","L24.503","B86.x00x006","L12.100","L03.200","D03.502","N64.804","L02.900x006","L08.000x010","L89.000","L85.804","D04.500","L27.200","S20.202","L25.900","Q80.400","Q85.915","S70.800x041","L21.001","S90.200","R22.000x004","L63.800","L60.500","L90.000","Q84.200","L02.800","R22.400x003","D18.006","Q83.000","L93.201","D03.602","L08.002","L89.304","D18.000x816","D86.300","L43.200","D48.500x002","Q82.502","L94.300","A18.400x010","D22.503","D17.300x001","N60.300","L81.703","R60.900x003","A18.409","S60.201","E14.600x024","R22.402","S70.901","D04.600x001","S90.800x011","Q80.000","S60.800x011","L80.x00","C50.800x005","S90.901","D22.501","L89.308","A18.404","L59.900","D23.505","D48.500x004","L30.204","L60.800x030","L02.801","S50.800x011","T14.001","L60.803","L24.501","L03.104","L20.806","L40.003","L01.100","S40.800x011","L08.910","L24.800x002","L90.500x013","N60.000","L23.900","C50.300","L98.802","R23.401","C43.900x003","Z41.100x011","S50.901","L30.801","M79.805","I89.009","D23.601","L40.400","Z41.100x004","N60.202","L81.801","L27.000x004","L89.004","S20.300x001","Q82.801","S31.001","L21.002","C43.600x002","L66.800","S20.200","S30.100x004","L02.903","S30.101","L24.800x001","S80.800x032","B35.001","L57.801","L90.503","L24.901","B86.x00x007","D48.503","L02.200x004","L73.802","R22.400x002","L82.x02","L50.201","A18.406","Q82.808","L29.000","N62.x00x004","D05.700","D24.x00","A18.412","L23.300","L90.500x073","D48.500x010","S20.101","L53.801","L90.600","L85.900","L70.300","L60.100","L67.106","T00.901","L57.803","S80.800x043","D03.700x002","L91.001","L23.501","Q84.602","L90.500x009","L98.200","S70.100","Q82.802","B36.300","L70.003","L81.300","L41.500","I89.800x014","D18.000x849","L40.301","B35.000x001","S70.900x002","S39.911","L72.000x006","Q80.100","L01.000x013","L60.800x020","L08.904","L60.800x023","E11.600x027+L99.8*","N64.002","L25.400","L85.800","Q81.800","C50.901","L60.300","L28.202","L70.004","Q83.800x005","I89.800x022","L60.200","L24.400","L89.108","S50.000","L70.100","N64.200","L90.500x058","L73.804","N64.503","S39.910","S90.800x033","L12.103+H13.3*","L72.800x003","L90.505","B86.x00x005","T00.900x002","S80.700","E51.100x006","L10.900","T00.100x001","C44.501","L72.102","L23.100","I89.800x028","D03.601","L89.900","L08.100","N60.101","Q84.000","D23.500x003","L41.400","M79.404","L05.900","Q83.803","D05.100","A18.400x014","B37.200x003","D48.508","L02.900x002","R22.300x001","Q82.503","L70.500","L63.000","L90.500x057","L08.909","S50.800x021","Q83.801","L60.800x028","L90.500x030","D22.601","L90.801","L27.005","L10.400","L66.300","B35.200","S90.800x022","L90.500x059","S60.700","S30.001","L30.902","L55.000","L02.200x010","D48.512","L92.301","E11.600x026","L23.001","Q84.900","N61.x03","C50.200","B43.000","L65.800x004","Q18.301","A18.410","C79.200","E10.600x028","D48.509","L28.200","L98.000","D48.500x006","L03.109","Q82.800x006","L98.800x017","N61.x06","L81.701","Q84.502","B36.901","L72.000x007","M79.806","D48.502","L03.900","L27.101","L73.000","D48.500x009","L08.900","D23.700x002","L43.301","T00.900x004","Q80.300","R23.400x003","C44.600","L60.800x011","L03.004","L43.902","D48.511","L56.100","I89.800x026","S20.700","Z42.800x001","Z41.100x022","L01.000x012","C43.707","L30.802","I89.002","L08.802","Q82.900","L50.600","L60.800x005","L02.901","Q82.810","C44.601","L90.400","E11.600x025","L50.802","S30.800x003","L28.100","L24.202","C44.503","S50.700","S40.800x041","S90.300x003","D48.515","L81.200","L23.502","B78.100x001+L99.8*","N60.201","L72.901","M79.803","Q82.800x004","T13.000x051","D17.200x005","L98.800x026","S90.900x002","B35.000","Z42.200x002","I89.800x013","Q84.202","B36.000x001","L82.x01","L75.100","D18.000x847","S60.100x001","L13.900","B88.000x004+L99.8*","R21.x01","S40.000x002","L90.500x071","S80.800x021","L12.202","L98.800x020","Z42.205","N64.501","L03.304","L90.500x055","L12.300","A18.400x022","C43.901","Q85.801","Z42.301","D04.800","L53.901","N62.x02","L20.900","L02.902","Q82.800x018","L43.901","L29.801","L60.800x014","B00.100x001","T00.902","L25.201","S20.301","L72.106","D18.007","N61.x04","L60.800x032","L84.x01","L89.005","Z41.000","I89.800x030","Q85.900x022","L30.800","Q82.500x005","S90.800x013","L57.100","L01.003","Z41.105","D04.503","Z42.401","L85.300","Q84.400","L90.501","L30.900","L89.008","L90.500x063","Z41.100x017","L60.301","Q83.300","S60.800x033","S90.000","L57.800x005","A18.400x006","R92.x00","L57.400","L89.102","S50.800x041","Q82.803","D23.503","C50.802","L24.500","Z41.100x003","I89.100x002","B09.x00x002","R22.002","N64.805","L70.200","L81.700x002","L89.300","L90.500x049","B00.801+L99.8*","S20.801","E11.600x970","L98.800x012","E14.600x023","L08.800x008","C43.605","L42.x00","L28.002","D22.500x008","M35.600","S80.901","L53.101","L02.200","D22.901","C44.705","L90.500x056","M79.802","B37.205","L59.801","L97.x00","A46.x00","N61.x05","D03.900x002","L08.906","L71.800","C44.703","L98.800x022","L98.501","T14.000","L74.801","C50.500","N61.x07","L53.000","L90.500x066","L94.200","N62.x00x007","L85.200","T13.000x041","L70.400","I89.000x013","C43.705","L28.201","D17.200x004","L85.900x001","C43.704","S60.801","S40.701","L01.005","L72.905","B35.800x002","B88.001+L99.8*","D03.600","L08.908","L85.100","Q80.800","Q85.900x028","L71.100","L25.500","T09.000x021","L23.101","L08.800x005","B35.003","D04.900x001","E05.906","B72.x00","L22.x00","L55.200","L28.203","L89.204","M34.100","C44.505","D17.100x001","T00.800x001","L98.800x007","L89.208","L89.106","D48.500x007","Z52.100","L03.000","L01.004","L08.800x006","Q81.100","L03.102","L90.804","L70.900","L02.203","L05.000x001","L52.x00","L40.001","L08.903","L90.500x040","Z41.100x013","L90.500x037","D03.700x001","Q80.800x001","L03.107","L98.400","I89.900","S60.701","L23.504","Z41.100x018","L94.400","L25.800","L90.500x046","L90.500x012","L02.802","L90.500x045","S30.100x002","D48.500x011","C44.900","D17.900x001","L89.202","L29.300","L60.800x019","E10.600x025","L90.500x054","D18.000x828","C44.605","L12.200","L40.200","B09.x01","C79.200x006","L27.000x006","L75.800","L02.201","L68.300","L24.205","S80.800x031","S40.800x031","L03.303","D22.900x002","L95.802","L90.901","L98.800x016","Q84.600x003","T09.000x051","L60.201","S90.301","N60.000x002","C50.100","D17.200x003","Z42.201","S20.802","L73.803","L87.200","L03.105","D18.008","Q82.800x011","S40.000x001","I89.800x027","L73.800x006","L10.801","L73.200","C46.000","L98.401","Z41.100x020","L50.100","L90.500x025","B35.100x002","N64.200x001","L90.803","L73.100","L25.000","D48.506","Q84.300","L23.500","S70.800x021","L75.000","Z42.801","T14.000x041","B00.000","L25.200","D05.000","L24.204","D18.000x852","D48.500x003","L81.800x003","Q85.900x009","L03.301","L51.000","T00.900","B00.102","L90.500x074","L08.901","S90.800x021","D48.500x012","I89.800x012","B46.300x001+L99.8*","S30.900x002","L98.702","L03.302","L89.305","L90.500x034","L90.500x007","S90.800x032","L50.000","L29.100","N62.x00x001","L98.800x014","L70.900x002","A60.100x002","L90.500x026","D22.502","T01.301","L90.500x036","E51.100x005+I98.8*","L12.201","L90.500x010","L90.500x062","S30.801","Q82.508","B86.x00","B35.500","S50.701","L72.000x011","D03.900","N64.900","L95.901","R22.000x003","L03.306","Q85.900","N63.x00","R21.x00x003","L51.100","L90.500x028","C43.606","L89.107","R22.204","L13.901","C43.508","L85.000","B35.300","L13.000","N61.x00x004","L41.000","L71.000","T14.000x003","L23.503","D22.509","L70.005","S30.100","D23.504","S80.800x012","S40.700","A18.403","L98.600","D23.600x001","L89.003","L81.407","Q82.504","L74.300","D23.500","R60.900x004","L74.100","L60.800x017","L75.201","R22.206","L30.300","L65.801","D23.500x006","E14.600x025","B07.x03","Q83.200","L50.300","L93.100","L53.200","C44.706","L22.x01","L50.202","L87.900","S20.000","B87.000x001+L99.8*","C44.606","S90.800x031","A18.408","Z41.100x002","B35.800x004","L21.800","L60.400","Q82.507","B35.800x003","L30.903","N64.801","Q83.800x004","L00.x00","L02.402","L28.000x006","L81.402","C44.702","L08.902","N64.400","N64.100","C96.200x006","L81.403","A18.400x020","L94.800","T00.200x001","C43.800","L81.800","L08.000x006","L08.003","Q83.900","L20.804","L72.903","L12.000","L27.002","L89.104","L92.801","E11.600x024","L23.002","S30.800x001","L65.000","L24.203","L89.100","B00.804+L99.8*","E10.600x026","D22.508","S70.700x002","L90.500x039","L08.000x007","Q82.805","S90.100","Q83.100x001","L89.201","Z42.100x001","B44.800x002","S60.800x022","R22.200x002","L12.800","L81.803","Z42.402","L65.100","L94.000","Q84.801","B40.302+L99.8*","L03.108","S60.902","S80.900","L30.400x004","S70.000","L65.200","L89.205","S30.700","L70.002","C44.700","L08.804","L50.900","S90.800x042","L29.900","C79.806","L95.100","L98.804","M34.000","R23.800x002","M54.001","L90.500x032","M31.000x005","T14.000x031","L12.900","L44.200","S80.000","R22.300x002","L90.500x050","L20.803","L26.x00","Q82.501","L24.300","D18.000x848","L08.801","L67.101","E16.300x003+L54.8*","L20.000","L90.504","L23.901","L56.200","L30.904","T00.900x007","B35.100","D03.501","Q82.807","L89.307","S21.000","Z42.203","D17.900x002","D17.200x001","D36.700x009","L70.803","L29.800","Q84.500","L98.701","L51.200","Z41.100x010","E10.600x970","D04.701","L57.001","Q81.200","B35.901","L60.802","M79.809","S40.800x032","Q81.900","L55.900","C50.900","L98.800x023","S90.800x043","B86.x00x004","L87.800","L56.300","Q83.802","L94.900","D48.501","S40.900","L72.904","S70.800x042","L24.800","L60.800x007","S60.202","L60.800x027","L90.500x035","S30.000x004","Q84.201","E11.600x028","L81.404","L58.900","Z42.400x001","N64.300x001","R22.004","S70.800x012","S70.900x003","L81.100","L40.103","L73.800","N62.x00","L85.801","Z41.100x019","L83.x01","L20.802","B72.x00x001","C50.900x005","L90.500x017","L92.903","C50.600","L72.101","M31.000","L98.800x001","C43.507","R21.x02","L43.100","C43.600","T11.000x021","B45.200","L41.801","Q84.800x012","L98.001","T13.000x021","B40.300","L90.500x064","Q82.300","L60.800x021","E51.100","I89.800x025","S40.001","E10.603+L99.8*","L08.907","L90.401","L27.800","L40.100","R23.400x001","S50.800x031","L03.800","C50.800","L40.801","L57.200","L89.002","Q82.804","L21.000","L21.100","L90.800","L75.200","L12.102+H13.3*","L90.200","E11.600x023","L55.800","L72.104","T13.000x011","L41.100","L93.000","Z41.100x014","L63.900","C44.800","L10.800","L24.200","L44.100","L67.103","L70.202","L40.300","L72.200","L57.300","T00.900x005","L67.104","E10.600x021","R22.006","L90.500x019","L98.801","T11.000","R22.100x002","L43.800","L98.800x011","L56.000","C44.504","L02.804","B00.100x004+H62.1*","L92.901","D28.000x001","L98.800x010","L08.805","S90.800x041","B86.x00x003","S30.000x001","L27.801","B37.900x002","L30.000","L30.905","C44.707","Z41.104","L81.000","D23.701","S80.800x033","L41.300","T11.000x041","L66.000","T81.800x009","L24.801","L89.007","L81.500","L75.900","N60.100x003","L40.002","D05.900","C43.703","L72.000x010","A18.400x001","R22.207","L91.801","S30.800x004","L90.500x042","L58.101","S60.800x021","L13.101","L02.401","L72.000","S60.900x002","D23.401","S90.300x001","L60.800x016","Q84.100","L11.000","L40.802","L91.002","L92.000","L08.803","I89.000x004","S60.901","Q83.100","Z41.100x021","L02.803","D04.502","S40.800x042","L98.502","T14.000x011","L66.200","D03.500","D48.504","M79.801","T00.600x001","L57.800x006","L23.600","L60.800x025","L24.100","L57.900","L65.903","D18.000x850","L03.106","L90.500x061","D23.900","S40.800x021","L89.302","L03.305","L98.800x013","N61.x00x014","L90.500x031","L67.102","N64.803","A18.405","L90.500x041","L51.802","L89.303","T11.001","L65.800x005","L44.000","L08.911","S60.800x041","Z41.100x007","M79.804","L98.800x027","D22.900x003","L95.900","Z41.100x012","L94.500","L98.800x018","D48.513","Z41.100x015","L90.902","Q85.900x025","D22.507","L03.103","Q82.506","S60.900","C44.901","D18.000x851","L28.000","L70.802","L50.200","L10.500","L51.900","L57.000","E85.413+L99.0*","S50.900","L64.900","L27.004","L72.800x004","N60.100x002","C50.801","L27.100","L05.901","N60.200","L03.001","S40.800x022","L66.400","L95.900x001","L08.905","S70.800x011","L68.100","S80.800x041","T09.000x041","L72.902","D22.500","Q85.900x026","L71.900","A18.407","T13.000","Q82.000","L95.800x004","L11.800","L70.001","L64.000","L03.003","L73.801","L82.x00","C50.400","L08.000x009","L10.300","B37.900x003","L01.002","R22.100x001","D18.000x018","L67.105","L92.300","T11.000x051","D18.000x010","L40.900","N60.100","D18.005","B36.200","Q84.501","N61.x01","T01.800x001","B35.600","L30.804","N64.001","L02.403","T11.101","C44.502","D22.600","E14.600x021","L13.100","B41.800x002","R21.x00x001","C43.501","L81.400x001","D22.702","I89.800x015","C43.500","L24.504","S30.100x007","L12.101","L60.800x029","S90.900x003","R22.003","L68.200","L83.x02","L24.600","L90.500x022","I97.200","L81.900","D17.200x002","E14.600x970","C79.200x001","S30.100x001","L56.800","R22.205","A18.400x021","L81.405","B36.200x001","Q81.000","S80.101","Z41.100x009","L10.800x002","L56.400","C43.603","D03.701","S90.300x002","D48.500x005","L24.502","B36.300x002","L24.601","L21.901","L60.800x034","L90.500x021","T14.000x021","A18.401","Q82.800x003","L72.105","L95.800","T14.003","C44.704","S40.800x012","B35.801","L28.003","C43.505","S30.104","L55.100","L30.203","L10.800x001","L93.001","L40.500","C50.803","L60.800x004","C43.700x001","D17.101","L30.901","N61.x02","B37.202","D22.900x021","L41.900","R22.202","L90.500x006","L44.300","Q84.600x001","B07.x01","D48.507","L60.800x009","D48.500x014","L53.900","R22.901","L65.902","L23.000","E50.800x002+L86*","D22.701","L26.x01","C43.503","B35.600x002","D18.000x812"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCJ入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=JA1_group(record)){
        return result;
    }

    if (result=JA2_group(record)){
        return result;
    }

    if (result=JB1_group(record)){
        return result;
    }

    if (result=JB2_group(record)){
        return result;
    }

    if (result=JB3_group(record)){
        return result;
    }

    if (result=JC1_group(record)){
        return result;
    }

    if (result=JD1_group(record)){
        return result;
    }

    if (result=JD2_group(record)){
        return result;
    }

    if (result=JJ1_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合JQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'JQY';
    }

    if (result=JR1_group(record)){
        return result;
    }

    if (result=JR2_group(record)){
        return result;
    }

    if (result=JS1_group(record)){
        return result;
    }

    if (result=JS2_group(record)){
        return result;
    }

    if (result=JT1_group(record)){
        return result;
    }

    if (result=JU1_group(record)){
        return result;
    }

    if (result=JV1_group(record)){
        return result;
    }

    if (result=JV2_group(record)){
        return result;
    }

    if (result=JZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}