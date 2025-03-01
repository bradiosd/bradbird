#!/bin/sh -eu

function generateConfigJs(){
    echo "/*<![CDATA[*/";
    echo "window.extended = window.extended || {};";
    for i in `env | grep '^REACT_APP_'`
    do
        key=$(echo "$i" | cut -d"=" -f1);
        val=$(echo "$i" | cut -d"=" -f2);
        echo "window.extended.${key}='${val}';";
    done
    echo "/*]]>*/";
}

# Generate the config.js file with environment variables
generateConfigJs > /usr/share/nginx/html/config.js

# Start nginx
nginx -g "daemon off;" 