use nbd;
db
.people
.updateMany(
{"first_name" : "Antonio"},
{$set: {"hobby" : "ping-pong"}}
)