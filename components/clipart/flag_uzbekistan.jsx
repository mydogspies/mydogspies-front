import React from "react";

const FlagUzbekistanSvg = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 500">
            <path fill="#1eb53a" d="M0 0h1000v500H0z"/>
            <path fill="#0099b5" d="M0 0h1000v250H0z"/>
            <path fill="#ce1126" d="M0 160h1000v180H0z"/>
            <path fill="#fff" d="M0 170h1000v160H0z"/>
            <circle cx="140" cy="80" r="60" fill="#fff"/>
            <circle cx="160" cy="80" r="60" fill="#0099b5"/>
            <g transform="matrix(2 0 0 2 272 128)" fill="#fff">
                <g id="e">
                    <g id="d">
                        <g id="c">
                            <g id="b">
                                <path id="a" d="M0-6v6h3" transform="rotate(18 0 -6)"/>
                                <use xlinkHref="#a" transform="scale(-1 1)" width="100%" height="100%"/>
                            </g>
                            <use xlinkHref="#b" transform="rotate(72)" width="100%" height="100%"/>
                        </g>
                        <use xlinkHref="#b" transform="rotate(-72)" width="100%" height="100%"/>
                        <use xlinkHref="#c" transform="rotate(144)" width="100%" height="100%"/>
                    </g>
                    <use xlinkHref="#d" y="-24" width="100%" height="100%"/>
                    <use xlinkHref="#d" y="-48" width="100%" height="100%"/>
                </g>
                <use xlinkHref="#e" x="24" width="100%" height="100%"/>
                <use xlinkHref="#e" x="48" width="100%" height="100%"/>
                <use xlinkHref="#d" x="-48" width="100%" height="100%"/>
                <use xlinkHref="#d" x="-24" width="100%" height="100%"/>
                <use xlinkHref="#d" x="-24" y="-24" width="100%" height="100%"/>
            </g>
        </svg>

    )
}

export default FlagUzbekistanSvg;
