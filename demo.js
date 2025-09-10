const getFile = require("./src/index");
const chalk = require("chalk");

async function runDemo() {
  console.log(chalk.bold.yellow("--- FC-FILEPICK DEMO ---"));

  console.log("\n1. Select a folder.");
  const folder = await getFile({
    question: "Please select a folder"
  });

  if (folder) {
    console.log(chalk.green(`\nYou selected folder: ${folder}`));

    console.log("\n2. Now, select a file from within that folder.");
    const file = await getFile({
      question: "Please select a file",
      type: "file",
      folder: folder
    });

    if (file) {
      console.log(chalk.green(`\nYou selected file: ${file}`));
    } else {
      console.log(chalk.red("\nNo file selected."));
    }
  } else {
    console.log(chalk.red("\nNo folder selected."));
  }

  console.log(chalk.bold.yellow("\n--- DEMO COMPLETE ---"));
}

runDemo();
