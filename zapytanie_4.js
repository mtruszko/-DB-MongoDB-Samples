use nbd;
db.getCollection('people').find({"weight": {$gte: "68", $lt: "71.5"}})