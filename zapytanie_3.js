var results = db.getCollection('people').find({"sex": "Male", "nationality": "Germany"})
.toArray()
printjson(results)