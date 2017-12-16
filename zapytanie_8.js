var results = db
.people
.updateMany(
{"location.city" : "Moscow"},
{$set: {"location.city" : "Moskwa"}}
)
printjson(results)