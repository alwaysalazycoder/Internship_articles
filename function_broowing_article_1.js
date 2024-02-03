var person1 = {
	firstName: "Gaurav",
	lastName: "Sharma",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

// Object 2
var person2 = {
	firstName: "Aditya",
	lastName: "Brila",
};

// Borrowing the fullName function from person1 and applying it to person2 using call
var fullNamePerson2_call = person1.fullName.call(person2);

console.log(fullNamePerson2_call); // Output: Jane Doe

var fullNamePerson2_apply = person1.fullName.apply(person2);
console.log(fullNamePerson2_apply);

var fullNamePerson2_bind = person1.fullName.bind(person2);
console.log(fullNamePerson2_bind);
