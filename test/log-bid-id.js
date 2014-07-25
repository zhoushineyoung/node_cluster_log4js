/**
 * Created by Administrator on 2014/07/25.
 */
var fs=require('fs');

fs.readFile('./bid_request.json',function(er, data) {
    var bid_req_json = data;
    console.log(bid_req_json);
//    var bid_log_data = JSON.parse(bid_req_json);
    console.log('req-id = ' + JSON.parse(bid_req_json).id);
})

fs.readFile('./bid_response.json',function(er, data) {
    var bid_req_json = data;
    console.log(bid_req_json);
//    var bid_log_data = JSON.parse(bid_req_json);
    console.log('res-id = ' + JSON.parse(bid_req_json).id);
})
