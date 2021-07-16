const vuePlugin = require("esbuild-vue");

require("esbuild").build({
  entryPoints: ["src/main.js"],
  bundle: true,
  minify: true,
  outfile: "dist/main.js",
  logLevel: "info",
  plugins: [vuePlugin()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("development"),
  },
});
