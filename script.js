function calculateAge (birthYear) {
    return 2019 - birthYear
}

var ageBacchus = calculateAge(1977);
var ageCristobal = calculateAge(2016);
var ageDaniel = calculateAge(1982);
var ageJulia = calculateAge(1922);


console.log(ageBacchus, ageCristobal, ageDaniel, ageJulia);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.')
}

yearsUntilRetirement(1977, 'Bacchus');