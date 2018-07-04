
/**Author : Martand Singh
 * Date : 04 July 2018
 * Scope : Node JS - Part 4. Learn how to make basic post service using Node Js
 * Facebook : https://www.facebook.com/codemakerz
 * Youtube : https://www.youtube.com/martand89
 * GitHub Profile: https://www.github.com/martandsingh
 * Repository Url : https://github.com/martandsingh/NodeJsGetPostService
 */

var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(3000); //3000 port no. you can change it any port

/**
 * here we can see, we are defining an event listener for event named request.
 * if you do not know about events, please refer our Node Js tutorial Part 3.
 */
server.on('request', function (req, res) {

    //check if the request is of POST type
    if (req.method === 'POST') {
        var body = '';
        console.log("PostRequest"); //printing log
    }
   
/**
 * here we are defining another event listener for event name data.
 * so if there is data, then we will append all the data in a variable named body.
 */
   
    req.on('data', function (data) {
        body += data;
    });

    /**
     * and finally another event listener for event name "end". so if response data ends we will
     * read the data from body and print it.
     */
    req.on('end', function () {
        var post = querystring.parse(body);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(post));
    });
});

console.log('Listening on port 3000');

//lets start the service...
//here we see how creating a post service is so easy...