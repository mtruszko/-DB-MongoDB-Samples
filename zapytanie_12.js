//map-reduce
var mapFunction = function() {
    var creditArray = this.credit
    for (var i = 0; i < creditArray.length; i++) {
        emit(creditArray[i].currency, parseFloat(creditArray[i].balance))
    }
};

var reduceFunction = function(key, value) {
    return Array.sum(value);
};
   
var results = db.people.mapReduce(
        mapFunction,
        reduceFunction,
        { out: "12.map_reduce_output" }
).find()
.toArray();
printjson(results)