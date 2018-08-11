const config = require('../../gatsby-config');

export interface IPageMeta {
    url: string;
    title: string;
    description: string;
}

interface IMeta {
    twitter: string;
    image: string;
}

interface IAuthor {
    name: string;
    url: string;
}

interface ICommon {
    pathPrefix: string;
    siteName: string;
    meta: IMeta;
    author: IAuthor;
}

const common: ICommon = {
    pathPrefix: config.pathPrefix || '',
    siteName: 'Pixem',
    meta: {
        twitter: '@_mkos',
        image: `${config.pathPrefix}/pixem.png`
    },
    author: {
        name: 'Matthew Kosloski',
        url: '//matthewkosloski.me'
    }
}

export default common;