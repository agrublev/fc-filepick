// import getFile from "./src/index.js";
// import getFile from "./dist/es6/index.js";
const getFile = require("./dist/index.js").default;

(async () => {
    console.log("getF", getFile);
    let ff = await getFile({ folder: "/Volumes", type: "folder" });
    //  let ff = await getFile({ type: "file" });
    console.info("CHOSEN FOLDER", ff);
})();
