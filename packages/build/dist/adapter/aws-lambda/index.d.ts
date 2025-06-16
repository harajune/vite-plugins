import { Plugin } from 'vite';
import { BuildOptions } from '../../base.js';
import '../../entry/index.js';

type LambdaBuildOptions = {
    staticRoot?: string | undefined;
} & BuildOptions;
declare const lambdaBuildPlugin: (pluginOptions?: LambdaBuildOptions) => Plugin;

export { LambdaBuildOptions, lambdaBuildPlugin as default };
