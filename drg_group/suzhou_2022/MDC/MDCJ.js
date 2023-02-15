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
    let mdc_zd=["L90.500x051","S40.800x031","L89.201","C44.509","L08.000x008","S60.800x023","B86.x00x005","L75.201","C44.705","L02.205","N62.x02","C50.901","L64.000","C43.500","C50.400","S70.000","Z42.403","S80.800x042","C79.200x005","R22.302","S90.900x002","L60.900","N64.501","L50.400","L60.800x027","L50.201","D03.500x002","L98.800x016","D48.500x010","M79.401","N64.002","N64.805","L67.104","M79.807","S60.800x022","Z41.100x019","S30.800x004","N64.502","D22.506","D17.200x003","L90.500x024","L30.202","Q82.800x011","L90.900x001","D22.900x003","Q82.200","Q83.803","C43.508","L13.100","L41.900","L90.500x022","B00.801+L99.8*","S30.100x007","L11.000","L03.306","B35.600x002","L89.004","D48.514","Q81.100","L12.101","C43.703","L90.500x066","T00.902","L02.200x010","L82.x01","L53.300","L72.000","L89.205","B36.300","L23.600","A18.411","S60.000x001","N60.100","S60.800x012","L81.100","L89.305","A18.400x013","L81.401","L72.800x001","L50.200","L92.901","N64.801","Z42.202","N60.900","C43.604","L90.901","Q85.900x024","L03.101","A18.410","B07.x04","L70.803","Q84.600x003","L90.500x035","L02.401","L02.203","M34.100","L11.900","L72.905","L23.300","D48.500x002","S50.800x021","A18.400x021","Q18.301","E11.600x026","L03.000x015","L57.800x006","L01.002","Z41.100x008","L29.800","L02.902","D48.500x009","Z41.100x015","A18.811","L72.105","N64.900","M79.400","L65.100","L94.500","L12.300","L63.800","L89.208","Q82.506","L08.910","D22.511","L10.800x001","S70.100","L50.500","D18.000x847","S30.800x001","Q84.201","L81.600","Q82.502","N61.x00x004","L81.700x002","D18.000x849","C43.800","S90.700","T01.800x001","L28.203","L08.803","R22.000x004","N61.x03","B37.203","N60.100x002","B00.000","L95.000","C50.804","R22.100x001","L24.600","L30.804","L23.501","C43.704","T09.000x011","L03.302","C43.701","L03.105","L23.000","R22.207","L60.800x024","L60.800x009","L92.800","D04.502","Z41.100x012","L60.201","L89.304","L94.200","L90.500x054","M34.000","Z42.400x001","B00.100x005","L74.200","L74.100","S30.900x001","L98.501","M34.200","S40.000x001","L40.200","C44.703","L81.403","L12.102+H13.3*","L90.500x044","R22.002","Z42.801","Z41.100x006","T13.000x041","D18.007","L29.100","S70.700x002","A18.404","L43.800","I89.000x026","D86.300","S40.001","L60.800x017","A18.401","L40.400","L23.504","B35.200","T13.000x051","B36.901","E14.600x970","Z42.204","E14.600x022","L08.903","C43.506","L91.002","L98.800x001","T14.000x003","E50.800x002+L86*","D48.517","S90.800x043","L50.900","Z42.303","C50.900x005","L83.x02","Z41.100x004","L03.301","D22.507","L89.008","T14.000x041","L98.200","I89.002","L90.500x063","L98.800","D48.508","L98.000","L90.500x009","Q84.600x001","B35.100x002","D03.504","L40.001","A46.x00","L60.803","Q80.400","L92.000","I97.200","L72.000x010","D03.800","D23.500x003","L93.200","R22.200x004","L43.902","L95.901","Q82.809","L89.300","N61.x07","L65.800x003","Q80.200x002","C50.000x001","B88.000x004+L99.8*","L65.904","N60.400","L98.800x010","D22.900x002","S60.800x031","C50.300","L57.100","S60.800x033","L20.803","T00.600x001","L74.000","L90.500x027","S70.900x003","B37.202","L60.800x032","Z41.100x022","D04.504","L30.803","L03.003","L95.100","L60.200","D18.000x851","R22.402","D22.504","L60.800x005","Q83.800x004","L60.802","R58.x02","L98.800x013","L60.800x021","R22.003","C43.702","Q80.800x001","L23.101","S60.100x001","D48.501","L98.800x012","L66.200","Q82.808","I89.800x030","S50.900","L94.800","L52.x00","L66.900","M79.805","L93.202","D48.509","L90.500x010","L08.900","L11.800","L89.100","L24.300","L60.800x011","S60.800x041","S20.803","N63.x00","L03.004","L56.400","L01.000x011","S70.700x001","S20.400x001","L02.804","S30.001","L90.500x036","D03.503","L98.800x014","L02.403","S21.000","I89.800x025","L89.308","L30.300","B45.200","L81.900","L23.801","L25.300","E10.603+L99.8*","L72.901","L27.900","E11.600x023","L60.800x030","L68.200","L81.200","R92.x00","T01.301","R22.903","S70.800x031","D48.500x006","N64.001","B78.100x001+L99.8*","D17.900x001","L81.702","R21.x00x001","L02.900x006","T11.101","L72.902","D22.500x008","T00.900x007","L72.103","L73.200","M31.000","R23.400x001","L08.800x011","Z41.100x013","L90.804","L25.201","L40.103","C44.501","L02.900x001","L25.200","S80.000","L22.x00","D03.500","B35.400","S80.101","Q85.915","L90.500x013","S90.800x022","D17.100x002","L30.500x003","L67.102","L12.800","Q84.502","L81.000","Q83.800x005","E14.600x028","B40.300","D48.503","Q82.807","S20.000","C44.704","B00.100","L72.900x002","S30.000x001","D48.500x014","B00.804+L99.8*","D03.501","L67.800","L81.407","S70.800x041","D03.701","L85.804","L81.701","L90.500x026","L98.800x021","C43.900","L87.001","L20.000","L70.202","Q82.801","Q82.507","L72.104","L73.804","L82.x00","L08.906","S70.901","B00.101","T13.000x011","L30.903","Z42.203","B00.102","L05.000","L90.500x040","M79.809","L90.500x050","L53.100","E10.600x021","L60.000","L66.800","L75.800","D23.503","L10.400","I89.000x015","B36.200x001","D04.700x001","L93.000","E14.600x025","L58.900","S90.300x001","C79.200x001","R22.205","L08.805","Z42.200x002","D24.x00","S90.000","L93.200x003","L92.302","L40.900","L50.803","L90.500x018","L20.804","L24.204","C50.803","D17.300x005","Z41.100x007","L66.300","D48.513","L85.300","D03.502","D18.000x812","S20.301","T11.000x051","L08.905","B35.001","L90.500x065","L94.301","S40.701","M79.803","R22.400x002","C43.501","B35.800x003","L98.800x026","L24.200","L60.100","L40.003","A18.400x020","L08.804","Q84.900","R60.900x003","L90.500x072","E10.600x028","C44.901","L57.500","D48.511","S30.101","E11.600x028","Q83.200","L27.003","S60.800x042","E10.600x027+L99.8*","L95.800","M31.000x005","N61.x05","L27.201","L89.006","R22.006","L90.500x048","L60.800x008","L89.005","L71.900","C44.605","L85.801","L67.105","Q83.802","L44.100","L89.204","I89.000x017","S40.800x012","D22.700","L24.800x001","S50.901","S20.700","Q84.300","Z42.205","C79.204","L98.801","S20.200","S40.800x011","B07.x03","D28.000x001","L66.100","C79.200x007","L23.700","L03.109","L50.801","D48.515","L90.500x006","S80.800x023","L28.201","C43.504","R22.200x002","L98.702","A18.400x010","L56.401","Q80.100","L70.100","D23.900","R22.904","Z42.200x001","L90.500x014","D22.702","L30.901","L28.200","Q82.805","Q83.801","S30.801","L89.103","L60.800x029","C50.001","L98.800x023","C50.800x005","B35.002","D36.700x009","D18.000x850","T00.100x001","L89.900","L56.100","S30.002","L74.801","L03.304","T14.000","L57.400","D17.300x002","S70.800x042","C44.505","Q82.900","C44.507","L70.001","L30.801","L72.101","L90.401","D22.502","L63.100","I89.800x028","L24.000","S90.800x041","L90.805","L66.400","L83.x00","L65.802","L90.502","S70.800x021","L98.800x018","L74.001","Z52.100","L71.000","L08.902","A18.409","A18.406","Q85.900x028","D05.700","L59.801","Z42.201","L60.800x013","L67.101","L43.301","L60.800x012","L24.800x002","S80.800x011","T14.000x031","D17.500x011","L90.500x052","N62.x01","B07.x01","L60.800x010","C50.000","L23.500","L53.801","S90.800x032","E16.300x003+L54.8*","C79.200x006","R22.300x002","D48.601","S50.701","S20.101","C50.902","D18.008","L81.800","S60.800x021","D17.301","L81.703","D48.500x004","N60.200","B37.900x001","L41.400","L90.500x045","C44.602","L75.100","S60.800x011","L89.106","R23.401","L12.201","D48.505","S50.800x031","L70.801","D18.006","L51.100","L30.203","L84.x00x001","S50.000","L60.800x006","L08.901","L13.900","L40.500","Q80.900","N64.100","L90.504","T13.000x021","L28.003","L89.302","D22.509","L95.800x004","L90.500x029","L84.x01","S40.000x002","B36.100","Q85.900x022","L89.101","T13.000","L75.000","E11.603+L99.8*","Q83.000","L70.200","L70.802","D03.700x001","A18.408","S20.202","R22.700x001","Q85.900","L90.500x067","B86.x00x007","T14.000x021","L08.000x005","L85.100","L10.800","L68.100","L23.502","L89.303","L89.200","C43.600x002","L44.200","D05.100","L89.301","R22.200x001","Z42.302","L01.008","L41.801","L28.100","L50.202","L68.300","S20.800x002","L25.500","L89.001","L90.803","L70.000","D17.900x002","N60.000","D03.600","L90.500x028","B43.200","S50.800x081","S60.900","L27.000x004","L67.100","L98.600","N60.101","L08.001","S90.800x011","R21.x00x003","L03.103","L24.202","S70.800x032","Q81.900","E11.600x024","L59.900","L70.300","L21.001","Q82.501","Z41.100x005","Q85.900x025","S90.900x003","L73.805","L90.500x062","L68.800","L24.801","L90.500x016","Q82.508","N64.803","L02.803","R22.004","L12.000","L44.300","S80.800x031","T00.900x004","L90.500x020","L98.800x022","D48.500x011","B72.x00","L57.803","L74.300","S90.800x033","N60.100x003","S30.000x004","B08.800x007","L90.505","D48.500x007","L91.900","L40.800","E51.100","S30.104","L64.801","L81.400x001","L81.802","L53.800","N64.802","L90.500x017","L08.908","Z42.800x002","D23.502","L08.904","L08.000x007","D04.503","A18.400x001","L03.106","Q82.800x001","L02.300","Q82.800x010","D03.900x002","A36.300","D17.300x004","D22.602","C50.900","B35.600","D24.x02","L63.900","L23.503","D48.502","D18.000x018","C44.603","Q82.504","Z41.100x011","B37.204","B46.300x001+L99.8*","L85.200","D22.900x017","L30.902","T00.901","L90.800","C44.702","L67.900","B37.205","E51.100x006","L81.601","L50.802","L89.203","L90.500x041","D04.900x001","L20.900","L02.201","S20.201","S60.801","A18.412","S90.800x021","L08.911","L94.100","S90.200","L03.000","L02.800","S20.200x003","L23.200","L90.500x060","S20.802","L27.801","L50.100","L08.000x010","L70.400","N60.202","T79.700","L72.100","L98.401","L30.301","B86.x00x004","L57.001","L89.108","D04.800","S90.300x002","I89.800x022","L08.907","Q81.200","Q83.100x001","L56.200","B88.000x006+L99.8*","D04.501","Q82.201","L03.002","N61.x04","L24.201","I89.900","L03.108","S30.100x002","S90.800x013","S30.100x004","L72.800x003","T11.000x021","L30.900","D23.700x001","L02.100","D18.000x828","Z41.100x010","T14.002","L72.800x004","C43.900x003","Q83.300","E14.600x024","L68.900","L27.800","L63.000","L60.300","L30.905","L85.800","L98.800x011","L92.801","D48.512","S30.800x002","L65.000","L25.100","L92.100","L42.x00","L57.801","L85.000","L90.500x055","L60.800x004","L98.800x027","L12.100","L21.002","M54.001","L60.400","S30.100x001","L81.800x005","S50.800x041","L53.000","I89.009","D23.601","I89.800x020","D48.510","L60.800x016","E11.600x027+L99.8*","B00.100x004+H62.1*","Q84.101","L02.200","L95.900x001","S90.301","L03.200","L40.000","L63.200","C50.801","C43.605","L90.500x021","L81.801","L24.900","N64.504","L72.000x007","L56.300","S40.800x021","L44.400","S60.902","D03.602","L90.503","L90.501","D04.601","T00.300x001","Q82.800x003","Q84.200","L70.004","L02.402","L90.500x058","Q82.505","L21.900","T85.401","L12.200","L03.104","D17.100x001","L80.x00","L91.001","S40.800x041","L01.004","E14.600x021","L01.003","M79.804","D86.300x002","S40.000x003","Q82.804","L60.500","N62.x00","B07.x05","L30.800","L90.500x032","Q84.501","R22.700x002","Q82.000","T00.200x001","L03.001","D22.900","D22.900x021","E10.600x024","M35.600","L27.101","L55.000","I89.800x015","L60.800x025","L74.400","S30.900x003","L89.306","L87.800","L28.000","L94.900","R22.000x003","A18.402","C44.604","L73.803","B72.x00x001","T00.000x001","B35.800x002","C79.205","E14.600x023","N60.300","L90.500x008","L10.500","L27.005","L98.400","S50.101","L21.800","B37.900x003","B44.800x002","R22.901","L51.200","Q80.200","L90.500x059","Q82.803","L93.201","S30.900x002","D05.000","L73.800","C44.601","L08.002","C43.602","D18.000x848","N64.200","C44.700","L50.600","S30.000x003","L28.001","L90.500x011","D18.000x816","L73.000","N61.x01","D05.900","L81.400","L50.000","L02.206","D17.200x001","B35.901","L89.104","N64.400","L90.902","N60.000x002","L89.307","Z42.100x001","Q84.600x004","L24.205","L94.000","L98.502","Q84.801","L57.800x004","B00.100x001","N62.x00x007","D22.503","B07.x00x010","B36.000x003","E50.801+L86*","L60.800x014","C43.502","T09.000x051","R22.203","E11.600x021","B87.000x001+L99.8*","D24.x01","Z41.100x017","S80.700","Q81.800","Q84.500","C44.707","L90.500x061","L24.601","L21.901","L90.500x015","L75.200","C50.802","L25.400","R21.x02","N62.x00x004","L94.600","L89.206","L60.800x019","I89.800x012","L98.701","L03.800","B37.200x003","B07.x00x008","R22.902","L97.x00","L60.800x033","Z42.301","S60.202","L72.200","S80.800x021","L02.900x002","L23.901","L58.100","L24.501","L98.503","L40.300","N64.503","D23.701","S90.901","L25.800","Q83.100","L70.005","N64.300x001","L65.200","C43.503","L56.800","L56.900","Q82.503","L27.200","C43.603","L57.200","L60.800x007","B35.000x001","L91.801","T09.000x021","I89.800x013","L90.500x012","L30.201","L24.503","L60.800x026","D17.101","D03.600x002","B09.x00x002","L43.901","B37.900x002","L10.300","C44.508","L40.301","D03.700x002","L70.201","L44.000","L90.500x039","L28.000x006","L24.100","L90.500x056","L81.405","S60.901","Z42.200x003","D17.200x004","L10.801","S31.002","B41.800x002","C44.500","L81.500","L27.000x006","Q82.100","L23.001","L98.500","L90.500x042","S80.800x032","L65.902","Z41.000","L27.100","L65.801","C50.500","Q82.802","L56.000","L10.100","L60.800x018","R22.100x002","S80.900","S90.800x042","B35.800x004","Q84.600x002","L85.900x001","L94.300","L02.200x009","T11.000","N64.200x001","D03.601","S40.700","L65.903","L90.500x030","S60.701","L89.002","I89.800x029","L03.900","T85.400","Z41.100x014","N60.000x001","Q85.900x009","L57.300","L70.002","L22.x01","S40.800x022","L08.800x005","D48.500x005","L26.x01","L90.500x023","C43.601","L24.203","L23.900","L89.105","E05.906","L40.100","L75.900","L82.x02","C43.507","T00.900x002","S60.700","L26.x00","S90.800x012","D23.500","Q82.500x005","C96.200x006","L71.100","C44.701","A18.400x014","N61.x00x013","C50.800","L08.800x006","S80.800x041","L73.100","S80.800x012","Q84.000","L30.400","T00.800x001","E14.600x027+L99.8*","L29.900","Z42.402","L90.500x038","N62.x00x001","D23.400x003","L90.500x057","I89.800x014","D17.100x003","D17.200x002","L90.300","M34.803","L40.102","E83.201","T11.000x031","R21.x00x004","L98.101","D23.501","L20.802","E85.413+L99.0*","T11.001","L90.100","L03.802","Q80.800","L55.200","L70.003","B07.x00x006","N63.x01","L83.x01","L08.909","B43.000","D48.504","L05.900","L01.001","L98.804","S39.911","C50.200","T00.900x005","L41.500","L90.500x074","T13.000x031","L98.800x015","Z41.100x020","D22.701","D23.500x010","E51.100x005+I98.8*","Q80.000","C43.707","D36.716","Z41.100x016","D22.501","B86.x00x003","L23.400","L65.800x005","L59.000","L08.800x008","L65.901","T14.001","L98.900x002","L92.903","C50.600","L90.500x064","L12.900","L03.801","T81.800x009","D48.600x001","Q84.100","L60.800x028","L90.200","R22.206","Q85.900x026","C44.504","L87.900","L89.207","I89.000x004","L08.900x028","L13.000","L60.800x015","Q84.202","R23.400x003","L90.600","C43.705","E10.600x970","L25.900","C43.700x001","Q82.400","L90.400","L90.500x053","L81.803","Z41.100x018","A18.405","L13.901","L53.200","L60.800x020","L73.802","L29.300","E11.600x970","L03.107","D22.901","L08.003","C50.100","L29.000","L89.000","S80.901","B35.300","L60.800x022","S50.700","S90.100","L90.500x049","L72.000x011","S90.800x031","S60.800x043","L25.000","L55.900","L43.000","C44.900","Q82.806","C44.506","C79.800x831","L60.800x031","L20.801","L08.000x006","D48.507","Z42.800x001","M79.811","Q82.800x006","L89.007","E10.600x026","S80.800x043","S40.800x032","S70.900x001","L13.101","L90.500x046","S30.003","T11.000x041","C46.000","L60.800x023","S60.201","T09.000","L11.100","L90.801","L70.203","D48.506","L55.800","L95.801","L02.903","L60.301","R22.400x003","S70.800x011","D18.000x010","L08.000x009","L98.802","Q82.800x018","L02.200x004","L29.802","L98.800x007","Q18.902","D48.516","L90.500x007","L72.900x003","L24.500","N61.x06","R22.300x001","R21.x01","S60.800x032","D22.601","L72.903","E10.600x025","L02.801","L98.700x001","L65.800x004","L24.901","M54.002","Q82.800x019","L68.000","N61.x00x014","L29.801","Z41.100x024","S30.700","L98.803","A18.400x006","E11.600x025","Q82.300","S80.100x002","B40.302+L99.8*","L53.901","B86.x00x006","B35.500","R22.000x005","R23.800x001","S90.300x003","D18.005","L73.800x005","L98.300","L02.901","C44.503","D17.000x004","Z42.300x001","L03.303","L58.000","L88.x00","S30.100","B86.x00","L57.900","L13.800","D22.500","B35.003","A60.100x002","L94.400","N64.804","L73.900","A18.403","L28.202","L12.103+H13.3*","L87.200","S30.800x003","L98.800x020","L92.300","L98.800x017","D22.505","L28.000x007","L89.202","L66.000","L01.000x013","L95.900","L30.204","L23.100","L05.901","L90.500x071","L74.900","L41.000","L93.001","L41.000x002","L01.005","C43.505","L57.800x005","Q82.800x004","D23.505","Q84.800x012","L89.102","L50.300","L02.802","C43.901","L67.103","B38.300","T14.000x011","B36.300x002","Q83.100x002","L90.500x025","E14.600x026","C44.606","R22.204","S20.300x001","L92.200","L90.500x019","B35.000","I89.000x013","L60.800x034","D48.500x008","L03.300","L03.305","Z41.100x003","L24.400","L24.504","L43.200","L08.100","C44.600","L90.500x031","T14.003","L51.900","M79.404","S70.800x012","M79.802","L72.904","S60.900x002","Q82.810","L90.500x047","D48.500x003","L81.402","L90.000","Q83.900","B36.000x001","L27.002","C43.706","C43.606","Z41.100x002","S39.910","D17.300x001","L70.500","T09.000x041","S90.800x023","Q84.400","L40.802","N60.801","M54.003","D23.600x002","L01.000x012","L70.900x002","L72.000x006","S80.800x022","S70.800x022","S50.800x011","L28.002","B40.301+L99.8*","L90.500x037","L08.801","S80.800x033","L91.800","L92.301","L05.000x001","Z41.100x009","C43.600","L44.900","L90.500x034","D04.600x001","L58.101","L85.803","S40.900","L01.100","L73.800x007","I89.800x024","T09.000x031","L60.801","L51.802","Z42.401","L24.206","L72.102","R22.202","Q84.601","S70.900x002","E10.600x023","D48.500x012","L08.802","D18.000x852","B07.x00x011","D23.602","L44.800","L40.002","M79.801","I89.800x026","Q81.000","A18.407","L24.800","B09.x01","L10.900","Q85.801","Z41.100x023","D23.401","L53.101","L30.500","B35.801","L27.004","D23.500x006","D03.900","L40.101","L41.300","L81.800x003","D23.700x002","C79.200","L43.100","R23.801","Z41.105","A18.400x022","N61.x02","M79.806","D17.500x010","T00.900x003","D22.510","L89.107","D17.200x005","L81.404","L84.x00x002","L93.100","S80.800x013","L90.500x073","Z42.304","L21.100","T00.900","B88.001+L99.8*","L70.900","L89.003","Z41.100x021","L53.900","L67.106","S40.800x042","L24.502","D23.600x001","L30.400x004","Q80.300","I89.100x002","L57.802","D23.506","Q85.900x049","L51.000","C44.502","T00.900x006","D04.500","L30.000","S20.801","L30.802","L21.000","B35.100","L10.000","B36.200","C44.800","L10.800x002","L00.x00","L81.300","R22.005","Q84.602","L98.001","L12.202","L73.801","L03.102","R23.800x002","C44.706","D04.701","B37.201","L08.000x001","L24.700","L64.900","L90.500x033","L30.100","D22.600","L41.100","L23.002","S31.001","Z41.104","L55.100","N60.201","D22.508","D23.504","L71.800","L85.900","L72.900x001","L10.200","R60.900x004","L20.806","C79.806","I89.800x027","L30.904","L95.802","L40.801","L90.500x043","L02.202","M79.403","L73.800x006","T14.101","L67.000","L57.000","L72.106"];
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