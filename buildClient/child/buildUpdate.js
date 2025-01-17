/*
* Tip:    打包自动更新
*/
const chalk = require('chalk');
const webpack = require('webpack');
const updateRenderConfig = require('../webpack.update.config.js');
function updateBuilder() {
    return new Promise((resolve, reject) => {
        console.log('打包自动更新渲染进程......');
        const compiler = webpack(updateRenderConfig);
        compiler.run((err, stats) => {
            if (err) {
                console.log('打包自动更新渲染进程遇到Error！');
                reject(err);
            } else {
                let log = '';
                stats.compilation.errors.forEach(key => {
                    log += chalk.red(`${key}:${stats.compilation.errors[key]}`) + '\n';
                });
                stats.compilation.warnings.forEach(key => {
                    log += chalk.yellow(key) + '\n';
                });
                Object.keys(stats.compilation.assets).forEach(key => {
                    log += chalk.blue(key) + '\n';
                });
                log += chalk.green(`time：${(stats.endTime - stats.startTime) / 1000} s\n`) + '\n';
                console.log('打包自动更新渲染进程完毕！');
                resolve(log);
            }
        });
    });
}
module.exports = {
    updateBuilder
}