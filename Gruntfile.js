module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // SETTINGS -------------
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            app: {
                files: [{
                    expand:true,
                    cwd: 'scss',
                    src: ['**/*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            },
            options: {
                sourceMap: true,
                output: 'nested',
                imagePath: "../"
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'css/autoprefix/'
            }
        },
        cssmin: {
            build: {
                files: {
                    'public/css/main.min.css': ['css/autoprefix/main.css']
                }
            }
        },
        watch: {
            css: {
                files: [
                    'scss/*.scss',
                    'Gruntfile.js'
                ],
                tasks: ['newer:sass', 'newer:autoprefixer', 'newer:cssmin']
            }
        },
        sitemap: {
            dist: {
                pattern: ['**/*.html', '!**/google*.html'], // this will exclude 'google*.html' 
                siteRoot: 'public/'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-sitemap');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch'); //run this task with "grunt watch"

    // Default task(s).
    grunt.registerTask('default', ['sass','autoprefixer','cssmin']);
};
