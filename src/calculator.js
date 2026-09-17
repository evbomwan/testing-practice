export default function calculator(a, operator, b) {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "/") {
        return a / b;
    } else if (operator == "*") {
        return a * b;
    }
}