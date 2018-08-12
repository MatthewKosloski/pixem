import common, { IPageMeta } from './common';

interface INavLink {
    text: string;
    href: string;
}

interface IHero {
    navLinks: INavLink[],
    title: string;
    subtitle: string;
    ctaText: string;
}

interface IUsageItem {
    title: string;
    text: string;
}

interface IUsage {
    title: string;
    items: IUsageItem[];
}

interface IQuickConversions {
    title: string;
}

interface IHome {
    meta: IPageMeta;
    hero: IHero;
    usage: IUsage;
    quickConversions: IQuickConversions;
}

const home: IHome = {
    meta: {
        url: `${common.pathPrefix}`,
        title: 'Pixem — Convert Your CSS Stylesheet to Em or Rem Units',
        description: 'Pixem allows you to convert px units in a style sheet to either em or rem units.  You can even specify which CSS properties are affected by the conversion.'
    },
    hero: {
        navLinks: [
            {text: 'usage', href: '#usage'},
            {text: 'Quick Conversion', href: '#quick-conversion'}
        ],
        title: 'An intuitive unit conversion tool for stylesheets',
        subtitle: 'Pixem provides developers with the means to convert pixel units to the equivalient value in ems or rems.',
        ctaText: 'Start Using Pixem'
    },
    usage: {
        title: 'How to Use Pixem',
        items: [{
            title: 'Paste in your stylesheet',
            text: 'The style sheet should contain pixel values to be converted to either REMs or EMs.'
        }, {
            title: 'Set base pixel size',
            text: 'This should be the top-level font-size on your webpage. The default for most web browsers is 16 pixels.'
        }, {
            title: 'Preserve original values',
            text: 'Check whether to preserve original values with CSS comments. This simply means that the original pixel value before the conversion is preserved in a comment next to the converted value.'
        }, {
            title: 'Choose conversion unit',
            text: 'Choose a unit to convert pixel values to—em or rem. The former is relative to the font-size of the direct parent and the latter is relative to the font-size of the root element.'
        }, {
            title: 'Specify the affected properties',
            text: 'Indicate which CSS properties should be converted by typing in a list of comma-separated properties (e.g., “font, font-size”). If the field is empty, all properties will be affected by the conversion.'
        }, {
            title: 'Copy the converted stylesheet',
            text: 'Copy the converted stylesheet to your clip board. The result can be found in the text area that is right next to the input.'
        }]
    },
    quickConversions: {
        title: 'Quick Conversions'
    }
}

export default home;