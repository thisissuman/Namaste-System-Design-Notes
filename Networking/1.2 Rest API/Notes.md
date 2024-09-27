# Rest API 

## Overview	
- What is Rest API ?
- Why is Rest API ?
- **Building Blockes**: 
  - URL
  - Methods
  - Headers
  - request
  - Response
  - Status Code
- Build App
- Postman
- HTTP 1/2/3
- Best Practise
- Advance

  
### What is REST API ?
- The commincation which happens between Client and server is called API -- Frontend <--> Server <--> Storage
- There are different kind of API present REST, grPC, Graphql.
- REST API (Representational State transfer ) - how your data should be represented between transfer is decided by REST.
- How REST going to work is decided by HTTP, Reset is build on top of HTTP.
- in summary Rest api provided some rule, standarards to transfer data between two porgrammer.
- in summary HTTP it provides foundation and the path the protocol which is decided is defined by HTTP.

## Benifists of REST API
- Ease of use
  - axios , fetch it can work on any library the client and server can use any type of thing they want, it works everywhere
- Stateless
  - it dont maintain any state/package, if we provide full information it will send the response.
- Scalabiliry
  - Increease the scalability on the real time.  vertical scalable/horizontal Scalabiliry
- Flexibility with data
  - it works any format, json, xml it will work.
- Uniform interface
 - it provide straight provided predefined way to identify URL, like what is path and all.
- caching
 - it can cache the info, so that it will not go back to server to get the information.
- Separation of concern 
 - frontend will be independent of backend, java in backend , forntend is in javascript. it will work.
- Interporability - language agnostic
 - it will work on any language
- Testing
 - you can test while developing,
- Security 
 - Authontication header, http protocol together.  
 
 ## Benifists of REST API
- Client <Request--Response> Server

- Request

 - HTTP Reqest line : GET http://127.0.0.1:5500/styles/navigation.css HTTP/1.1 (path and schema)
 - HTTP Headers: HOST: 127.0.0.1:5500
				 Accept: text/css,*/*;q=0.5
				 Accept-language: en-GB
				 Accept-encoding: gzip
				 User Agent: Mozzila
				 Connection: Keep Alive
 - HTTP Body:    Can be empty or some data.
 
 - Response
 
 - HTTP Response status line : HTTP/1.1 200 ok
 - HTTP Reponse Headers: Date: 6 Jul 2024
				         Accept-ranges: bytes
				         Content-length: 2005
				         Content-type: text/css, charset=UTF
				         
 - CSS : nav.navbar {
 }

 ## Create your first server file.
  - npm init
  - npm i express --save
  - create index.js
  - add "type": "module" to use import.
  - install nodemon , and change nodemon ./indexjs
  - insttall body-parser (it will parse the data in post call.)
  - install postman extension to test the api and do post request.
  
 ## TODO App
 - https://localhost:5111/api/todo  (Path)
 - https://localhost:5111/api/users
 - Features
  - Create Todo --> Create    (CRUD)
  - View todo --> Read
  - Edit todo --> Update
  - Delete todo --> Delete
 - Method availble to achive this operation.
   - POST - Create
   - GET - Get and display the data
   - PUT -  If I have to send entier info to update something then we use PUT
   - PATCH - If I want to updae only the one thing i.e first , server will give only first name.
   - DELETE - delete something.
   - HEAD -  check the response, what kind of request you are going to make. validate data.
   - OPTION - used for security purpose, befoare making actual request it will do optional request. if you are allowed or not allowed.
   - CONNECT -  to establish the connection for the first time, so that next call it will reduce the extra hop.
   - TRACE -  Diagnosis purpose, 