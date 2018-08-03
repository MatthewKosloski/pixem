const path = require('path');

exports.modifyWebpackConfig = ({config, stage}) => {
    config.merge({
        resolve: {
            alias: {
                '@src': path.resolve(__dirname, 'src'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@util-wrappers': path.resolve(__dirname, 'src/util-wrappers'),
                '@atoms': path.resolve(__dirname, 'src/components/atoms'),
                '@molecules': path.resolve(__dirname, 'src/components/molecules'),
                '@pages': path.resolve(__dirname, 'src/components/pages'),
                '@templates': path.resolve(__dirname, 'src/components/templates')
            }
        }
    });
    return config;
}