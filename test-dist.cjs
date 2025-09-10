const getFile = require("./dist/index.cjs");
const chalk = require("chalk");

console.log(chalk.bold.green("Distribution test script (CJS)"));

// The default export from an ESM module, when imported in CJS, is on the `default` property.
const getFileFunc = getFile.default;

if (typeof getFileFunc === "function") {
    console.log(chalk.blue("The 'getFile' function was imported successfully from the dist file."));
    console.log(chalk.green("Test passed!"));
} else {
    console.error(chalk.red("The 'getFile' function could not be imported."));
    console.error(chalk.red("Test failed!"));
    process.exit(1);
}
