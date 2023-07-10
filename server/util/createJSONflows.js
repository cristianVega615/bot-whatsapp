const { writeFile, mkdir } = require("node:fs");
const { access, constants, readFile } = require("node:fs/promises");
const path = require("path");


/**
 * 
 * @param {*} PATH -> La ruta hacia el fichero
 * 
 * @param {*} data -> Los datos que se tiene que guardar
 * 
 * ? Esta funcion sirve para el guardado de información.
 */
const writeFileJson = (PATH, data) => {
  writeFile(PATH, JSON.stringify(data), (err) => {
    if (err) {
      console.error("hay un error en el archivo", err);
      return;
    }
    console.log("archivo creado o actualizado");
  });
};

const createJSON = async (object_socket_flows) => {
  const { keyword, answer, user } = object_socket_flows;
  const PATH = path.join(
  __dirname + `\\..\\flows-json\\${user}.json`
  );
  let template;

  try {
    await access(PATH, constants.R_OK | constants.W_OK);

    const contents = await readFile(PATH, { encoding: "utf8" });

    if (contents) {
      let lengthFlows = Object.keys(JSON.parse(contents)).length;
      template = {
        ...JSON.parse(contents),
        [`flows-${lengthFlows + 1}`]: {
          keyword,
          answer,
        },
      };
      writeFileJson(PATH, template);
    }
  } catch (error) {
    template = {
      [`flows-${1}`]: {
        keyword,
        answer,
      },
    };

    mkdir(path.join(__dirname + "\\..\\flows-json"), {recursive: true}, (err) => { 
    })
    
    writeFileJson(PATH, template);
  }
};
module.exports = {
  createJSON,
};
