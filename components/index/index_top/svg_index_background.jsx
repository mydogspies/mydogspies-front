import React from 'react';

const IndexBackgroundSvg = ({background_color}) =>  {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
            <g id="index_background">
                <title>Index Background</title>
                <path transform="rotate(-1.03503 238.011 575.136)" stroke={background_color} id="svg_2" d="m297.41992,750.57409c-125.80252,21.74064 -259.22423,-15.19443 -259.22423,-141.31416c0,-126.11973 170.75,-253.36206 306.9215,-204.86371c92.62945,77.20714 76.54748,109.32893 89.58942,174.55165c13.04194,65.22272 -11.48417,149.88559 -137.28668,171.62623z" opacity="undefined" stroke-width="10" fill="#6db6ff"/>
                <path id="svg_4" d="m755.33841,191.42845" opacity="NaN" stroke-width="10" stroke={background_color} fill="#aaffaa"/>
                <path stroke={background_color} id="svg_1" d="m607.1226,684.28551c-162.69624,-12.85714 -232.67409,-77.85319 -253.97524,-114.2857c-21.30115,-36.43252 14.26716,-501.4285 270.36073,-469.99993c256.09358,31.42857 147.4695,179.28174 147.4695,307.14281c0,127.86107 -1.15876,289.99996 -163.855,277.14282z" opacity="undefined" stroke-width="10" fill="#aaaaff"/>
                <path stroke={background_color} id="svg_3" d="m223.93512,501.45841c-114.4877,0 -216.34575,15.75509 -207.22274,-189.59556c9.12301,-205.35065 155.29284,-274.72009 359.70738,-274.72009c204.41454,0 162.91096,79.68757 140.75507,242.47595c-22.15589,162.78838 -178.75201,221.8397 -293.23972,221.8397z" opacity="undefined" stroke-width="10" fill="#86f486"/>
            </g>
        </svg>
    )
}

export default IndexBackgroundSvg;
