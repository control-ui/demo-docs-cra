import React from 'react'
import { PageBox, PageContent } from '@control-ui/kit/PageContent'
import NavProject from '../component/NavProject'
import { Head } from '@control-ui/kit/Head'
import { Logo } from '../asset/logo'
import { LinkButton } from '@control-ui/kit/Link/LinkButton'
import { MdCode } from '@control-ui/docs/Markdown/Code'
import Typography, { TypographyProps } from '@material-ui/core/Typography/Typography'

const H = ({level, ...p}: React.PropsWithChildren<{ level: number }>) =>
    <Typography
        component={'h' + level}
        // @ts-ignore
        variant={'h' + level}
        gutterBottom style={{marginTop: 36 / (level / 2)}} {...p}
    />

const P = (p: TypographyProps) =>
    // @ts-ignore
    <Typography component={'p'} variant={'body1'} gutterBottom {...p}/>

export default function PageMain() {
    return (
        <>
            <Head
                title={'Control-UI'}
            />
            <PageContent>
                <Logo width={150} style={{marginTop: 24}}/>
                <PageBox
                    title={'Control-UI'}
                    titleLevel={1}
                >
                    <P>
                        <strong>React Components</strong> for Web-Apps, built with Material-UI.
                    </P>
                    <P>
                        Jump start your progressive web app with translation, layout, routing and a lot more.
                    </P>

                    <H level={2}>Control-UI: App</H>
                    <P>Layout Components and App starter for any PWA. Initializes provider for i18n, router, drawer and theme.</P>
                    <MdCode value={'npx create-react-app my-app --template control-ui-app'}/>
                    <LinkButton to={'/app/overview'} variant={'outlined'}>more</LinkButton>
                </PageBox>
                <PageBox title={'Project'} titleLevel={2}>
                    <NavProject/>
                </PageBox>
            </PageContent>
        </>
    )
}
