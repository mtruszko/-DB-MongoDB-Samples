//map-reduce
var mapFunction = function() {
    var weight = parseFloat(this.weight)
    var height = parseFloat(this.height)/100
    var bmi = weight/(height*height)
    if (bmi > 0 && bmi !== Infinity && bmi !== NaN) {
        emit(this.nationality, { bmiValues: [bmi]})
    }
};

var reduceFunction = function(key, value) {
    var val = []
    for (var i = 0; i < value.length; i++) {
        val = val.concat(value[i].bmiValues)
       
    }
    return { bmiValues: val};
};

var finalizeFunction = function(key, value) {
    var sum = value.bmiValues.reduce(function(a, b) { return a + b; });
    var avg = sum / value.bmiValues.length;
    return { avgBMI: avg,
             minBMI: Math.min.apply(Math, value.bmiValues),
             mavBMI: Math.max.apply(Math, value.bmiValues)}
}
        
db.people.mapReduce(
        mapFunction,
        reduceFunction,
        { out: "14.map_reduce_output",
           finalize: finalizeFunction }
).find();