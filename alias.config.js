/**
 * 别名配置，为了webstorm能够识别而配置
 *
 * @autor ln
 * @date 2021/4/20
 */
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
      "@/utils": resolve("src/utils")
    }
  }
}
