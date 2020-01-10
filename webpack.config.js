
/**
 * webpack.config.js
 * entry config, merges all others
 * @param env
 * @returns {Array}
 */

const app = async env => {

  	env = getDefaultEnvState(env);

    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

    const path = require('path');
    const merge = require('webpack-merge');

    const name = require("./package.json").short_name;
    const entry = {};
    entry[name] = path.resolve(__dirname, 'src/index.js');
    entry['css'] = path.resolve(__dirname, 'src/main.scss');
    const builds = [];

    // override env for parallel-webpack implementation
    process.argv.forEach(e=>{
        const x = e.split('=')[0].replace('--','').replace('env.','');
        const y = e.split('=')[1];
        e.indexOf("=")>0?env[x] = y:null;
    });

    // merge configuration scripts together based on flags
    const config = {
        mode:env.production?'production':'development',
        entry:entry,
        externals: {
            "redux": "redux"
        },
        resolve: {
            alias: {
                svelte: path.resolve('node_modules', 'svelte')
            },
            extensions: ['.mjs', '.js', '.svelte', ".svelte.scss", ".scss", ".css"],
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        module: {
            rules: [
                {
                    test: /\.svelte$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            hotReload: true
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: [
                                        './src/theme',
                                        './node_modules'
                                    ]
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].[id].css'
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]
                },
                canPrint: true
            })
        ],
        output:{
            library : name,
            chunkFilename : `[name].js`,
            filename : `[name].js`
        }
    };

    // standard build
    (!env.legacy || (env.legacy && env.production))?
        builds.push(merge(
            require('./node_modules/ecmascript-toolkit/config/webpack.settings.js'),
            require('./node_modules/ecmascript-toolkit/config/webpack.server.js'),
            env.analyze?require('./node_modules/ecmascript-toolkit/config/webpack.analyze.js')(env)[0]:require('./node_modules/ecmascript-toolkit/config/webpack.master.js')(env),
            require('./node_modules/ecmascript-toolkit/config/webpack.plugins.js')(env),
            env.production?require('./node_modules/ecmascript-toolkit/config/webpack.prod.js')(env)[0]:{},
            config
        )):null;
    /*
        // legacy build
        env.legacy?
            builds.push(merge(
                require('./config/webpack.settings.js'),
                require('./config/webpack.server.js'),
                env.analyze?require('./config/webpack.analyze.js')(env)[0]:require('./config/webpack.master.js')(env),
                require('./config/webpack.plugins.js')(env),
                env.production?require('./config/webpack.prod.js')(env)[0]:{},
                config,
                env.legacy?require('./config/webpack.legacy.js')(env)[0]:{}
            )):null;
    */
    return builds;
};

/**/

function getDefaultEnvState(env) {

    return env?env:{
        legacy: false,
        production: false
    };

};

/**/

module.exports = app;
