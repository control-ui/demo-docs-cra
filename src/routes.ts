import React from 'react'
import Loadable, { LoadableComponent, LoadingComponentProps } from 'react-loadable'
import { docsAdmin, docsCore, docsDocs, docsFeatures, docsHowTo, docsBase, docsLocales } from './content/docs'
import { Route } from '@control-ui/app/RouterProvider/RouterProvider'

export type makeLoaderComponent = (title: string) => React.ComponentType<LoadingComponentProps>

export interface CustomRoute extends Route {
    nav?: Route['nav'] & { initialOpen?: boolean };
    content?: {
        exact?: boolean
        component: React.ComponentType<any> & LoadableComponent
    }
    routes?: CustomRoute[]
}

const createDocsTree = (scope: string, label: string, routes: any, loading: React.ComponentType<LoadingComponentProps>): CustomRoute => ({
    path: '/' + scope + '/:docId+',
    nav: {
        to: '/' + scope,
        label,
        initialOpen: false,
    },
    content: {
        component: Loadable({
            loader: () => import('./page/DocsDetails'),
            loading,
        })
    },
    routes
})

export const routes = (loading: makeLoaderComponent): CustomRoute => ({
    routes: [
        {
            path: '/',
            nav: {
                to: '/',
                label: 'Home',
            },
            content: {
                exact: true,
                component: Loadable({
                    loader: () => import('./page/PageMain'),
                    loading: loading('Loading Home'),
                })
            }
        },
        createDocsTree('how-to', 'How-Tos', docsHowTo(''), loading('Loading Docs')),
        createDocsTree('app', 'App Starter', docsBase(''), loading('Loading Docs')),
        createDocsTree('docs', 'Docs Starter', docsDocs(''), loading('Loading Docs')),
        createDocsTree('kit', 'Component Kit', docsCore(''), loading('Loading Docs')),
        createDocsTree('features', 'Features', docsFeatures(''), loading('Loading Docs')),
        createDocsTree('admin', 'Admin', docsAdmin(''), loading('Loading Docs')),
        createDocsTree('locales', 'Locales', docsLocales(''), loading('Loading Docs')),
    ]
})
