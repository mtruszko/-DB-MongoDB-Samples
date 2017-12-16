var results = db
.people
.insertOne(
{
    "sex" : "Male",
    "first_name" : "Marek",
    "last_name" : "Truszkowski",
    "job" : "Programmer",
    "email" : "s16391@pjwstk.edu.pl",
    "location" : {
        "city" : "Warsaw",
        "address" : {
            "streetname" : "ABC",
            "streetnumber" : "1223"
        }
    },
    "description" : "some desc",
    "height" : "190.68",
    "weight" : "88.37",
    "birth_date" : "1991-18-06T09:10:58Z",
    "nationality" : "Poland",
    "credit" : [ 
        {
            "type" : "visa",
            "number" : "1234957170327",
            "currency" : "PLN",
            "balance" : "1000000.00"
        }
    ]
}
)
printjson(results)