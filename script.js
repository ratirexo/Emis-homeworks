// Homework

const age = prompt("What`s your age?");

if (age < 18) {
  console.log("You are minor");
} else if (age >= 18 && age <= 64) {
  console.log("You are an adult");
} else if (age > 65) {
  console.log("You are senior");
}

// 2)

const favouriteFilms = ["Inception"];

favouriteFilms.push("Interstellar");
favouriteFilms.push("The Hateful Eight");

favouriteFilms.unshift("Django Unchained");
favouriteFilms.unshift("Hangover");

favouriteFilms.pop();
favouriteFilms.shift();

// 3)

const student = {
  name: "Rati",
  age: 22,
  grade: "B",
};

student.grade = "A";
console.log(student);

// 4)

const car = {
  brand: "BMW",
  model: "M340i",
  year: 2022,
};

console.log(`This is ${car.year} ${car.model} ${car.brand} car`);

car.isSportCar = true;
