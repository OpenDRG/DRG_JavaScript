import {putMessage} from './Base.js';
import MDCA_group from './MDC/MDCA.js';
import MDCP_group from './MDC/MDCP.js';
import MDCY_group from './MDC/MDCY.js';
import MDCZ_group from './MDC/MDCZ.js';
import MDCM_group from './MDC/MDCM.js';
import MDCN_group from './MDC/MDCN.js';
import MDCO_group from './MDC/MDCO.js';
import MDCB_group from './MDC/MDCB.js';
import MDCC_group from './MDC/MDCC.js';
import MDCD_group from './MDC/MDCD.js';
import MDCE_group from './MDC/MDCE.js';
import MDCF_group from './MDC/MDCF.js';
import MDCG_group from './MDC/MDCG.js';
import MDCH_group from './MDC/MDCH.js';
import MDCI_group from './MDC/MDCI.js';
import MDCJ_group from './MDC/MDCJ.js';
import MDCK_group from './MDC/MDCK.js';
import MDCL_group from './MDC/MDCL.js';
import MDCQ_group from './MDC/MDCQ.js';
import MDCR_group from './MDC/MDCR.js';
import MDCS_group from './MDC/MDCS.js';
import MDCT_group from './MDC/MDCT.js';
import MDCU_group from './MDC/MDCU.js';
import MDCV_group from './MDC/MDCV.js';
import MDCW_group from './MDC/MDCW.js';
import MDCX_group from './MDC/MDCX.js';


function group(record){
    let result;

    if (result=MDCA_group(record)){
        return result;
    };

    if (result=MDCP_group(record)){
        return result;
    };

    if (result=MDCY_group(record)){
        return result;
    };

    if (result=MDCZ_group(record)){
        return result;
    };

    if (result=MDCM_group(record)){
        return result;
    };

    if (result=MDCN_group(record)){
        return result;
    };

    if (result=MDCO_group(record)){
        return result;
    };

    if (result=MDCB_group(record)){
        return result;
    };

    if (result=MDCC_group(record)){
        return result;
    };

    if (result=MDCD_group(record)){
        return result;
    };

    if (result=MDCE_group(record)){
        return result;
    };

    if (result=MDCF_group(record)){
        return result;
    };

    if (result=MDCG_group(record)){
        return result;
    };

    if (result=MDCH_group(record)){
        return result;
    };

    if (result=MDCI_group(record)){
        return result;
    };

    if (result=MDCJ_group(record)){
        return result;
    };

    if (result=MDCK_group(record)){
        return result;
    };

    if (result=MDCL_group(record)){
        return result;
    };

    if (result=MDCQ_group(record)){
        return result;
    };

    if (result=MDCR_group(record)){
        return result;
    };

    if (result=MDCS_group(record)){
        return result;
    };

    if (result=MDCT_group(record)){
        return result;
    };

    if (result=MDCU_group(record)){
        return result;
    };

    if (result=MDCV_group(record)){
        return result;
    };

    if (result=MDCW_group(record)){
        return result;
    };

    if (result=MDCX_group(record)){
        return result;
    };

    putMessage('不符合所有MDC的入组条件，无法入组');
    return '0000';
}

export {group}