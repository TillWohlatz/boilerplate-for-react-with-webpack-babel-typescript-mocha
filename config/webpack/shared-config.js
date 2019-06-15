// shared config (dev and prod)
const { resolve } = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FixDefaultImportPlugin = require('webpack-fix-default-import-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(process.cwd(), 'src'),
    output: {
        filename: 'js/index.bundle.js',
        path: resolve(process.cwd(), 'build'),
        publicPath: "/assets/",
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({ template: resolve(process.cwd(), 'public', 'index.html.ejs') }),
        new FixDefaultImportPlugin(),
        new CopyWebpackPlugin(),
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
                exclude: resolve(process.cwd(), '/public/fonts'),
                use: [{
                    loader: 'file-loader',
                    options: {

                        name(file) {
                            if (process.env.NODE_ENV === 'development') {
                                return 'img/[name].[ext]';
                            }

                            return 'img/[hash].[ext]';
                        },
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                        optipng: {
                            enabled: true,
                            optimizationLevel: 7,
                        },
                        gifsicle: {
                            interlaced: false,
                        }
                    },
                },
                ]


            },
        ],
    },
};