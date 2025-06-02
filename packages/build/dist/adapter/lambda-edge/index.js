import buildPlugin from "../../base.js";
const WORKER_JS_NAME = "worker.mjs";
const lambdaEdgeBuildPlugin = (pluginOptions) => {
  return {
    ...buildPlugin({
      ...{
        entryContentAfterHooks: [
          async (appName) => {
            let code = "import { handle } from 'hono/lambda-edge'\n";
            code += `export const handler = handle(${appName})`;
            return code;
          }
        ],
        // stop copying public dir to dist
        copyPublicDir: false
      },
      ...pluginOptions,
      output: WORKER_JS_NAME
    }),
    name: "@hono/vite-build/lambda-edge"
  };
};
var lambda_edge_default = lambdaEdgeBuildPlugin;
export {
  lambda_edge_default as default
};
