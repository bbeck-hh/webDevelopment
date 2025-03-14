import { add, divide, multiply, subtract } from "./index";

test("add() returns the sum of two numbers.", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});
test("subtract() returns the difference of two numbers.", () => {
    const result = subtract(3, 2);
    expect(result).toBe(1);
});
test("multiply() returns the product of two numbers.", () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
});
test("divide() returns the quotient of two numbers.", () => {
    const result = divide(6, 3);
    expect(result).toBe(2);
});