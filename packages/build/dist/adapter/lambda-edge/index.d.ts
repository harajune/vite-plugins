import { Plugin } from 'vite';
import { BuildOptions } from '../../base.js';
import '../../entry/index.js';

type LambdaEdgeBuildOptions = {
    staticRoot?: string | undefined;
} & BuildOptions;
declare const lambdaEdgeBuildPlugin: (pluginOptions?: LambdaEdgeBuildOptions) => Plugin;

export { LambdaEdgeBuildOptions, lambdaEdgeBuildPlugin as default };
