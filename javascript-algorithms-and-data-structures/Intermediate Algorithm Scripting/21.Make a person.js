const Person = function (firstAndLast) {
  let firstName = "";
  let lastName = "";

  function updateNames() {
    const [first, last] = firstAndLast.split(" ");
    firstName = first;
    lastName = last;
  }

  updateNames();

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  this.setFirstName = function (first) {
    firstName = first;
  };

  this.setLastName = function (last) {
    lastName = last;
  };

  this.setFullName = function (firstAndLast) {
    firstAndLast = firstAndLast.trim();
    firstAndLast = firstAndLast.split(" ");
    if (firstAndLast.length === 2) {
      firstName = firstAndLast[0];
      lastName = firstAndLast[1];
    }
  };

  return firstAndLast;
};

const bob = new Person("Bob Ross");
bob.getFullName();
