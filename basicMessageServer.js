
/**Author : Martand Singh
 * Date : 04 July 2018
 * Scope : Node JS - Part 4. Learn how to make basic get service using Node Js
 * Follow us: 
 * Facebook : https://www.facebook.com/codemakerz
 * Youtube : https://www.youtube.com/martand89
 * GitHub Profile: https://www.github.com/martandsingh
 * Repository Url : https://github.com/martandsingh/NodeJsGetPostService
 */


const http  = require('http') //including the http module

//here we are creating a server...
http.createServer(function(req, res){

    /**
     * here we are checking the url. 
     */
    //this is the default url
    if(req.url === '/'){
        res.write(JSON.stringify({status : 200, message : 'server working...'}));
    }
    else if(req.url === '/message'){
        res.write(JSON.stringify({status : 200, message : 'this is the message'}));
    }
    res.end(); //you have to end the res, otherwise it will be a non ending response.
    
}).listen(8000); //here our get service is runnin on port 8000.

console.log('Server running on Port : 8000');

//lets run it...
// so now we have created our first node js get service.... it is very simple... cheeers....!!!