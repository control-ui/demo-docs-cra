import React from 'react'
import { App } from '@control-ui/app/App'
import { routes } from './routes'
import { DocsProvider } from '@control-ui/docs/DocsProvider'
import { HeadlinesProvider } from '@control-ui/docs/LinkableHeadline'
import { loading } from './component/Loading'
import { CustomLayout } from './component/Layout'
import { I18nProviderContext } from '@control-ui/app'

const Provider = ({children}: React.PropsWithChildren<{}>) => (
    <DocsProvider loader={(file: string) => import('./content/' + file + '.md')}>
        <HeadlinesProvider>
            {children}
        </HeadlinesProvider>
    </DocsProvider>
)

const i18n: I18nProviderContext = {
    allLanguages: {
        en: '0.1',
    },
    detection: ['localStorage'],
    defaultLanguage: 'en',
    loader: (url) => import ('./locales/' + url + '.json'),
    expiration: 1000,
}

const routing = routes(loading)
const CustomApp = () => <App
    routes={routing}
    Layout={CustomLayout}
    i18n={i18n}
    Provider={Provider}
/>

export default CustomApp
