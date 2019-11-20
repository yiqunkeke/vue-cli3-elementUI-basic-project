const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // Vue Cli内部 webpack配置
  chainWebpack(config) {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("components", resolve("src/components"))
      .set("styles", resolve("src/assets/styles"))
      .set("js", resolve("src/assets/js"))
      .set("images", resolve("src/assets/images"));
  }
};
