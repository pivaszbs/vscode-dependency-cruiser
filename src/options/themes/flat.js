const theme = {
    theme: {
        replace: false,
        graph: {
            splines: 'ortho',
        },
        modules: [
            {
                criteria: { source: '\\.json$' },
                attributes: {
                    shape: 'cylinder',
                    fillcolor: '#3498db:#2980b9',
                },
            },
            {
                criteria: { coreModule: true },
            },
        ],
        dependencies: [
            {
                criteria: { resolved: '\\.json$' },
                attributes: { arrowhead: 'obox' },
            },
        ],
    },
}

module.exports = {
    dot: theme,
    archi: theme,
    ddot: theme
}
