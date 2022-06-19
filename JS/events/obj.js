var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = () => {
    console.log(`The course count is ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your First Name is: ${this.firstName}`);
};
var aditya = new User("Aditya", 2);
// console.log(aditya);
// console.log(aditya.getCourseCount());
// console.log(aditya.getFirstName());
aditya.getCourseCount();
aditya.getFirstName();

var balaji = new User("Balaji", 1);
// console.log(balaji);
