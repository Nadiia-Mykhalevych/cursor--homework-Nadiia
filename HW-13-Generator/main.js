function* createIdGenerator() {
    let num = 1;
    yield num;
    while (true) {
        yield ++num;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(size) {
    let value = size;
    while(true) {
        const changer = yield value;
        if (changer === "up") {
            value = value + 2
        } else if (changer === "down") {
            value = value - 2
        }
    }
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);