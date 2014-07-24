/**
 * Created by Administrator on 2014/07/23.
 */
var os = require('os'),
    url = require('url'),
    http = require('http'),
    cluster = require('cluster'),
    path = require('path');

var newLogger = require('./libs/NewLogger'),
    server = require("./libs/Server"),
    router = require("./libs/Router"),
    requestHandlers = require("./libs/RequestHandlers");

var handle = {};

if(cluster.isMaster){
    newLogger.configure('master');
    var logger = newLogger.logger('main');
    os.cpus().forEach(function(){
        cluster.fork();
    });
    logger.info('Master[%d], with pid[%d], has started.', cluster.id, process.pid);
}else{
    handle["/"] = requestHandlers.start;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;
    server.service(router.route, handle, cluster);
}