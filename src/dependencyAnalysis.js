const { futureCruise } = require('dependency-cruiser')
const { Module, render } = require('viz.js/full.render.js')
const Viz = require('viz.js/viz.js')
const LayoutMap = require('./options/LayoutMap')
const OutputTypeMap = require('./options/OutputTypeMap')
const { getTheme } = require('./options/ThemeMap')
const { getMetrics } = require('./options/getMetrics')
const tsconfigExtractor = require('dependency-cruiser/config-utl/extract-ts-config')

const wrapStreamInHtml = require('./tools/wrap-stream-in-html')
const merge = require('deepmerge');

module.exports = async (path, options) => {
    const tsConfig = options.config ? tsconfigExtractor(options.tsConfig) : {};

    const analysis = await futureCruise([path], {
        exclude: options.exclude,
        outputType: OutputTypeMap[options.outputType],
        maxDepth: options.maxDepth,
        prefix: options.prefix,
        moduleSystems: options.moduleSystems,
        reporterOptions: merge(getTheme(options), getMetrics(options)),
        tsPreCompilationDeps: true,
        metrics: options.metrics,
        combinedDependencies: options.combinedDependencies,
    }, {}, {
        tsConfig,
        webpackConfig: options.webpackConfig,
    })

    return wrapStreamInHtml(await new Viz({ Module, render }).renderString(analysis.output, {
        engine: LayoutMap[options.layout],
    }))
}
