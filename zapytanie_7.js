var results = db
.people
.deleteMany(
{"height" : {$gt: "190.00"}}
)
printjson(results)