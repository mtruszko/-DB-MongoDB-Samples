//map-reduce
var mapFunction = function() {
    for (var i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, { balances: [parseFloat(this.credit[i].balance)]}) 
    }
};

var reduceFunction = function(key, value) {
    var val = []
    for (var i = 0; i < value.length; i++) {
        val = val.concat(value[i].balances)
    }
    return { balances: val};
};

var finalizeFunction = function(key, value) {
    var sum = value.balances.reduce(function(a, b) { return a + b; });
    var avg = sum / value.balances.length;
    return { avgBalances: avg,
             sumBalances: sum}
}
        
var results = db.people.mapReduce(
        mapFunction,
        reduceFunction,
        { out: "15.map_reduce_output",
           query: { nationality: "Poland",
                    sex: "Female" },
           finalize: finalizeFunction }
).find()
.toArray();
printjson(results)