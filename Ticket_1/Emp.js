
let employees=["John","Sarah","Eric"];

employees.push("Joe");
console.log(employees);


console.log(employees.pop(3));
console.log(employees);

//add a new employee to the beginning of the array
employees.unshift("Bob");;
console.log(employees);

//remove the first employee from the array
console.log(employees.shift("Bob"));
console.log(employees);

// find the index of the employee "Sarah"
console.log(employees.indexOf("Sarah"));
