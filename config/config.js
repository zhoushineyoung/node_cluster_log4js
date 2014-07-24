/**
 * Created by Administrator on 2014/07/23.
 */
module.exports = config = {
    host:'Node, Host ' + require('os').host,
    hostName:'Node, HostName ' + require('os').hostname,

    stat:{
        workersNum:2,
        pidFile:'stat-server.pid'
    },

    http:{
        ip:'127.0.0.1',
        port:8000,
        connTimeOut:5000
    }

}