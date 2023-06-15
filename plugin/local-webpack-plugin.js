const { writeFileSync } = require("fs");
const { name: appName } = require("../package.json");
const { clientEntryTemplate } = require("./client-entry-template");

module.exports = async function localWebpackPlugin(context, options) {
  return {
    name: "local-webpack-plugin",
    configureWebpack(config, isServer, utils, content) {
      if (typeof config.entry === "string") {
        console.log("local-webpack-plugin->entry:", config.entry);
        writeFileSync(config.entry, clientEntryTemplate);
      }

      return {
        output: {
          ...config.output,
          library: `${appName}-[name]`,
          libraryTarget: "umd",
        },
      };
    },
  };
};
