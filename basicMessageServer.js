
/**Author : Martand Singh
 * Date : 04 July 2018
 * Scope : Node JS - Part 4. Learn how to make basic get service using Node Js
 * Follow us: 
 * Facebook : www.facebook.com/codemakerz
 * Youtube : www.youtube.com/martand89
 * GitHub : ww.github.com/martandsingh
 */


const http  = require('http')

http.createServer(function(req, res){

    /**
     * here we are checking the url. 
     */
    if(req.url === '/'){
        res.write(JSON.stringify({status : 200, message : 'server working...'}));
    }
    else if(req.url === '/message'){
        res.write(JSON.stringify({message : 'this is the message'}));
    }
    res.end();
    
}).listen(8000); //here our get service is runnin on port 8000.

console.log('Server running on Port : 8000');