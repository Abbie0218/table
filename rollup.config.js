// rollup.js

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

export default {
  input: "src/index.tsx", // Entry point of your application
  output: [{
    file: "dist/bundle.js", // Output bundle
    format: "cjs",
    sourcemap: true, // CommonJS module format
  },
  {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
  },
],
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript() // Compile TypeScript files
  ]
};
