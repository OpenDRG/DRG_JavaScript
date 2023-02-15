import {putMessage,intersect,SS_VALID} from '../Base.js'
import EB1_group from '../ADRG/EB1.js';
import EB2_group from '../ADRG/EB2.js';
import EC1_group from '../ADRG/EC1.js';
import EC2_group from '../ADRG/EC2.js';
import ED1_group from '../ADRG/ED1.js';
import EJ1_group from '../ADRG/EJ1.js';
import ER1_group from '../ADRG/ER1.js';
import ER2_group from '../ADRG/ER2.js';
import ER3_group from '../ADRG/ER3.js';
import ES1_group from '../ADRG/ES1.js';
import ES2_group from '../ADRG/ES2.js';
import ES3_group from '../ADRG/ES3.js';
import ET1_group from '../ADRG/ET1.js';
import ET2_group from '../ADRG/ET2.js';
import EU1_group from '../ADRG/EU1.js';
import EV1_group from '../ADRG/EV1.js';
import EW1_group from '../ADRG/EW1.js';
import EX1_group from '../ADRG/EX1.js';
import EX2_group from '../ADRG/EX2.js';
import EZ1_group from '../ADRG/EZ1.js';

export default function MDCE_group(record){
    let mdc_zd=["C78.001","J98.006","J98.501","J84.103","Q33.100","J66.200","A15.100x007","A15.100x008","D14.200","J70.400","R84.800","A15.509","J98.800x009","A15.605","A15.505","D14.301","A16.007","I89.000x029","J20.100","J44.900x004","J64.x00","J86.008","A15.200x002","A16.001","R06.000","D36.706","T17.901","A15.201","J18.000x002","T86.803","J20.300","A16.700x001","A15.000x020","J60.x00x004","J98.500x008","J98.504","S29.800","T79.800x007","A15.305","C38.100","S27.210","J45.900x021","A16.106","A15.000x026","A15.101","A19.000x007","C34.900x004","E89.802","I26.900x012","J98.300","A15.003","A15.107","S27.312","J46.x00x010","D38.200x001","D14.302","J86.002","J98.800x004","J43.800x001","J43.901","J98.600x001","B77.801+J17.3*","C79.800x809","R93.801","J90.x01","R09.101","T17.400","Q33.400","A16.200x014","A16.304","J15.600x003","J63.100","J98.800x014","R84.200","A16.024","A15.409","B44.000x001+J99.8*","S27.200","A15.500x020","J84.105","E85.400x005","J45.002","J40.x00x002","A15.812","C34.201","A16.900x003","I26.900x013","Q79.103","J20.900","B45.000","J63.800x003","Q33.800x002","R09.800x092","R91.x00x001","A15.206","A15.800x001","J98.508","J93.900","C34.900x001","C38.200","D38.401","J95.800x004","R04.200","I26.900x015","B39.000x001+J17.2*","J44.100","I89.000x016","I89.807","A15.500x017","B01.200+J17.1*","J15.800x002","A15.002","J63.800x005","E32.100","D38.100x001","I26.900x009","S27.610","J61.x00x001","J09.x01","J98.400x001","S27.805","J86.018","A02.201+J17.0*","J95.800x009","A15.500x029","J16.000","B42.000+J99.8*","A16.015","R94.201","A16.804","A15.500x024","J15.903","A06.500+J99.8*","A15.901","J90.x00x005","A15.000x003","R91.x03","J43.000x003","A16.900x023","J41.000","A15.500x011","C34.100x004","A15.404","J44.806","J67.300","J12.900","J60.x00x005","J20.700","J62.804","J98.201","C77.105","U07.100x003","J94.901","S27.900","J63.800x016","J70.101","E32.800x001","A15.204","J62.000x003","J45.006","J18.901","R84.700","R94.200","S27.910","J42.x00x005","C34.000x002","I26.900x005","C34.803","A16.900x002","A16.405","M05.100+J99.0*","A16.200x002","S27.808","S27.801","M05.103+J99.0*","J39.806","R06.804","A15.405","D15.700","J62.800x002","A15.300x001","T86.800x011","J39.804","J15.600x005","J67.200x003","J68.900","C34.102","J90.x00x003","J12.000","B37.800x083","J67.700x002","J84.002","J98.102","J84.100x008","A15.701","J46.x02","J60.x00","J66.800","S27.807","J84.803","A16.013","J86.009","J43.903","J95.100","A15.401","A15.609","J92.000","C78.100","J93.003","J98.800x003","J95.800x021","J86.007","J63.802","J47.x03","J69.000x004","J94.806","A15.814","A15.402","S27.100","A15.810","D38.300x001","J21.100","A15.104","J44.803","C77.103","Q33.003","T81.400x009","A19.000x008","J98.010","J86.013","A15.500x022","J18.000x001","A15.802","I88.900x008","D48.709","J68.301","B40.100","J90.x00x004","B45.000x002+J99.8*","B44.102+J17.2*","I89.800x007","J62.001","E85.412+J99.8*","J18.802","J70.300","J85.300","J86.006","A15.303","C79.807","A19.000x018","E32.802","J62.000x001","J94.200","Q89.209","A16.210","J68.201","C37.x00","C78.201","J95.800x012","A15.007","A16.032","E32.001","A54.806+J17.0*","C77.100x004","A15.500x012","A15.500x003","M31.300x002","C34.001","J18.800x002","J20.400","J44.807","A15.304","Q85.908","R06.100","J12.100","C46.701","J40.x00","D86.200","J18.800x001","I26.902","J20.000","J67.800x002","J84.102","E85.404","J84.900","J85.100","C78.200","J86.015","J45.004","B38.200","J63.500","J69.100x001","A19.000x016","J98.410","J98.001","A37.800x001","C79.800x838","A16.105","R06.200","R91.x00x005","J18.903","J62.802","A16.006","A19.000x001","B39.200x001+J17.2*","A16.010","A15.811","J63.201","C34.300x004","R09.100","I26.901","A36.201","J43.100","S27.600","D17.400x001","J63.801","J98.100","J98.901","S27.303","T27.300","J70.800","A16.037","A15.500x015","J20.600","M31.302+J99.1*","J63.800x009","A15.500x001","J63.400","J62.800x004","I28.800x010","J39.802","A16.803","A19.000x003","J96.900x002","R09.801","J98.400x008","J68.002","J98.400x019","R09.100x002","J98.802","A15.406","J98.601","B39.100x001+J17.2*","A16.103","S27.803","J63.000x002","C34.801","J86.901","J10.000","J82.x00x005","B65.907+I52.1*","A15.100x005","Q33.600","D15.000","I00.x00x007+J17.8*","J95.800x010","A16.207","A19.801","J62.800x007","J68.400","C34.800x001","A15.103","I26.900x018","A15.500x002","R94.204","T27.600x001","J98.400x016","A15.607","J69.001","J95.808","U07.100x002","R06.801","J10.100x005","J45.900x012","C38.800","J98.200","C77.101","J60.x00x002","S27.500","J90.x00x002","A16.200x015","A15.500x016","J98.008","J81.x00","J98.407","B06.801+J17.1*","J96.100","C78.002","J45.903","I26.900x007","J86.014","B37.803","S28.000","A15.501","J95.801","E32.800x005","A16.802","J15.100","C33.x00","J86.019","J44.802","A16.300x002","C34.900x006","J94.800x003","E85.407","R84.500","J98.417","A16.017","B40.200","E32.000","J15.900","J67.800x005","J94.805","J98.413","R84.400","A15.500x023","J67.000","J62.803","A16.011","B06.800","J18.002","J86.001","J44.801","D48.710","J94.807","A16.300x007","D38.100x002","J66.000","A19.001","A43.000x001+J99.8*","J95.800x016","J98.009","J22.x00","B33.400x001+J17.1*","S27.501","A16.021","A15.507","C38.400","I26.900x002","J45.003","J46.x00x003","A16.018","A16.500x008","J84.108","T85.608","S27.811","J39.808","D21.302","A16.302","D36.700x013","A15.500x004","A15.500x014","J15.700","J20.902","R94.202","C45.702","J46.x01","J45.900x013","S27.806","R84.300","J63.800x019","S27.410","A15.703","C49.302","J90.x00","A16.202","C78.304","J12.200","A15.006","J67.800x001","J67.800x004","Q34.900","C49.300x001","A15.200x001","A16.205","J82.x00x004","S27.800x013","I89.800x016","J94.900x001","A19.000x013","R06.802","A15.005","R09.201","R04.802","A16.107","J20.500","J95.200","S29.900","J85.002","A15.500x025","J10.001","J84.100x007","J98.400x013","J98.403","A16.104","C34.800x003","D38.601","Q32.300","J15.400","J45.900x023","J47.x00","J15.101","J63.800x025","J67.500","J18.800x012","A06.500x002+J99.8*","A06.502+J17.3*","J63.800x026","J70.900","M33.901+J99.1*","I26.900x017","C78.306","E83.104+J99.8*","A19.000x019","A15.100x009","A15.205","J44.900x003","J84.804","Q32.102","Q33.900","M32.103+J99.1*","E32.000x003","E84.001","J62.800x005","A16.003","A16.016","D19.000","J44.800x001","A16.020","J41.100","J98.500x001","J18.900","A15.803","A16.108","J20.901","A16.801","R05.x02","A16.026","J98.412","J92.900x002","C34.901","D38.103","J18.800x006","B05.200+J17.1*","C34.100x003","C38.401","B41.000","I26.900x008","J98.000x009","B25.000+J17.1*","S27.810","E32.800x004","J61.x00x002","J44.000","J43.000","J95.802","I89.804","A19.000x012","J67.700x001","S27.302","C34.800x002","A06.501+J99.8*","D18.100x026","D38.201","A19.000x005","J45.902","J84.805","A15.000x018","J94.802","J85.200","J69.101","A15.004","A16.805","J45.000x001","J95.401","A15.000x022","J44.900x002","J98.801","R04.800x004","A15.106","D15.200x001","A15.502","R09.200","J84.110","A15.307","J47.x01","T84.200x004","J98.400x005","J21.900","I89.003","A19.000x010","A15.000x002","J18.001","J84.001","E32.801","A16.025","J15.602","J42.x00x004","A16.402","J63.800x013","J63.301","A15.202","J86.000x013","A15.100x006","J15.000","J84.109","J94.800x010","D17.700x023","S25.401","J15.902","A16.101","A15.100x002","I88.106","J98.101","J63.800x011","D14.400","J43.001","A16.203","A15.306","C45.700","J67.100","A21.201+J17.0*","J63.800","R93.804","J95.811","J21.000","A15.408","Q32.400x005","A15.702","I89.800x017","J43.902","I26.900x001","J86.010","J15.601","A16.400x011","D38.104","J63.800x012","A19.000x017","I89.800x018","J62.801","T85.700x804","A19.802","R09.800x091","B39.100","B49.x00x011","J45.005","S27.804","J42.x00","J69.800x001","D36.700x008","Q79.000","A16.503","J63.300x003","A37.000","J16.800x001","A15.500x019","C34.300x003","D17.400x004","J86.011","C79.800x829","C45.000","J98.408","C34.802","J60.x01","A16.038","J46.x00x008","R09.800x095","J45.800","C49.300x003","A16.009","J63.001","Q85.901","R06.301","J95.804","A15.603","D02.200x002","A16.000x001","A15.001","J45.900x011","A15.804","D38.105","I89.800x023","A15.403","J44.900x005","J93.100x002","D18.100x025","A16.400x010","D17.400x005","J84.800x003","A15.000x010","J39.803","J63.300x001","B66.401+J99.8*","J94.201","Q85.904","J67.600x001","R04.800x002","R06.805","A15.500x026","A15.807","A16.500x004","C34.000","J66.100","A19.803","R84.600","A15.000x024","J15.500","R04.900","J46.x00x002","S29.700","J68.000x002","C34.900x008","J45.007","R84.000","C38.300","J44.900","D18.000x857","J18.100","R06.803","J84.104","C34.900x005","B48.500+J17.2*","J42.x00x003","D18.100x015","Q32.400x004","J98.005","R09.300","J84.100x006","R05.x00","A16.029","A15.900","J98.000x013","J43.101","J45.900x001","A19.000x004","D38.301","A37.900x003","J98.415","R05.x01","J21.900x002","J63.800x021","B37.100","J84.800x005","A15.809","J63.000","J98.800x006","M05.101+J99.0*","Q32.200","J84.101","A16.033","B48.502+J17.2*","J94.801","J98.004","R06.000x003","T17.801","J62.000x002","J18.803","C77.102","C79.810","J86.016","J96.900x001","A16.800x002","S27.010","A15.602","J81.x00x002","J46.x00x006","J63.000x003","J86.012","A15.105","A15.801","C78.000","A16.014","Q33.500","J98.000x012","Q32.400x002","T27.200x001","J98.800x016","J67.400","M34.800x001+J99.1*","B40.000","A15.000x001","Q33.002","A19.000x006","B38.100x001+J17.2*","I89.800x021","A16.035","A16.505","J86.020","J69.000x002","J98.401","S27.510","D18.000x814","A16.401","S27.802","J09.x02","A16.005","J43.904","J21.901","J15.600x002","J67.200x002","D48.115","A16.030","J45.901","B65.902+J99.8*","J46.x00x009","C77.104","A16.031","A15.100x011","B49.x14+J99.8*","A16.034","B37.101+J17.2*","J94.800x004","C77.100","J67.200","T27.500x001","R06.000x002","A01.000x005+J17.0*","J44.805","J80.x00","D15.200","J98.507","B58.300+J17.3*","D38.102","A16.406","J62.800x008","J63.800x020","R06.806","R06.300","S27.301","J69.000","J63.800x010","Q32.402","J98.505","D15.200x002","J63.000x001","J96.000","J18.801","A19.000x020","A15.601","J98.405","J39.810","B38.000x001+J17.2*","J95.900","D17.400x002","J70.200","D15.701","A16.201","D38.101","J86.000x012","A16.204","J84.800x006","B38.200x001+J17.2*","J42.x00x006","B38.100","D18.000x800","R06.400","R09.000","J86.003","J39.801","A16.100x001","J82.x01","A15.806","A16.004","Q79.102","J68.001","E32.002","J85.000x002","J95.300","M35.904+J99.1*","M05.102+J99.0*","R06.800x005","Q33.000","C45.701","I97.800x018","J84.800x004","A16.500x001","J21.801","A15.207","Q34.100","D38.300x002","J15.000x002","J98.502","S24.200","J43.900","A16.019","J67.800x003","A15.808","J13.x00","J63.800x014","J82.x00x001","S27.310","R91.x01","A16.305","A15.606","J63.800x015","I26.900x011","J60.x00x003","J84.800x008","J95.810","J47.x02","J98.002","R09.800x094","C34.000x003","T17.501","J63.800x018","S27.300x012","D38.100x003","A15.500x010","A16.000x002","D14.300x001","J43.900x001","D17.700x019","A15.407","J98.506","A19.000","A16.400x005","R59.009","Q33.301","J63.800x022","D36.717","J15.800x001","A16.012","J70.001","A15.302","A15.500x027","C78.003","J42.x01","S27.000","J45.100","I26.900x003","J63.300x002","C78.000x003","J40.x01","J86.004","A15.100x003","J98.602","A15.506","D48.700x019","Q34.000","R91.x04","J86.017","A16.500x009","J14.x00","B38.000","C38.400x003","C34.902","J98.003","A15.608","J92.901","J43.200","A16.501","D02.100","J90.x02","J94.804","A16.303","A15.503","A16.700x002","J86.000","B46.000x001+J99.8*","J98.500x007","J39.805","J86.902","Q89.800x910","S27.700","S28.100","A19.000x014","J98.007","D15.900","B39.200","A15.000x014","I89.800x002","J68.800","J84.802","U07.100x001","A16.002","J18.800x004","S27.311","I89.000x027","Q85.900x015","J96.900x003","J68.000x001","J61.x01","S27.110","A15.500x021","D02.400","J98.416","C39.900x001","M33.103+J99.1*","J67.400x002","J45.900x041","T17.804","A15.000x012","J63.800x001","J98.411","B67.100x001+J99.8*","A16.807","J98.800x007","J98.800x018","J45.100x003","T17.802","A19.000x002","D38.300x003","M35.002+J99.1*","J67.900","J82.x00x002","J45.100x002","A15.500x028","J94.101","J85.001","J11.000x001","A16.102","D38.400x001","A15.000x016","A22.102+J17.0*","J63.803","A16.301","J15.600x006","J84.000x003","C76.100","J63.200","J98.011","J98.404","J45.900x002","A16.300x003","J84.801","A37.900x004","J86.005","J11.100x005","S27.812","A16.206","U04.900","A16.200x007","A37.100","J98.402","J20.200","A19.000x011","A15.400x001","A37.901+J17.0*","J45.900x031","A16.200x013","M33.201+J99.1*","B44.101+J99.8*","R84.100","A15.813","A16.036","D18.011","A52.704+J99.8*","J18.200","J62.800x006","I89.000x028","G47.300x034","A15.203","Q32.401","R84.903","A15.000x028","C34.101","D02.201","J20.800","J70.200x002","M33.001+J99.1*","S27.710","J67.600","J15.300","I26.900x016","J98.409","S27.401","S27.400","A15.500x018","J62.800x003","J80.x01","J15.901","J98.418","J98.800x001","A37.900","M34.801+J99.1*","T17.500","Z03.800x001","A16.008","C34.301","J45.000x003","A15.100x010","E32.900","U07.000","A19.000x009","A15.508","T17.803","A15.504","Q33.200","A16.504","A19.000x015","A15.604","A16.022","A16.028","A16.800x003","C76.100x003","I26.900x010","J18.902","A15.805","J45.900","B48.501+J17.2*","J68.101","J86.903","A16.027","J93.800x001","J98.503","T27.700","B49.x13","J84.800x007","J12.800","A15.301","A16.403","A16.900x001","I88.107","J15.402","J98.400x012","J98.414","J09.x00","C34.800","Q33.800x001","R06.600","T17.900","A15.100x004","A15.100x001","J63.800x023","J63.800x017","M31.304+J99.1*","B39.000","D17.400x003","J12.300","J42.x00x001","A15.102","J41.800","D38.600x001","J10.000x001","J86.000x006","J39.807","Q79.101","R84.904","R93.805","J98.000x011","J18.000","A16.023","A16.200x012","C39.800","J15.200","J65.x00","J93.100x001","S27.313","J45.000","A16.500x010","A15.500x013","I26.900x006","J98.700","A16.109","R09.800x093","J61.x00x003","A16.806","J63.800x024","D86.000"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCE入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=EB1_group(record)){
        return result;
    }

    if (result=EB2_group(record)){
        return result;
    }

    if (result=EC1_group(record)){
        return result;
    }

    if (result=EC2_group(record)){
        return result;
    }

    if (result=ED1_group(record)){
        return result;
    }

    if (result=EJ1_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合EQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'EQY';
    }

    if (result=ER1_group(record)){
        return result;
    }

    if (result=ER2_group(record)){
        return result;
    }

    if (result=ER3_group(record)){
        return result;
    }

    if (result=ES1_group(record)){
        return result;
    }

    if (result=ES2_group(record)){
        return result;
    }

    if (result=ES3_group(record)){
        return result;
    }

    if (result=ET1_group(record)){
        return result;
    }

    if (result=ET2_group(record)){
        return result;
    }

    if (result=EU1_group(record)){
        return result;
    }

    if (result=EV1_group(record)){
        return result;
    }

    if (result=EW1_group(record)){
        return result;
    }

    if (result=EX1_group(record)){
        return result;
    }

    if (result=EX2_group(record)){
        return result;
    }

    if (result=EZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}