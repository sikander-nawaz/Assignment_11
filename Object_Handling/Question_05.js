// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// SOLUTION

class volumeOfCylinder {
    constructor(r, h){
        this.radius = r;
        this.height = h;
    }

    showVolume(){
        let vol = Math.PI * Math.pow(this.radius, 2) * this.height;
        console.log(vol);
    }
};

let volume = new volumeOfCylinder(5, 6);
volume.showVolume();