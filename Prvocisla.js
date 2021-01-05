let dividers = 0;
for (let i = 1; i < 100; i++) {
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            dividers++;
        }
    }
    if (dividers <= 2) {
        console.log(i);
    }
    dividers = 0;
}