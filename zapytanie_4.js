var results = db.getCollection('people').find({"weight": {$gte: "68", $lt: "71.5"}})
.toArray()
printjson(results)