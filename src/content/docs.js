const createDoc = (path, label, routes, prefix) => ({
    doc: path,
    path: prefix + '/' + path,
    nav: {
        to: prefix + '/' + path,
        initialOpen: false,
        label,
    },
    routes
});

const compCreator = (prefix) => (path, label, routes = undefined) => createDoc(prefix + '/' + path, label || path, routes, '');

export const docsHowTo = (prefix = '') => [
    createDoc('how-to/overview', 'How-To Overview', undefined, prefix),
];

const compCore = compCreator('kit/components');
export const docsCore = (prefix = '') => [
    createDoc('kit/overview', 'Kit Overview', undefined, prefix),
    createDoc('kit/components', 'Components', [
        compCore('DataGrid'),
        compCore('ExpansionPanel'),
        compCore('Link'),
        compCore('List'),
        compCore('Loading'),
        compCore('Menu'),
        compCore('PageContent'),
        compCore('Process'),
        compCore('Route'),
        compCore('ScrollUpButton'),
        compCore('Settings'),
        compCore('Tooltip'),
    ], prefix),
];

const compLayout = compCreator('app/components');
export const docsBase = (prefix = '') => [
    createDoc('app/overview', 'App Starter', undefined, prefix),
    createDoc('app/components', 'Components', [
        compLayout('App'),
        compLayout('AppLoader'),
        compLayout('AppTheme'),
        compLayout('Drawer'),
        compLayout('DrawerProvider'),
        compLayout('Footer'),
        compLayout('Header'),
        compLayout('I18nProvider'),
        compLayout('Layout'),
        compLayout('RouterProvider'),
    ], prefix),
];

const compDocs = compCreator('docs/components');
export const docsDocs = (prefix = '') => [
    createDoc('docs/overview', 'Docs Overview', undefined, prefix),
    createDoc('docs/components', 'Components', [
        compDocs('ContentLoader'),
        compDocs('DocDetails'),
        compDocs('DocsProvider'),
        compDocs('LinkableHeadline'),
        compDocs('Markdown'),
    ], prefix),
];

export const docsAdmin = (prefix = '') => [
    createDoc('admin/overview', 'Admin Components', undefined, prefix),
];

const compFeature = compCreator('features/components');
export const docsFeatures = (prefix = '') => [
    createDoc('features/overview', 'Overview', undefined, prefix),
    createDoc('features/components', 'Components', [
        compFeature('I18n', 'I18n', [
            compFeature('I18n/MenuIconI18n', 'MenuIconI18n')
        ]),
        compFeature('User', 'User', [
            compFeature('User/FormLogin', 'FormLogin'),
            compFeature('User/MenuAccount', 'MenuAccount'),
            compFeature('User/PageLogin', 'PageLogin'),
            compFeature('User/StoreAuth', 'StoreAuth'),
        ]),
        compFeature('Users', 'Users', [
            compFeature('Users/ListUsers', 'ListUsers'),
            compFeature('Users/PageManage', 'PageManage'),
            compFeature('Users/StoreUsers', 'StoreUsers'),
        ]),
    ], ''),
];

export const docsLocales = (prefix = '') => [
    createDoc('locales/overview', 'Locales Overview', undefined, prefix),
];
