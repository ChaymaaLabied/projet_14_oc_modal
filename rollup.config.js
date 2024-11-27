import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "@rollup/plugin-babel";

const packageJson = require("./package.json");

const config = {
  input: "src/index.js", // Entry point of your library
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    peerDepsExternal(), // Automatically externalize peer dependencies
    resolve(), // Resolves node_modules imports
    babel({
      presets: ["@babel/preset-react"], // Transpile JSX
      extensions: [".js", ".jsx"], // Apply Babel to .js and .jsx files
      babelHelpers: "bundled",
    }),
    commonjs(), // Converts CommonJS to ES modules
    postcss(),
  ],
};

export default config;