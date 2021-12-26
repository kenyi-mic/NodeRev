const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n How wonderful its to have this kind of wonderful promises"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newdata);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fsPromises.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   }
// );
