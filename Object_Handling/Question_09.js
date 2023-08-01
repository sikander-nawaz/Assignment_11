// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// SOLUTION


// calculate the area of the circle             Area = πr^2;
function areaOfCircle(r) {
    area = Math.PI * Math.pow(r, 2);
    console.log(`Area of the circle is: ${area}`);
};

areaOfCircle(5);


// calculate the perimeter (circumference) of the circle               circumference = 2πr;      
function circumferenceOfCircle(r) {
    let circumference = 2 * Math.PI * r;
    console.log(`Circumference of the circle is: ${circumference}`);
};

circumferenceOfCircle(5);