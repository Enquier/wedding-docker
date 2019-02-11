module.exports = function(grunt) {
if (grunt.file.exists('angular-mms-grunt-servers.json')) {
    var server = grunt.file.readJSON('angular-mms-grunt-servers.json');
    var serverPort = server.mms_port;
    var serverHttps = true;
    var serveStatic = require('serve-static');
    var modRewrite = require('connect-modrewrite');
    connectObject["docker"] = {
        options: {
            hostname: 'localhost',
            port: 9000,
            protocol: 'https',
            //open: true,
            key: grunt.file.read('/run/secrets/server.key').toString(),
            cert: grunt.file.read('/run/secrets/server.crt').toString(),
            }
        }
    };
}