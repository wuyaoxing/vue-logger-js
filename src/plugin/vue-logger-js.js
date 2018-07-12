export default function VueLogger(Vue, options = {}) {
    const defaultOptions = {
        disable: false,
        reportLevels: ['error']
    }
    options = Object.assign(options, defaultOptions)

    const logger = (...args) => {
        print('log', args)
    }

    logger.levels = Object.keys(console)

    for (const level of logger.levels) {
        logger[level] = (...args) => {
            print(level, args)
        }
    }

    const print = (level, args) => {
        !options.disable && console[level](...args)
        if(options.reportLevels.indexOf(level) > -1 && options.printCallback) options.printCallback(level, args)
    }

    Vue.prototype.$logger = logger
}
