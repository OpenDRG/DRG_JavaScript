import {GroupResult,returnMessages,init_cc_mcc_cce} from './Base.js';
import {group} from './Grouper.js';

export default function Grouper_changsha_2023(record){
    init_cc_mcc_cce();
    let drgCode=group(record);
    let result=GroupResult.createResult(record,drgCode);
    result.messages=returnMessages();
    return result;
}