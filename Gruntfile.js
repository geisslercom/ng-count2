module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    	uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n <%= pkg.url %>'
            },
            dist: {
                src: 'src/ng-count2.js',
                dest: "dist/ng-count2.min.js"
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['uglify']);
    grunt.registerTask('default', ['uglify']);


}