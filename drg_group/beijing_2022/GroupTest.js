import {GroupProxy} from './GroupProxy.js'
import {GroupResult} from './Base.js'

var grouper=new GroupProxy();
var result=grouper.group_record_str(
    '22139971,1.0,73.0,27006.0,,13030305.0,8.0,1.0,"G20.x03,R90.803,F41.101,I10.x00x002,N39.000,E77.801,E87.600",,BU21'
    );
result.then(x=>console.log(GroupResult.toString(x)));