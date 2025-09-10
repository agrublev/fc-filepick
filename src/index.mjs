import chalk from "chalk";
import fs from "fs";
import path from "path";
import prompt from "./prompt.mjs";

const clear = () => {
  console.clear();
};

function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

function format(filename, fullpath) {
  try {
    return fs.statSync(fullpath).isDirectory() ? `${filename}` : filename;
  } catch (ex) {
    return null;
  }
}

function mountChoices({ folder, type }) {
  return new Promise((resolve, reject) => {
    readDir(folder).then(dirs => {
      let data = [];
      if (type === "folder") {
        data.push({
          name: chalk.blue.bold(`${path.resolve(folder)}`),
          value: `--${path.resolve(folder)}`
        });
      }
      data.push({
        name: chalk.blue.bold(`Enter custom path`),
        value: `~~custom`
      });
      data.push({
        name: "..",
        value: path.resolve(`${folder}/..`)
      });
      for (let index in dirs) {
        let file = dirs[index];
        let fullpath = path.resolve(`${folder}/${file}`);
        let name = format(file, fullpath);
        if (type === "folder" && !fs.statSync(fullpath).isDirectory()) {
          continue;
        }
        data.push({
          name: name,
          value: fullpath,
          short: fullpath
        });
      }
      return resolve(data);
    });
  });
}

function getFile(config = {}) {
  clear();

  let {
    folder = ".",
    type = "folder",
    question = `Choose a ${config.type === "folder" ? "folder" : "file"}`
  } = config;
  return new Promise(resolve => {
    mountChoices({ folder, type })
      .then(async choices => {
        const dir = await prompt(
          {
            type: "autocomplete",
            choices: choices
          },
          question
        );
        if (type === "folder" && dir.startsWith("--")) {
          resolve(dir.replace("--", ""));
        } else if (type !== "folder" && !fs.statSync(dir).isDirectory()) {
          resolve(dir);
        } else if (dir.startsWith("~~custom")) {
          resolve(
            await prompt(
              {
                type: "input"
              },
              "Enter custom path"
            )
          );
        } else {
          resolve(getFile({ ...config, folder: dir }));
        }
      })
      .catch(e => {
        resolve(false);
      });
  });
}

export default getFile;
