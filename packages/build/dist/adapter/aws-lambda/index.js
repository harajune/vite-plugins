import buildPlugin from "../../base.js";
const WORKER_JS_NAME = "worker.mjs";
const lambdaBuildPlugin = (pluginOptions) => {
  return {
    ...buildPlugin({
      ...{
        entryContentAfterHooks: [
          async (appName) => {
            let code = "import { handle } from 'hono/aws-lambda'\n";
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
    name: "@hono/vite-build/aws-lambda"
  };
};
var aws_lambda_default = lambdaBuildPlugin;
export {
  aws_lambda_default as default
};
