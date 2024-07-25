// ex 1

function calculate(func, value) {
    return func(value);
}

function square(num) {
    console.log(num * num);
}

calculate(square, 5);