const evalRPN = (tokens) => {
    const values = [];
    const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b)
    };

    for (const token of tokens) {
        if (token in operations) {
            const [b, a] = [values.pop(), values.pop()];
            const process = operations[token];
            values.push(process(a, b));
        } else {
            values.push(parseInt(token));
        }
    }

    return values.pop();
};
