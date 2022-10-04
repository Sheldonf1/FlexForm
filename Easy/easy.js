function exercise(x) {
    return function () {
        return `Today's exercise: ${x}`
    };
};
var run = exercise("running");
var swim = exercise("Swimming");
console.log(run());
console.log(swim());


