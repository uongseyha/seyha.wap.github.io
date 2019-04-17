const count=(function () {
    let sum=0;
    const changeVal=function(x){
        sum+=x;
    };

    const increase=function () {
        changeVal(1);
    };

    const decrease=function () {
        changeVal(-1);
    };

    const value=function () {
        return sum;
    }

    return{
        increase:increase,
        decrease:decrease,
        value:value
    }
})();

console.log(count.value());
count.increase();
count.increase();
console.log(count.value());
count.decrease();
console.log(count.value());

function f1(x) {
    return function f2(y) {
        return function f3(z) {
            return x + y + z;
        }
    }
}
const x=f1(1)(2)(3);
console.log(x);
