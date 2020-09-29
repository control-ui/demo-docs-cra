import React from 'react'
import { LoadingCircular } from '@control-ui/kit/Loading/LoadingCircular'
import { TypographyTypeMap } from '@material-ui/core/Typography'
import { LoadingComponentProps } from 'react-loadable'

export const loading = (title: string) => (
    props: LoadingComponentProps & {
        textColor?: TypographyTypeMap<{}>['props']['color'];
        width?: string | undefined;
    }
) => <LoadingCircular {...props} title={title}/>
