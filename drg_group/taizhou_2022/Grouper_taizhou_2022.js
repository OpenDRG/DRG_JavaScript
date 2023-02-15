import {GroupResult,returnMessages} from './Base.js'
import {group} from './Grouper.js'

export default function Grouper_taizhou_2022(record){
    let drgCode=group(record);
    let result=GroupResult.createResult(record,drgCode);
    result.messages=returnMessages();
    return result;
}