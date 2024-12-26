const findTheOldest = function(objArray) {
// Add yearOfDeath value if not available
let now = new Date();
objArray = objArray.map((obj) => {
    if(!("yearOfDeath" in obj)) {
        obj.yearOfDeath = now.getFullYear();
    }
    return obj;
});
// Sort the people living age
objArray.sort((a,b) => (b.yearOfDeath-b.yearOfBirth) - (a.yearOfDeath-a.yearOfBirth));
// Take the oldest
return objArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
