function fibonacci(n) {
// your code here
let a = 0, b = 1, c, i;
    if (n == 1)
        return a;
    for (i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
	}
	    return b;
	
}

module.exports = fibonacci;
