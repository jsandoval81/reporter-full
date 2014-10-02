
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        //=================
        //== Watch files ==
        //=================
        watch: {
            //== Compile LESS after LESS edits
            less: {
                files: ['client/public/css/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: true
                }
            },
            //== Rebuild the application CSS file after CSS edits
            css: {
                files: ['client/public/css/*.css', '!client/public/css/application.css'],
                tasks: ['concat:css', 'cssmin'],
                options: {
                    spawn: true
                }
            },
            //== Rebuild the JS min file after JS edits
            js: {
                files: ['client/src/**/*.js', '!client/public/js/application.js'],
                tasks: ['concat:js', 'uglify', 'copy:js'],
                options: {
                    spawn: true
                }
            },
            //== Copy HTML files after HTML edits
            html: {
                files: ['client/*.html', 'client/**/*.html'],
                tasks: ['copy:html'],
                options: {
                    spawn: true
                }
            }
        },

        //===================
        //== LESS Compiler ==
        //===================
        less: {
            vendor: {
                files: [
                    {
                        expand: true,
                        cwd: 'vendor/bootstrap/less/',
                        src: ['bootstrap.less'],
                        dest: 'client/public/css/',
                        ext: '.css'
                    },
                    {
                        expand: true,
                        cwd: 'client/public/css/less/',
                        src: ['global.less'],
                        dest: 'client/public/css/',
                        ext: '.css'
                    }
                ]
            }
        },

        //========================
        //== File concatination ==
        //========================
        concat: {
            //== Concat the CSS files
            css: {
                src: [
                    'client/public/css/bootstrap.css',
                    'client/public/css/global.css'
                ],
                dest: 'client/public/css/application.css'
            },
            //== Concat the JS files
            js: {
                src: [
                    'vendor/angular/angular.js',
                    'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'vendor/angular-placeholders/angular-placeholders.js',
                    'vendor/angular-ui-router/release/angular-ui-router.js',
                    'client/src/app.js',
                    'client/src/home/home.js',
                    'client/src/reports/reports.js',
                    'client/src/about/about.js'
                ],
                dest: 'client/public/js/application.js'
            }
        },

        //======================
        //== CSS minification ==
        //======================
        cssmin: {
            minify: {
                expand: true,
                cwd:   'client/public/css/',
                src:  ['application.css'],
                dest:  'build/client/public/css/',
                ext:   '.min.css'
            }
        },

        //=============================
        //== Javascript minification ==
        //=============================
        uglify: {
            build: {
                src:  'client/public/js/application.js',
                dest: 'build/client/public/js/application.min.js'
            }
        },

        //=========================================
        //== Clear the Production-like directory ==
        //=========================================
        clean: {
            options: { force: true },
            css:    ['build']
        },

        //====================================================
        //== Copy server files to Production-like directory ==
        //====================================================
        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        src:    'client/index.html',
                        dest:   'build/client',
                        flatten: true
                    },
                    {
                        expand: true,
                        src:    'client/src/home/home.tpl.html',
                        dest:   'build/client/partials/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src:    'client/src/reports/reports.tpl.html',
                        dest:   'build/client/partials/',
                        flatten: true
                    },
                    {
                        expand: true,
                        src:    'client/src/about/about.tpl.html',
                        dest:   'build/client/partials/',
                        flatten: true
                    }
                ]
            },
            js: {
                files: [
                    {
                        expand: true,
                        src:    'client/public/js/application.js',
                        dest:   'build/client/public/js/',
                        flatten: true
                    }
                ]
            }
        },
 
        //====================
        //== Shell commands ==
        //====================
        shell: {
            //== Run NPM install in Production-like directory (Evening)
            prodNpmInstalleve: {
                command: [
                    'cd C:/Users/Sandoval/Desktop/Development/John/Javascript/production/ti',
                    'npm cache clean',
                    'npm install --production'
                ].join('&&')
            },
            //== Run NPM install in Production-like directory (Daylight)
            prodNpmInstallday: {
                command: [
                    'cd C:/Users/jsandoval/Desktop/Development/Javascript/production/ti',
                    'npm cache clean',
                    'npm install --production'
                ].join('&&')
            }
        }

    });

    //=============================
    //== Load Grunt NPM packages ==
    //=============================
    require('load-grunt-tasks')(grunt);

    //====================
    //== Register tasks ==
    //====================
    //== Default task (blank for now)
    grunt.registerTask('default', ['']);
    //== Production build (Create fresh production-like build)
    grunt.registerTask('build-evening',  []);
    grunt.registerTask('build-daylight', []);
};