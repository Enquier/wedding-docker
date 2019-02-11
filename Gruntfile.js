module.exports = function(grunt) {
if (grunt.file.exists('docker-defined-server.json')) {
    var server = grunt.file.readJSON('docker-defined-server.json');
    var serveStatic = require('serve-static');
    var modRewrite = require('connect-modrewrite');
    connectObject["docker"] = {
        options: {
            hostname: server.host,
            port: 9000,
            protocol: 'https',
            //open: true,
            key: grunt.file.read('/run/secrets/server.key').toString(),
            cert: grunt.file.read('/run/secrets/server.crt').toString(),
            }
        }
    };

    connect: connectObject,
    grunt.registerTask('server', function(arg1) {
        grunt.task.run('connect:' + arg1)

    });
};