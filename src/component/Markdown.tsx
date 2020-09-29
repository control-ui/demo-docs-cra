import React from 'react'
import { allowHtml, Markdown as CuiMarkdown } from '@control-ui/docs/Markdown/Markdown'
import { renderers } from '@control-ui/docs/Markdown/MarkdownRenderers'

const renderersContent = renderers(false)

const astPlugins = [allowHtml()]

export const Markdown = ({source}: { source?: string }) => {
    return source ? <CuiMarkdown source={source} astPlugins={astPlugins} renderers={renderersContent}/> : null
}
