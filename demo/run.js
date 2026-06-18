import getFile from "../dist/index.js";

(async () => {
  let ff = await getFile();
  //  let ff = await getFile({ type: "file" });
  console.info("Cons", ff);
})();
