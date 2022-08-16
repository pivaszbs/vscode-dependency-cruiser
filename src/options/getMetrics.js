module.exports = {
    getMetrics(options) {
        console.log(options.metricsType)
        const metrics = {
            showMetrics: options.metrics,
            orderBy: options.metricsType
        }
        return {
            dot: metrics,
            archi: metrics,
            ddot: metrics,
            metrics: {
                orderBy: options.metricsType,
            }
        }
    }
}
