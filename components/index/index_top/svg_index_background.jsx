import React from 'react';
import styled from 'styled-components';

const IndexBackgroundSvg = ({background_color}) =>  {

    // TODO does not work - just as code recipe

    return (
        <SvgElem height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" data-name="index" viewBox="5 0 1030 880">

            <defs>
                <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                    <image height="1" width="1" preserveAspectRatio="none" href="/assets/images/coding.jpg" />
                </pattern>
            </defs>

            <defs>
                <pattern id="pattern2" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                    <image height="1" width="1" preserveAspectRatio="none" href="/assets/images/3d.jpg" />
                </pattern>
            </defs>

            <defs>
                <pattern id="pattern3" height="100%" width="100%" patternContentUnits="objectBoundingBox">
                    <image height="1" width="1" preserveAspectRatio="none" href="/assets/images/project.jpg" />
                </pattern>
            </defs>

            <g>
                <title>Index</title>
                <path id="svg_1" fill="url(#pattern1)"
                      d="m46.14776,205.20705c57.23499,-89.465 81.22224,-117.85705 161.07224,-161.59705c52.53,-28.78 104.78,-32.92 143.44,-38c13.63,-1.79 46.12,-7 156.38,-1.67c98.69,4.79 147.13,7.38 210.84,17.67c90.71,14.65 136.48,22.52 156.21,49c50.4,67.62 -23.12,191.32 -65.72,263c-27.83,46.83 -46.1,80 -116.35,141c-81.32,63.16 -160.86,85.1 -206.16,94c-25,4.91 -113.71,15.66 -222.62,-2c-98.85,-16 -231.94385,-36.74692 -248.1,-107c-20.245,-103.6546 7.62853,-216.77833 31.00776,-254.40295z"
                      className="cls-1"/>
                <path id="svg_2" fill="url(#pattern2)"
                      d="m848.69,281.27c1.63,-3.74 180.31,0 180.31,0l0,582.34l-562.38,0l-1,-281.16s258.45,-13.4 383.07,-301.18z"
                      className="cls-2"/>
                <path id="svg_3" fill="url(#pattern3)"
                      d="m71.32,533.61a938.7,938.7 0 0 0 167,42a952.7,952.7 0 0 0 213.46,9l0.54,280.21a500.47,500.47 0 0 1 -94.75,12c-53.21,1.6 -215.47,7 -293.07,-92.1c-54.86,-70.11 -28.17,-164.22 -24.43,-179.11a246.19,246.19 0 0 1 31.25,-72z"
                      className="cls-3"/>
            </g>
        </SvgElem>
    )
}

const SvgElem = styled.svg`

`;

export default IndexBackgroundSvg;
