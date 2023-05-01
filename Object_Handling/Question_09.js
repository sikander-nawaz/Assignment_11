// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// SOLUTION


// calculate the area of the circle
function area(radius) {
  const pi = Math.PI;
  const area = pi * radius ** 2;
  return area;
}

// calculate the perimeter (circumference) of the circle
function perimeter(radius) {
  const pi = Math.PI;
  const perimeter = 2 * pi * radius;
  return perimeter;
}

console.log(`Area of Circle is "${area(10)}"`);
console.log(`Perimeter of Circle is "${perimeter(10)}"`);