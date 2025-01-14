const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

const foodie = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food) {
  console.log(food);
});

function notifyPerson() {
  console.log("notify that it was called!");
}

function mySecondFunction(notifyPersonCallback) {
  console.log("completing tasks");
  console.log("task complete");
  notifyPersonCallback();
}

function myFirstFunction(onCompleteCallback) {
  console.log("it's done");
  onCompleteCallback();
}

myFirstFunction(function () {
  console.log("it has been called again.");
});
