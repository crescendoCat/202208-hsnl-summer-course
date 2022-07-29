{
        let inBlockLet = 2;
        var inBlockVar = 2;
        console.log("`let` variable in block: ", inBlockLet);
        console.log("`var` variable in block: ", inBlockVar);
}
try {
        console.log("`let` out of block", inBlockLet);
} catch(err) {
        console.error(err);
}
console.log("`var` out of block: ", inBlockVar);
