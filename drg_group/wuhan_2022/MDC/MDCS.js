import {putMessage,intersect,SS_VALID} from '../Base.js';
import SB1_group from '../ADRG/SB1.js';
import SR1_group from '../ADRG/SR1.js';
import SS1_group from '../ADRG/SS1.js';
import ST1_group from '../ADRG/ST1.js';
import SU1_group from '../ADRG/SU1.js';
import SV1_group from '../ADRG/SV1.js';
import SZ1_group from '../ADRG/SZ1.js';

export default function MDCS_group(record){
    let mdc_zd=["A01.000","A01.000x004","A01.000x006","A01.000x007","A01.000x017","A01.000x018","A01.000x019","A01.000x020","A01.003","A01.100","A01.200","A01.300","A01.400","A02.100","A02.100x002","A02.101","A02.800","A02.900x002","A02.900x004","A02.901","A04.701","A06.300x001","A06.900","A18.800x001","A19.100","A19.200","A19.200x001","A19.800","A19.900","A19.900x004","A19.900x005","A19.901","A19.902","A20.000","A20.000x001","A20.700","A20.801","A20.802","A20.803","A20.900x002","A21.000","A21.700","A21.700x002","A21.800","A21.800x001","A21.900x001","A22.100x003","A22.700","A22.900","A23.000","A23.000x001","A23.100","A23.100x001","A23.200","A23.300","A23.800","A23.900x001","A23.900x004","A24.000","A24.000x002","A24.001","A24.002","A24.100x002","A24.101","A24.102","A24.201","A24.202","A24.300","A24.400","A25.000x001","A25.100x001","A25.900","A26.700","A26.700x001","A26.800x001","A26.900","A26.900x002","A27.000","A27.800","A27.800","A27.800x001","A27.900x002","A28.000","A28.001","A28.200","A28.801","A28.900","A30.000x001","A30.100x001","A30.200","A30.200x001","A30.300","A30.300x001","A30.300x002","A30.400","A30.400x001","A30.400x002","A30.500","A30.500x001","A30.800","A30.900","A30.900x002","A30.900x003","A30.900x004","A31.000x005","A31.800x001","A31.800x002","A31.800x003","A31.800x004","A31.800x005","A31.800x006","A31.800x007","A31.801","A31.802","A31.803","A31.900x001","A31.901","A32.700","A32.701","A32.900","A35.x00x001","A36.900","A36.900x002","A38.x00","A38.x00x010","A38.x00x011","A38.x00x012","A38.x00x013","A38.x00x014","A40.000","A40.100","A40.200","A40.300","A40.800","A40.900","A40.901+N08.0*","A40.903+N16.0*","A41.000","A41.100x002","A41.101","A41.200","A41.300","A41.400","A41.400x001","A41.500x083","A41.500x087","A41.501","A41.502","A41.503","A41.504","A41.505","A41.506","A41.800x002","A41.801","A41.802","A41.803","A41.804","A41.805","A41.806","A41.807","A41.900","A41.900x004","A41.902+N08.0*","A41.904+N16.0*","A42.700","A42.900","A43.800x001","A43.900","A44.000","A44.800","A44.900","A48.400","A48.800","A48.800x002","A49.000","A49.001","A49.002","A49.003","A49.004","A49.100x004","A49.100x005","A49.100x006","A49.101","A49.102","A49.103","A49.200","A49.201","A49.300","A49.301","A49.800x003","A49.800x014","A49.800x015","A49.800x019","A49.800x020","A49.800x023","A49.801","A49.802","A49.803","A49.804","A49.805","A49.806","A49.807","A49.808","A49.809","A49.810","A49.811","A49.812","A49.813","A49.814","A49.815","A49.817","A49.900","A49.901","A49.902","A50.000","A50.100","A50.200","A50.600","A50.700","A50.900","A51.200","A51.400x001","A51.500","A51.900","A52.700x001","A52.800","A52.801","A52.900","A53.000x001","A53.000x002","A53.900","A54.808","A54.900","A54.900x001","A54.900x002","A55.x00","A56.800","A58.x01","A59.900","A63.800","A64.x00","A65.x00","A66.000","A66.100","A66.200","A66.400","A66.700","A66.800","A66.900","A67.000","A67.100","A67.200","A67.300","A67.900","A68.000","A68.100","A68.900","A69.200","A69.800","A69.900","A70.x00","A74.900","A75.000x002","A75.000x003","A75.000x004","A75.001","A75.100","A75.200x001","A75.300x001","A75.900","A77.000","A77.000x001","A77.100","A77.100x001","A77.200","A77.200x001","A77.300","A77.300x001","A77.800","A77.900","A77.900x001","A78.x00","A79.000","A79.100","A79.800x002","A79.801","A79.900","A79.901","A92.000","A92.001","A92.100","A92.200","A92.300","A92.300x001","A92.400","A92.800","A92.900","A93.000","A93.100","A93.200","A93.802","A93.802","A94.x01","A95.000","A95.100","A95.900","A96.000","A96.100","A96.100x001","A96.200","A96.800","A96.900","A97.000","A97.100","A97.200","A97.900","A98.000","A98.100","A98.200","A98.300","A98.400","A98.400x001","A98.500x001+N08.0*","A98.800","A99.x00","B00.700","B00.701","B00.900x005","B00.900x007","B00.901","B00.902","B01.900x001","B01.900x002","B02.700","B02.800","B02.800x001","B02.900x002","B02.900x003","B03.x00","B03.x00x002","B03.x00x003","B03.x00x004","B04.x00","B05.800x008","B05.800x010","B05.900x001","B05.900x002","B05.900x005","B05.901","B06.800","B06.900x001","B08.000x001","B08.000x002","B08.000x004","B08.400x003","B08.401","B08.800x006","B08.801","B25.800x001","B25.900x001","B25.900x002","B27.000","B27.001","B27.100","B27.800","B27.900x001","B33.100","B33.300x001","B33.400x001+J17.1*","B33.800","B33.801","B33.802","B34.000","B34.100","B34.101","B34.102","B34.200","B34.300","B34.300x002","B34.400","B34.400x001","B34.400x002","B34.800x002","B34.800x003","B34.800x004","B34.801","B34.900","B36.800","B36.801","B37.700","B37.700x001","B37.808","B37.900","B37.901","B38.700","B38.800","B38.900","B39.300","B39.400","B39.400x001","B39.500","B39.500x001","B39.900","B40.700","B40.800","B40.900","B41.700","B41.800x001","B41.800x003","B41.900","B42.100","B42.100x001","B42.100x002","B42.100x003","B42.700","B42.800","B42.900","B43.800","B43.801","B43.900","B44.100x003","B44.700","B44.900x001","B45.700","B45.900","B46.100x001+G99.8*","B46.400","B46.500","B46.800x001","B46.800x002","B46.900x002","B47.100","B48.000x001","B48.200","B48.201","B48.300","B48.300x001","B48.400","B48.401","B48.402","B48.700","B48.800x001","B49.x00x007","B50.800","B50.801","B50.900x001","B51.000","B51.000x001+D77*","B51.800","B51.900","B52.800","B52.900x001","B53.000x001","B53.100","B53.800x001","B54.x00","B54.x00x004","B54.x00x006","B54.x00x008","B55.000","B55.000x001","B55.000x003","B55.100","B55.900","B56.000x001","B56.100x001","B56.900x001","B57.100","B57.500","B58.900x001","B60.000","B60.000x001","B64.x00","B65.100x001","B65.101","B65.200x001","B65.800x001","B65.800x002","B65.800x003","B65.900x006","B65.900x007","B65.900x008","B66.000","B66.000x001","B66.100","B66.101","B66.200","B66.800x001","B66.800x002","B66.800x003","B66.800x004","B66.800x005","B66.800x006","B66.900","B67.301","B67.400x001","B67.401","B67.601","B67.700x001","B67.901","B68.000","B68.100","B68.900x002","B68.900x003","B68.900x004","B68.901","B69.900x001","B70.000","B70.100","B71.000","B71.100","B71.800","B71.900","B73.x00","B74.000x001","B74.000x003","B74.100x003","B74.200x001","B74.200x003","B74.300","B74.400","B74.400x001","B74.400x002","B74.400x003","B74.800x001","B74.900","B74.900x005","B74.901","B74.902","B75.x00","B76.100","B76.800","B76.900","B78.700","B78.901","B79.x00","B80.x00","B81.000","B81.200","B83.000","B83.000x001","B83.000x002","B83.100","B83.200x001","B83.201","B83.300","B83.400","B83.800x001","B83.800x002","B83.800x004","B83.800x006","B83.800x007","B83.800x009","B83.900","B85.400","B88.800x001","B88.800x002","B89.x00","B99.x00x001","B99.x01","J10.800x002","O98.600x001","P37.000","P37.100","P37.300","R50.800x002","R50.801","R50.802","R50.803","R50.900","R50.900x002","R50.901","R68.801","T79.300x001","T80.200","T80.200x004","T80.201","T81.400x001","T81.400x002","T81.400x004","T81.400x005","T81.400x006","T81.401","T81.402","T81.403","T81.404","T81.405","T81.406","T82.700x001","T82.700x002","T82.700x003","T82.700x004","T82.700x005","T82.700x007","T82.700x008","T82.700x009","T82.700x010","T82.700x011","T82.701","T84.701","T85.700x103","T85.700x104","T85.700x808","T85.700x809","T85.701","T85.702","T85.703","T85.706","T85.708","T85.709","T85.710","T85.711","T85.712","T86.807","T88.000","T98.200x012","T98.200x021","Z03.000"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCS入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=SB1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合SQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'SQY';
    }

    if (result=SR1_group(record)){
        return result;
    }

    if (result=SS1_group(record)){
        return result;
    }

    if (result=ST1_group(record)){
        return result;
    }

    if (result=SU1_group(record)){
        return result;
    }

    if (result=SV1_group(record)){
        return result;
    }

    if (result=SZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}