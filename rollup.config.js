import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import rust from "@wasm-tool/rollup-plugin-rust";
import { terser } from "rollup-plugin-terser";

const plugins = [
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
    presets: ["solid"]
  }),
  resolve({ extensions: [".js", ".jsx"] }),
  rust({ inlineWasm: true })
];

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es"
    },
    {
      file: "public/bundle.js",
      format: "iife",
      name: "AsciinemaPlayer"
    },
    {
      file: "public/bundle.min.js",
      format: "iife",
      name: "AsciinemaPlayer",
      plugins: [terser()]
    }
  ],
  plugins
};
