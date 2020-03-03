const getFile = require("./src/index");

(async () => {
  process.stdout.write("\033[2J");
  process.stdout.write("\033[0f");
  let ff = await getFile();
  //  let ff = await getFile({ type: "file" });
  console.info("Console --- ", ff);
})();
