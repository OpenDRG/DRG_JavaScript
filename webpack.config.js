const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'production', // production development
    // devtool: 'inline-source-map',
    entry: {
        // yancheng_2023:'./drg_group/yancheng_2023/GroupProxy.js',
        // suzhou_2023:'./drg_group/suzhou_2023/GroupProxy.js',
        // taizhou_2022:'./drg_group/taizhou_2022/GroupProxy.js',
        // wuxi_2022:'./drg_group/wuxi_2022/GroupProxy.js',
        // wuhan_2022:'./drg_group/wuhan_2022/GroupProxy.js',
        // beijing_2022:'./drg_group/beijing_2022/GroupProxy.js',
        // fuzhou_2022:'./drg_group/fuzhou_2022/GroupProxy.js',
        // zhejiang_2022:'./drg_group/zhejiang_2022/GroupProxy.js',
        // changsha_2023:'./drg_group/changsha_2023/GroupProxy.js',
        // chs_drg_10:'./drg_group/chs_drg_10/GroupProxy.js',
        // chs_drg_11:'./drg_group/chs_drg_11/GroupProxy.js',
        // wlmq_2022:'./drg_group/wlmq_2022/GroupProxy.js',
        // lanzhou_2023:'./drg_group/lanzhou_2023/GroupProxy.js',
        // yantai_2023:'./drg_group/yantai_2023/GroupProxy.js',
        // changzhou_2022:'./drg_group/changzhou_2022/GroupProxy.js',
        // qingdao_2023:'./drg_group/qingdao_2023/GroupProxy.js',
        // linfen_2022:'./drg_group/linfen_2022/GroupProxy.js',
        // zhoukou_2023:'./drg_group/zhoukou_2023/GroupProxy.js',
        index:'./index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
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