# Global dependencies

To be able to start coding you need install some global dependencies which are not part
of this repository. This is composer and grunt. If you do not have them, get them by
running these commands:

    $ curl -sS https://getcomposer.org/installer | php
    $ npm install -g grunt-cli

# Warming up

If you have installed the global dependencies you need some local ones. So before starting
your code kata, fire the following commands:

    $ php composer.phar install
    $ npm install

# Start coding

Now you are prepared to start coding, to assist you there is a grunt task that will run phpunit
whenever you touch a php file. To start it, run this command:

    $ grunt
