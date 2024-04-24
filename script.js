// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL to retrieve data from
var url = 'https://restcountries.com/v3.1/all';

// Configure the request
xhr.open('GET', url, true);

// Set up a function to handle the response when the request is complete
xhr.onload = function () {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
        // Parse the response JSON data
        var responseData = JSON.parse(xhr.responseText);
        console.log(responseData)
        for(var i=0;i<responseData.length;i++){
            console.log(responseData[i].flags.png)
        }
     
    } else {
        // If the request was not successful, handle the error
        console.error('Request failed with status:', xhr.status);
    }
};

// Send the request
xhr.send();
//3;country name,region,subregion,population;
var xhr = new XMLHttpRequest();

// Define the URL to retrieve data from
var url = 'https://restcountries.com/v3.1/all';

// Configure the request
xhr.open('GET', url, true);

// Set up a function to handle the response when the request is complete
xhr.onload = function () {
    // Check if the request was successful (status code 200)
    if (xhr.status === 200) {
        // Parse the response JSON data
        var responseData = JSON.parse(xhr.responseText);
        for (var i = 0; i < responseData.length; i++) {
            var country = responseData[i];
            console.log("Country:", country.name.common);
            console.log("Region:", country.region);
            console.log("Subregion:", country.subregion);
            console.log("Population:", country.population);
            console.log("----------------------");
        }
    } else {
        // If the request was not successful, handle the error
        console.error('Request failed with status:', xhr.status);
    }
};

// Send the request
xhr.send();

