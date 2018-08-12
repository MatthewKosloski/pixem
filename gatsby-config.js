
const isDev = () => process.env.NODE_ENV === 'development';

let pathPrefix = isDev() ? '' : '/labs/pixem';

const common = {
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-117972211-1"
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
                options: {
                    name: "Pixem",
                    short_name: "Pixem",
                    start_url: `${pathPrefix}/editor`,
                    background_color: "#212329",
                    theme_color: "#4CACCD",
                    display: "standalone",
                    icon: "static/pixem.png",
                }
        }
    ]
};

const config = isDev() 
    ? Object.assign({}, common) 
    : Object.assign({}, common, {pathPrefix});

module.exports = config;