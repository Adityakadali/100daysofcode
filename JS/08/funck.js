var type = function (name, type) {
  switch (type) {
    case "admin":
      return `${name} is an admin he got all perms`;
    default:
      return `${name} is a general user`;
      break;
  }
};

console.log(type("Aditya", "admin"));
