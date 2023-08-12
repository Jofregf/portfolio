import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
      
            
            <path
                fill="currentColor"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
       
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect
            x="0"
            y="0"
            width="24"
            height="24"
            fill="rgba(255, 255, 255, 0)"
        />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const CircularText = ({ className, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="1080.000000pt"
        height="1080.000000pt" 
        viewBox="0 0 1080.000000 1080.000000"
        x="0px" 
        y="0px"
        xmlSpace="preserve"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <g 
            transform="translate(0.000000,1080.000000) scale (0.100000,-0.100000)"
            stroke="none"
        >
            <path d="M6016 10314 c-3 -33 -11 -124 -16 -204 -6 -80 -13 -160 -16 -177 l-5
            -33 -53 44 c-95 77 -243 110 -373 83 -243 -52 -393 -246 -393 -512 0 -289 203
            -495 489 -495 102 0 172 18 229 60 23 16 44 30 47 30 3 0 5 -22 5 -49 0 -59
            -5 -57 147 -67 91 -5 114 -4 118 7 2 8 16 163 30 344 13 182 27 350 30 375 8
            73 45 555 45 593 0 34 -1 35 -47 40 -27 3 -89 9 -139 13 l-92 6 -6 -58z m-232
            -528 c65 -20 106 -54 141 -117 27 -48 30 -63 29 -139 -1 -180 -92 -280 -254
            -280 -114 0 -192 51 -235 153 -20 47 -20 171 0 228 48 134 177 198 319 155z"/>
            <path d="M4504 9956 c-98 -22 -173 -63 -241 -132 -66 -65 -64 -65 -78 4 -8 39
            -15 39 -139 12 -50 -12 -102 -23 -114 -26 -20 -4 -23 -9 -17 -32 10 -38 76
            -329 146 -647 33 -148 64 -274 69 -279 10 -10 237 30 262 45 8 5 -5 82 -45
            262 -35 154 -57 277 -57 313 0 66 23 126 61 161 65 59 191 82 263 48 73 -35
            89 -75 161 -405 31 -140 60 -259 66 -265 9 -9 236 31 261 46 12 8 -81 449
            -128 605 -28 96 -87 190 -143 228 -91 64 -216 87 -327 62z"/>
            <path d="M7304 9853 c-32 -54 -176 -300 -321 -546 -205 -348 -261 -452 -253
            -462 6 -8 62 -43 123 -78 62 -35 153 -88 202 -117 196 -115 264 -150 355 -181
            83 -28 109 -32 205 -33 79 0 127 5 170 18 192 57 347 207 426 409 37 96 50
            233 29 330 -21 103 -93 231 -179 317 -42 42 -96 90 -121 107 -71 48 -558 333
            -569 333 -5 0 -36 -44 -67 -97z m367 -348 c152 -86 232 -165 270 -267 18 -48
            21 -73 17 -146 -3 -74 -9 -97 -38 -156 -67 -135 -167 -215 -295 -236 -76 -12
            -170 2 -239 36 -97 49 -278 158 -283 172 -3 7 30 74 74 150 139 239 285 486
            305 515 l20 28 51 -29 c29 -16 82 -46 118 -67z"/>
            <path d="M3320 9524 c-296 -78 -482 -355 -415 -619 66 -260 302 -429 549 -394
            225 31 449 192 510 366 18 51 19 51 -102 91 l-92 31 -22 -47 c-61 -129 -224
            -218 -361 -198 -45 7 -122 50 -131 72 -3 8 91 66 252 155 141 78 285 157 319
            176 35 19 65 39 68 44 12 18 -61 135 -120 194 -126 125 -291 172 -455 129z
            m190 -234 c19 -10 46 -30 59 -44 23 -25 24 -27 7 -39 -42 -31 -408 -229 -413
            -224 -13 14 -20 91 -12 135 12 62 53 119 112 156 78 48 171 54 247 16z"/>
            <path d="M2424 8954 l-111 -115 -8 -282 c-4 -155 -9 -284 -11 -287 -3 -2 -125
            116 -272 263 -147 147 -272 267 -277 267 -16 0 -185 -173 -185 -190 0 -17 939
            -960 956 -960 6 0 52 43 104 95 l93 95 -86 89 -87 88 0 103 0 103 29 -6 c16
            -3 126 -16 245 -28 l216 -22 107 104 c60 56 114 111 121 121 16 23 23 21 -258
            53 -124 14 -272 31 -330 38 l-105 12 -6 200 c-4 110 -7 239 -8 288 0 48 -4 87
            -8 86 -5 0 -58 -52 -119 -115z"/>
            <path d="M8373 8655 c-123 -27 -253 -118 -326 -228 -83 -125 -100 -275 -49
            -423 63 -180 217 -343 380 -400 37 -13 84 -24 104 -24 l37 0 6 53 c3 28 7 76
            8 106 l2 55 -38 8 c-94 20 -198 103 -248 199 -41 78 -27 254 21 254 8 0 119
            -119 248 -265 129 -146 242 -266 253 -268 29 -5 148 122 185 199 99 202 59
            404 -116 580 -85 86 -182 140 -284 158 -74 14 -105 13 -183 -4z m236 -247 c44
            -14 117 -80 144 -133 31 -58 29 -155 -3 -213 -13 -23 -29 -42 -35 -42 -13 0
            -309 335 -313 355 -4 17 27 34 81 44 44 9 69 6 126 -11z"/>
            <path d="M1732 8005 c-148 -32 -281 -159 -353 -336 -110 -271 -11 -537 246
            -660 281 -135 584 4 722 332 24 56 27 77 28 174 0 99 -3 116 -27 168 -15 31
            -33 60 -41 63 -11 4 -174 -89 -200 -115 -5 -5 -1 -26 8 -47 51 -119 -10 -275
            -130 -330 -159 -75 -377 45 -401 219 -8 57 16 140 56 196 33 45 113 91 161 91
            43 0 49 16 49 136 0 138 3 135 -118 109z"/>
            <path d="M8935 7560 c-187 -215 -341 -397 -343 -404 -4 -18 105 -238 126 -254
            10 -8 31 -11 52 -8 19 3 136 10 260 16 567 25 740 38 740 54 0 23 -101 217
            -116 223 -15 5 -600 -22 -676 -32 -21 -3 -38 -1 -38 4 0 9 86 109 364 421
            l109 122 -61 124 c-34 68 -65 124 -69 124 -5 0 -161 -176 -348 -390z"/>
            <path d="M1203 6891 c-177 -61 -287 -253 -300 -525 -5 -104 7 -224 26 -255 8
            -12 25 -10 107 9 55 12 102 24 105 26 3 2 0 27 -8 56 -20 73 -12 216 16 289
            33 87 101 139 181 139 54 0 55 -6 14 -166 -31 -124 -38 -167 -38 -254 -1 -92
            2 -111 23 -150 32 -62 67 -97 126 -128 68 -35 179 -37 243 -4 123 65 206 223
            206 392 0 86 -12 128 -52 173 -21 24 -13 28 36 15 23 -6 48 -8 56 -5 18 7 74
            233 61 246 -9 8 -428 118 -560 147 -84 19 -180 17 -242 -5z m457 -349 c88 -64
            94 -240 10 -324 -31 -31 -45 -38 -77 -38 -50 0 -87 28 -103 76 -13 40 -6 96
            33 238 l21 78 45 -6 c25 -3 57 -14 71 -24z"/>
            <path d="M9332 6715 c-247 -54 -397 -247 -396 -510 1 -120 22 -213 70 -311 38
            -76 134 -184 164 -184 14 0 92 93 124 148 5 8 -10 31 -38 63 -62 69 -89 142
            -90 249 -1 70 3 93 22 133 25 50 85 107 113 107 19 0 17 6 54 -185 14 -77 43
            -228 64 -335 l37 -195 36 -3 c46 -4 178 40 240 79 103 66 185 188 208 308 44
            232 -74 492 -268 590 -115 58 -219 72 -340 46z m217 -266 c71 -15 123 -57 156
            -123 62 -127 15 -290 -97 -337 -39 -16 -42 -12 -68 130 -12 64 -30 160 -41
            214 -22 112 -23 127 -9 127 5 0 32 -5 59 -11z"/>
            <path d="M1373 5860 c-108 -22 -190 -86 -234 -183 -13 -29 -24 -53 -25 -55 -1
            -2 -22 17 -45 43 -60 65 -127 97 -214 103 -178 11 -306 -113 -337 -326 -9 -64
            -9 -153 3 -432 10 -224 20 -355 27 -362 8 -8 94 -6 324 6 172 9 454 23 626 31
            172 8 318 17 323 21 7 4 9 37 5 93 -4 47 -13 220 -22 383 -16 318 -28 398 -79
            497 -70 140 -208 211 -352 181z m122 -314 c15 -10 38 -41 51 -70 21 -46 25
            -76 34 -242 5 -104 10 -203 10 -220 l0 -31 -156 -7 c-86 -4 -158 -6 -160 -3
            -2 2 -9 95 -14 206 -15 273 0 339 84 377 39 18 116 13 151 -10z m-549 -85 c76
            -35 102 -137 103 -413 l1 -87 -52 -5 c-29 -3 -97 -7 -150 -10 l-97 -4 -5 51
            c-14 134 -16 305 -6 355 24 110 109 157 206 113z"/>
            <path d="M9020 5391 l0 -138 238 -6 c130 -4 436 -10 679 -14 l442 -6 3 129 c2
            71 2 134 0 140 -4 13 -237 21 -924 29 l-438 5 0 -139z"/>
            <path d="M9325 5070 c-241 -53 -405 -259 -422 -529 -7 -107 7 -179 54 -273 68
            -135 188 -226 349 -264 287 -67 561 143 614 472 41 252 -103 496 -338 574 -72
            24 -197 33 -257 20z m196 -299 c58 -22 119 -74 147 -126 12 -21 17 -55 17
            -110 0 -67 -4 -89 -25 -130 -49 -95 -163 -145 -284 -124 -166 29 -264 153
            -236 300 34 181 195 261 381 190z"/>
            <path d="M8422 4158 c-34 -62 -60 -118 -58 -124 4 -10 114 -76 186 -111 53
            -26 184 -109 187 -118 2 -6 -19 -18 -47 -28 -151 -54 -280 -306 -251 -488 27
            -161 124 -291 281 -373 270 -142 554 -49 688 224 36 72 37 79 37 181 l0 106
            42 -20 c23 -11 45 -19 47 -16 15 15 116 205 116 218 0 10 -61 50 -173 112
            -528 295 -850 475 -909 510 -36 21 -70 39 -75 39 -5 0 -37 -51 -71 -112z m614
            -515 c194 -65 267 -254 160 -411 -109 -157 -366 -127 -474 56 -22 39 -27 59
            -26 112 1 185 165 302 340 243z"/>
            <path d="M1863 4144 c-51 -19 -99 -70 -113 -122 -22 -83 37 -184 123 -212 83
            -26 181 22 212 104 55 143 -80 282 -222 230z"/>
            <path d="M2127 3202 c-304 -263 -338 -308 -345 -455 -3 -63 0 -91 18 -140 58
            -159 213 -324 389 -413 39 -20 78 -34 88 -32 12 2 30 34 55 93 21 50 37 93 38
            96 0 4 -21 14 -47 24 -106 40 -208 127 -253 216 -31 59 -25 143 14 193 15 20
            30 36 35 36 4 0 53 -54 109 -119 100 -117 194 -199 262 -229 20 -9 66 -16 105
            -16 115 -1 199 56 253 173 21 45 24 64 20 120 -13 175 -202 381 -350 381 -26
            0 -48 4 -48 9 0 6 16 22 35 37 20 15 35 33 33 40 -6 24 -151 184 -167 183 -9
            0 -119 -89 -244 -197z m334 -203 c50 -17 97 -56 130 -107 89 -140 -49 -268
            -171 -159 -38 34 -170 186 -170 197 0 9 67 64 90 73 26 10 86 7 121 -4z"/>
            <path d="M8203 3000 c-224 -45 -459 -275 -493 -483 -5 -32 -7 -64 -4 -71 7
            -18 50 -26 143 -26 l76 0 12 59 c13 69 66 156 121 200 68 53 116 71 187 71 62
            0 135 -20 135 -37 0 -4 -120 -125 -267 -268 l-267 -261 56 -55 c68 -68 154
            -122 232 -144 71 -21 217 -17 284 7 156 57 304 210 352 366 107 347 -215 711
            -567 642z m326 -446 c23 -45 26 -138 7 -188 -23 -60 -98 -132 -159 -152 -80
            -26 -217 -1 -217 40 0 19 330 338 344 333 6 -2 17 -17 25 -33z"/>
            <path d="M2820 2255 c-234 -151 -435 -281 -448 -290 l-23 -17 103 -70 c57 -39
            108 -72 113 -74 6 -3 135 76 285 174 294 191 317 205 329 200 4 -2 -25 -151
            -65 -333 -40 -181 -73 -339 -73 -351 -1 -16 27 -40 115 -98 64 -43 118 -75
            121 -72 5 5 213 1012 213 1032 0 9 -176 136 -225 162 -17 9 -80 -28 -445 -263z"/>
            <path d="M7373 2402 c-62 -37 -113 -71 -113 -75 0 -5 54 -98 121 -208 150
            -248 163 -276 162 -357 -1 -85 -36 -142 -120 -197 -34 -22 -62 -43 -62 -47 -1
            -4 26 -52 60 -108 40 -66 66 -100 78 -100 32 0 138 106 170 172 17 34 31 69
            31 80 0 30 17 21 41 -22 13 -22 30 -40 39 -40 19 0 220 119 220 130 0 4 -67
            117 -148 251 -81 134 -194 322 -251 417 -57 94 -106 172 -110 172 -3 -1 -57
            -31 -118 -68z"/>
            <path d="M3698 1877 c-117 -340 -122 -358 -116 -452 6 -97 41 -167 115 -235
            128 -117 370 -193 557 -175 110 10 110 10 92 129 -8 54 -16 100 -19 102 -2 2
            -32 -1 -66 -7 -165 -26 -362 55 -391 161 -6 21 -7 57 -4 80 8 51 4 51 192 -14
            73 -25 161 -50 194 -56 145 -27 264 26 326 145 22 42 27 63 27 130 0 69 -4 86
            -27 126 -69 117 -215 199 -369 207 -76 4 -92 1 -137 -20 -57 -28 -62 -23 -36
            37 8 21 12 41 7 45 -12 10 -216 80 -234 80 -9 0 -45 -90 -111 -283z m505 -37
            c86 -27 127 -70 127 -136 0 -37 -6 -51 -29 -75 -43 -42 -108 -40 -243 7 -57
            20 -107 40 -112 45 -5 4 -4 27 4 54 15 55 65 100 125 114 58 13 57 13 128 -9z"/>
            <path d="M6333 1951 c-164 -75 -109 -331 71 -331 61 0 104 19 143 63 72 82 47
            208 -52 264 -49 28 -106 29 -162 4z"/>
            <path d="M5065 1844 c-165 -26 -282 -130 -331 -293 -7 -25 -18 -86 -24 -136
            -19 -165 -71 -817 -67 -829 3 -8 56 -16 148 -24 79 -6 224 -18 322 -27 98 -9
            199 -15 225 -13 l47 3 9 108 c5 59 7 109 5 112 -3 2 -102 12 -222 23 -119 10
            -219 20 -221 23 -4 4 35 492 49 621 14 124 75 188 177 188 90 0 169 -42 220
            -115 12 -19 27 -35 32 -35 6 0 47 39 93 86 94 97 94 92 16 165 -62 59 -121 92
            -207 118 -68 21 -211 34 -271 25z"/>
        </g>
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);
