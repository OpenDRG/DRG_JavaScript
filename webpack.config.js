const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: {
        index:'./index.js',
        yancheng_2022:'./drg_group/yancheng_2022/GroupProxy.js',
        suzhou_2022:'./drg_group/suzhou_2022/GroupProxy.js',
        taizhou_2022:'./drg_group/taizhou_2022/GroupProxy.js',
        wuxi_2022:'./drg_group/wuxi_2022/GroupProxy.js',
        wuhan_2022:'./drg_group/wuhan_2022/GroupProxy.js',
        beijing_2022:'./drg_group/beijing_2022/GroupProxy.js',
        lanzhou_2022:'./drg_group/lanzhou_2022/GroupProxy.js',
        fuzhou_2022:'./drg_group/fuzhou_2022/GroupProxy.js',
        zhejiang_2022:'./drg_group/zhejiang_2022/GroupProxy.js',
        xian_2022:'./drg_group/xian_2022/GroupProxy.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'DRG分组器',
        }),
    ],
};