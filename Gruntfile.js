module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-phpunit');

    grunt.initConfig({
        phpunit: {
            dir: '.',
            options: {
                bin: 'vendor/bin/phpunit'
            }
        },
        watch: {
            php: {
                files: ['src/**/*.php', 'tests/**/*.php'],
                tasks: ['phpunit']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
