/**
 * Created by ZhouXY on 2014/7/12.
 */
var http = require('http'),
    url = require("url");

var newLogger = require('./NewLogger'),
    config = require('../config/config');

newLogger.configure('worker');

var logger = newLogger.logger('peon'),
    dataLogger = newLogger.logger('access');


function service(route, handle, cluster) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        var headers = request.headers;
        console.info('headers = ' + JSON.stringify(headers));

        dataLogger.info("Http" + request.httpVersion + ", [" + request.method + "]," + " Request for [" + pathname + "] received.");
        route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(config['http']['port'], config['http']['ip']);
    logger.info('Server[%d], with pid[%d], has started.',cluster.worker.id, process.pid);
}
exports.service = service;