we need to create a server to listen to the incoming requests from outside, we will be using express js to create the server

- create a repo, initialise the project
- node_modules,package.json,package-lock.json
- install express in your app
- create a server
- listen to port 7777
- write req handlers
- install nodemon and update scripts inside package.json

/ab?c === it will work for abc as well as ac
/ab+c === it will work for abc as well as for abbbbbbc
/ab\*cd === it will work for abcd as well as ab<anything>cd it will work
/a(bc)?d === it means bc is optional while api calls
/user/:userid/:name/:password === we can get these params using req.params in the apis

# first connect to the database then listen to the server

# to read the request data we need a middle ware
