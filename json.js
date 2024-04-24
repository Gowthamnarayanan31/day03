function compareJSON(obj1, obj2) {
    // Convert JSON objects to strings
    let string1 = JSON.stringify(obj1);
    let string2 = JSON.stringify(obj2);

    // Sort the properties of the JSON strings
    string1 = sortJSONString(string1);
    string2 = sortJSONString(string2);

    // Compare the sorted strings
    return string1 === string2;
}

// Helper function to sort the properties of a JSON string
function sortJSONString(jsonString) {
    return JSON.stringify(JSON.parse(jsonString), Object.keys(jsonString).sort());
}

// Example objects
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

// Compare the JSON objects
console.log(compareJSON(obj1, obj2)); 
