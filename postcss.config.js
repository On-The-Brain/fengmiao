const path = require("path");
const comment = require("postcss-comment");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
  parser: comment,
  plugins: [
    postcssImport({
      resolve(id, basedir, importOptions) {
        // 处理以 ~@/ 开头的路径，转换为项目绝对路径
        if (id.startsWith("~@/")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(3));
        }
        // 处理以 @/ 开头的路径
        if (id.startsWith("@/")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(2));
        }
        // 处理以 / 开头的绝对路径
        if (id.startsWith("/") && !id.startsWith("//")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(1));
        }
        // 对其他路径保持原样
        return id;
      },
    }),
    autoprefixer({
      remove: true,  // 按需保留或移除 Autoprefixer 添加的前缀
    }),
  ],
};