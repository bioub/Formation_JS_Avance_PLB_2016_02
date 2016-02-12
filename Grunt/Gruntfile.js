
module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {expand: true, cwd: 'src', src: '*.html', dest: 'dist/'},
                ],
            },
        },
        uglify: {
            build: {
                files: [
                    {expand: true, cwd: 'src', src: '**/*.js', dest: 'dist/'}
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('build', ['copy:build', 'uglify:build']);
};