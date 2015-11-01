# CraftSocket
small wrapper around JavaScript's WebSocket API  

### Using CraftSocket   
 
##### Make a new CraftSocket Object    
 ``` javascript
   var socket = new CraftSocket("ws://" + location.hostname + ":" + port + "/");
   // The CraftSocket Object takes any ws:// or wss:// address 
 ```   
##### Send the Server a message   
  ``` javascript
   socket.send('Hello GoGo', res => console.log(res));
   // First argument is the message you want to send   
   // Second argument is a callback function with the server response as a parameter
 ```    
 
##### Recieve a message from the Server     
  ``` javascript  
   socket.recieve(msg => console.log(msg));
   // every time the server sends a message, 
   // the callback function will fire with the server's response as a parameter
 ```
 
