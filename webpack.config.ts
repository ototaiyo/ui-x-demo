import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import {Configuration as WebpackConfiguration} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const devPlugins: Configuration['plugins'] = [
    new Dotenv(),
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
];

const webpackConfig = (env: any, argv: any): Configuration => {
    const isDevMode = argv?.mode !== 'production';

    console.log('isDevMode?', isDevMode);

    return {
        entry: './src/index.tsx',
        mode: (argv.mode as 'production' | 'development' | undefined) ?? 'development',
        ...(isDevMode
            ? {devtool: 'eval-source-map'}
            : {
                  performance: {
                      hints: false,
                      maxEntrypointSize: 500 * 1024,
                      maxAssetSize: 500 * 1024,
                  },
              }),
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
        },
        output: {
            path: path.join(__dirname, '/build'),
            filename: 'build.[hash:8].js',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                    },
                    exclude: /build/,
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [
                        isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
        devServer: {
            port: 3000,
            open: true,
            historyApiFallback: true,
        },
        plugins: isDevMode
            ? devPlugins
            : [...devPlugins, new MiniCssExtractPlugin({filename: 'styles.[hash:8].css'})],
    };
};

export default webpackConfig;
