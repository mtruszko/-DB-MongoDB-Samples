use nbd
//aggregate
db.people.aggregate([
    { $group: { _id: "$sex", 
        weight: { $sum: "$weight" }, 
        height: { $sum: "$height" }}}
]);
        
//map-reduce
var mapFunction = function() {
    emit(this.sex, { weight: parseFloat(this.weight),
    				 height: parseFloat(this.height),
    				 count: 1 })
};

var reduceFunction = function(sex, weightAndHeight) {
    var reduced = { weight: 0, height: 0, count: 0 };
    for (var i = 0; i < weightAndHeight.length; i++) {
        reduced.weight += weightAndHeight[i].weight;
        reduced.height += weightAndHeight[i].height;
        reduced.count += weightAndHeight[i].count;
    }
    return reduced;
};

var finalizeFunction = function(key, reducedValue) {
    return { height: reducedValue.height/reducedValue.count,
             weight: reducedValue.weight/reducedValue.count }
}
        
db.people.mapReduce(
        mapFunction,
        reduceFunction,
        { out: "11.map_reduce_output",
          finalize: finalizeFunction }
).find();