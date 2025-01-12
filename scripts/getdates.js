var currentYear = new Date().getFullYear();
// using year identifier 
document.getElementById("year").innerHTML = currentYear;

// using lastModified idetifier
var lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = 'Last Modification: '+lastModified;