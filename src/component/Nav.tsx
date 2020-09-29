import React from 'react'
import Divider from '@material-ui/core/Divider'
import useTheme from '@material-ui/core/styles/useTheme'
import { ListItemLink } from '@control-ui/kit/List/LinkList'
import { Route, useRouter } from '@control-ui/app/RouterProvider'
import { NavListNested, NavList } from '@control-ui/kit/Menu/NavList'
import { useDrawer } from '@control-ui/app/DrawerProvider'

export default ({dense = true}) => {
    const {routes} = useRouter()
    const {setOpen} = useDrawer()
    const {breakpoints} = useTheme()

    const bpMd = breakpoints.width('md')
    const closeOnClick = React.useCallback(() => {
        if (bpMd > window.innerWidth) {
            setOpen(false)
        }
    }, [setOpen, bpMd])

    return <NavList dense={dense}>
        {routes.routes ? <NavListNested
            routes={routes.routes}
            dense={dense}
            routeId={'content'}
            filter={(route: Route) => Boolean(route.nav?.label)}
            onClick={closeOnClick}
        /> : null}
        <Divider/>
        {/* @ts-ignore */}
        <ListItemLink to={'impress'} primary={'Impress'} dense={dense} showActive onClick={closeOnClick}/>
        {/* @ts-ignore */}
        <ListItemLink to={'privacy'} primary={'Privacy Policy'} dense={dense} showActive onClick={closeOnClick}/>
    </NavList>
};
