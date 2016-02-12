
module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {expand: true, cwd: 'src', src: '*.html', dest: 'dist/'},
                ],
            },
        },
        useminPrepare: {
            html: 'src/exemple.html'
        },
        usemin: {
            html: 'dist/exemple.html',
        },
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['src/js/**/*.js'],
        },
        jscs: {
            src: 'src/js/**/*.js',
            options: {
                config: ".jscsrc",
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('test', ['checkConventions', 'karma']);

    grunt.registerTask('checkConventions', ['jshint', 'jscs']);

    grunt.registerTask('build', [
        'checkConventions',
        'copy:build',
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'cssmin:generated',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);
};