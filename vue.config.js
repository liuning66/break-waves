/**
 * webpack配置文件
 *
 * @autor ln
 * @date 2021/4/19
 */
const path = require("path");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
    devServer:{
        proxy:{
            "/a":{
                target:"xxx",

            }
        }
    },
    lintOnSave:false,
    chainWebpack: config => {
        config.plugin("provide").use(MomentLocalesPlugin, [{
            localesToKeep: ['es-us', 'ru'],
        }]);
        config.resolve.alias.set("@", path.resolve(__dirname, "src"))
          .set("@/util", path.resolve(__dirname, "src/utils"));
    }
};
