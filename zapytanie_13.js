//aggregation
db.people.distinct("job");

//map-reduce
var mapFunction = function() {
    emit(0, { jobs: [this.job]})
};

var reduceFunction = function(key, value) {
    var val = []
    for (var i = 0; i < value.length; i++) {
        val = val.concat(value[i].jobs)
    }
    return { jobs: val};
};

var finalizeFunction = function(key, value) {
    let unique = [...new Set(value.jobs)]; 
    return { jobs: unique}
}
        
db.people.mapReduce(
        mapFunction,
        reduceFunction,
        { out: "13.map_reduce_output",
          finalize: finalizeFunction 
         }
).find();