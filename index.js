const config = require("./config")
function base(baseFormat) {
    const date = new Date()
    if(!baseFormat) return `${config.White}[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}]${config.Reset}`
    let complete = baseFormat.toUpperCase().replace("MM", date.getMonth().toString())
        .replace("YY", date.getFullYear().toString())
        .replace("DD", `${date.getDate() + 1}`)
        .replace("HH", date.getHours().toString())
        .replace("MI", date.getMinutes().toString())
        .replace("SS", date.getSeconds().toString())
        .replace("MS", date.getMilliseconds().toString())
    return `${config.White}[${complete}]${config.Reset}`
}
const defaultConfig = {
    dateFormat: "YY-MM-DD",
    colors: {
        error: config.Red,
        info: config.Blue,
        success: config.Green,
        debug: config.Magenta,
        warn: config.Yellow
    },
    symbols : {
        left: "[",
        right: "]"
    },
    textColors: {
        all: false,
        error: config.Red,
        info: config.Blue,
        success: config.Green,
        debug: config.Magenta,
        warn: config.Yellow
    }
}
 module.exports = class {
    constructor (options = defaultConfig) {
        if(options.dateFormat) this.format = options.dateFormat
        else this.format = false
        if(options.colors) this.colors = options.colors
        else this.colors = defaultConfig.colors
        if(options.symbols) this.symbols = options.symbols
        else this.symbols = defaultConfig.symbols
        if(options.textColors) this.textColors = options.textColors
        else this.textColors = defaultConfig.textColors
    }
    /**
     * @param {string} message The message you want to display
     */
    error(message) {
        if(!this.colors.error) throw new Error("Error color is not found")
        if(!this.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right) throw new Error("Right symbol not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.error} ${this.symbols.left}Error${this.symbols.right}${config.Reset} — ${this.textColors.all ? this.textColors.all : this.textColors.error}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    info(message) {
        if(!this.colors.info) throw new Error("Info color is not found")
        if(!this.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right) throw new Error("Right symbol not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.info} ${this.symbols.left}Info${this.symbols.right}${config.Reset} — ${this.textColors.all ? this.textColors.all : this.textColors.info}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    success(message) {
        if(!this.colors.success) throw new Error("Success color is not found")
        if(!this.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right) throw new Error("Right symbol not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.success} ${this.symbols.left}Success${this.symbols.right}${config.Reset} — ${this.textColors.all ? this.textColors.all : this.textColors.success}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    debug(message) {
        if(!this.colors.debug) throw new Error("Debug color is not found")
        if(!this.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right) throw new Error("Right symbol not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.debug} ${this.symbols.left}Debug${this.symbols.right}${config.Reset} — ${this.textColors.all ? this.textColors.all : this.textColors.debug}${message}${config.Reset}`)
    }
    /**
     * @param {string} message The message you want to display
     */
    warn(message) {
        if(!this.colors.warn) throw new Error("Warn color is not found")
        if(!this.symbols.left) throw new Error("Left symbol not found")
        if(!this.symbols.right) throw new Error("Right symbol not found")
        console.log(base(this.format) + `${config.Bold}${this.colors.warn} ${this.symbols.left}Warn${this.symbols.right} ${config.Reset}— ${this.textColors.all ? this.textColors.all : this.textColors.warn}${message}${config.Reset}`)
    }
}