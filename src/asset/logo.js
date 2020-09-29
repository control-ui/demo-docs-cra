import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";

export const Logo = ({width, style = {}}) => {
    style.enableBackground = 'new 0 0 150 150'
    const {palette} = useTheme();
    return <svg
        style={style} width={width}
        version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 150 150">
        <g>
            <path fill={'#033944'} d="M109.6,139.6l-0.1-67.9l34.2-54v122H109.6z"/>
        </g>
        <g>
            <path fill={palette.primary.main} d="M144.2,24.3c-4.3,7.1-13,8.5-19.3,2.7c-2-1.9-3.6-1.9-6-1.3c-10,2.7-20.1,5.3-30.1,7.8
		c-2.9,0.7-4.7,1.7-5.9,4.9c-2,5.7-6.9,8.7-12.3,8.3c-5.3-0.4-9.1-3.1-11-8.2c-1.8-4.9-0.3-10.3,3.7-14.1c4.7-4.3,11.7-4.6,16.4-0.1
		c2.2,2,4.1,2.5,6.9,1.7c9.7-2.7,19.4-5.2,29.2-7.5c3.4-0.8,5.2-2.3,6.6-5.6c3.1-7.3,10.6-9.8,17.2-6.3
		C146.2,10.1,148.2,17.7,144.2,24.3z"/>
        </g>
        <g>
            <path fill={'#033944'} d="M5.8,95.9V17.5h34v81.6c0,3.6,0.6,6.2,1.9,7.9c1.3,1.7,3.3,2.5,5.9,2.5c2.7,0,4.7-0.8,6-2.5
		c1.3-1.7,1.9-4.3,1.9-7.9V17.5h34.2v78.4c0,15.9-3.4,27.6-10.2,35c-6.8,7.4-17.4,11.1-32,11.1c-14.5,0-25.1-3.7-31.8-11.1
		C9.2,123.4,5.8,111.8,5.8,95.9z"/>
        </g>
        <g>
            <path fill={palette.primary.main} d="M32.6,116.9c6.4-6.3,15.7-5.5,20.8,2.2c1.6,2.5,3.3,3,5.9,2.9c11.1-0.2,22.3-0.3,33.4-0.2
		c3.2,0,5.3-0.5,7.4-3.6c3.6-5.3,9.5-7.2,15-5.4c5.4,1.8,8.7,5.6,9.3,11.4c0.6,5.5-2.3,10.8-7.5,13.7c-6,3.3-13.4,1.7-17.1-4.2
		c-1.7-2.7-3.6-3.6-6.8-3.6c-10.8,0.2-21.6,0.4-32.3,0.1c-3.7-0.1-6,1-8.4,4.1c-5.1,6.8-13.6,7.4-19.5,2
		C26.7,131.2,26.7,122.8,32.6,116.9z"/>
        </g>
        <g>
            <path fill={'#033944'} d="M109.2,139.6L110,75l33,19l0.3,45.6H109.2z"/>
        </g>
    </svg>;
};