var results = db
.people
.updateMany(
{"first_name" : "Antonio"},
{$set: {"hobby" : "ping-pong"}}
)
printjson(results)