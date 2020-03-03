// const getFile = require("./src/index");
const getFile = require("./dist");

(async () => {
  let ff = await getFile();
  //  let ff = await getFile({ type: "file" });
  console.info("Cons", ff);
})();
