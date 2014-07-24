/**
 * Created by Administrator on 2014/07/23.
 */
var log4js = require('log4js'),
    path = require('path');
// log4js.configure(path.join(__dirname, './config/log4js.json')) // __dirname -> d:\WebstormProjects\learning-express-cluster

/* configuration for log4js */
exports.configure = function(mode) {
    if(mode === 'master'){
        log4js.configure(path.join(__dirname, '../config/log4js-master.json')) // __dirname -> d:\WebstormProjects\learning-express-cluster
    }else{
        log4js.configure(path.join(__dirname, '../config/log4js-worker.json')) // __dirname -> d:\WebstormProjects\learning-express-cluster
    }
}

/**
 * 暴露到应用的日志接口，调用该方法前必须确保已经configure过
 * @param name 指定log4js配置文件中的category。依此找到对应的appender。
 *              如果appender没有写上category，则为默认的category。可以有多个
 * @returns {Logger}
 */
exports.logger = function(name) {
    var dateFileLog = log4js.getLogger(name);
    dateFileLog.setLevel(log4js.levels.INFO);
    return dateFileLog;
}

/**
 * 用于express中间件，调用该方法前必须确保已经configure过
 * @returns {Function|*}
 */
exports.appUseLog = function() {
    return log4js.connectLogger(log4js.getLogger("app"), {level: log4js.levels.INFO});
}