export default function VueLogger(Vue, options = {}) {
  const defaultOptions = {
    disable: false,
    reportLevels: ["error"]
  };
  const mergeOptions = Object.assign(defaultOptions, options);

  const nativeConsole = Object.keys(console);

  const print = (level, args) => {
    if (!mergeOptions.disable && nativeConsole.indexOf(level) > -1)
      console[level](...args);
    if (
      mergeOptions.reportLevels.indexOf(level) > -1 &&
      mergeOptions.printCallback
    )
      mergeOptions.printCallback(level, args);
  };

  const logger = (...args) => {
    print("log", args);
  };

  logger.levels = [...nativeConsole, ...mergeOptions.customLevels];

  logger.levels.forEach(level => {
    logger[level] = (...args) => {
      print(level, args);
    };
  });

  Vue.prototype.$Logger = logger;
}
