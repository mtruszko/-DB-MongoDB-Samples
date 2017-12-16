var results = db
.people
.updateMany(
{"job" : "Editor"},
{$unset: {"email": 1}}
)
printjson(results)