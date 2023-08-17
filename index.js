// this is a single line comment
/* this is a multi 
line comment */

let myhttp = require("http");

let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
  console.log ( myrequest.url );

    let mytext;
    if ( myrequest.url === "/hi") {
      mytext = "Hey Hi Hello";
    } else {
      mytext = "Hmm...Get outta here!";
    }
    myresponse.writeHead ( 200, { "Content-Type": "text/plain"} );

    myresponse.end ( mytext );
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");

