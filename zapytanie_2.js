var results = db.getCollection('people').findOne({"sex": "Female", "nationality": "China"})
printjson(results)