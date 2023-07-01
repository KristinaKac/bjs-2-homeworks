function parseCount(count) {
    if (Number.isNaN(Number.parseFloat(count))) {
        throw new Error("Невалидное значение");
    } count = Number.parseFloat(count); console.log(typeof count); return count;
}
function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}
class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let halfPerimetr = this.perimeter / 2;
        let area = Number((Math.sqrt(halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c))).toFixed(3));
        return area;
    }
}

const errorMessage = 'Ошибка! Треугольник не существует';

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return errorMessage;
            },
            get area() {
                return errorMessage;
            }
        }
    }
}