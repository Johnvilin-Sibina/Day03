//2. Use rest countries' API URL -> https://restcountries.com/v3.1/all and print all the country flags in the console.
//Solution:
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var res = JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
        console.log(res[i].flags.png);
    }
}

//3. Use the same rest countries and print all the countries names, regions, sub-region and populations.
//Solution:
var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var result =JSON.parse(req.response);
    for(var i=0;i<result.length;i++){
        if(result[i].subregion){
        console.log("Official Name: "+result[i].name.official+",", 
        "Region: "+result[i].region+",",
        "Sub-region: "+result[i].subregion+",", 
        "Pupulation: "+result[i].population)
    }
    else{
        console.log("Official Name: "+result[i].name.official+",", 
        "Region: "+result[i].region+",",
        "Sub-region: No Sub-Region"+",", 
        "Pupulation: "+result[i].population)
    } 
}   
}