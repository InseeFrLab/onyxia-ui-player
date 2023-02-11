/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ReactDOM from "react-dom/client"
import "animate.css";
import CircularProgress from '@mui/material/CircularProgress';
import { Player } from "./Player";
import { useStyles, ThemeProvider } from "./theme";
import { useIsDarkModeEnabled } from "onyxia-ui";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider
        getViewPortConfig={
            () => {
                return {
                    targetWindowInnerWidth: 1080,
                    //This is for zooming of de-zooming globally, the smaller the more zoom.
                    targetBrowserFontSizeFactor: 2
                };
            }
        }
    >
        <App />
    </ThemeProvider>,
);

function App() {

    const { css, theme } = useStyles();

    console.log(theme.typography.rootFontSizePx);

    const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

    useEffect(
        () => {

            setIsDarkModeEnabled(false);

        },
        []
    );

    return (
        <Player
            specificIndex={6}
            items={[
                {
                    type: "text",
                    text: "The",
                    duration: 300
                },
                {
                    type: "text",
                    text: "CodeGouv",
                    duration: 500
                },
                {
                    type: "text",
                    text: "team",
                    duration: 300
                },
                {
                    type: "text",
                    text: "is",
                    duration: 300
                },
                {
                    type: "text",
                    text: "introducing",
                    duration: 300
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "The 🇫🇷 Design System",
                            duration: 500
                        },
                        {
                            text: "React library",
                            animation: "animate__fadeIn",
                            duration: 1800
                        }
                    ],
                    spacing: "2rem",
                },
                {
                    type: "text",
                    text: (
                        <>
                            you've all been waiting for&nbsp;&nbsp;
                            <CircularProgress
                                size={theme.typography.rootFontSizePx}
                                color="inherit"
                                className={css({
                                    "overflow": "visible",
                                    "& svg": {
                                        overflow: "visible"
                                    },
                                    "& circle": {
                                        strokeWidth: "7px"
                                    }
                                })}
                            />
                        </>
                    ),
                    duration: 2000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "TypeScript first",
                            duration: 1000
                        },
                        {
                            text: <><code>fr-*</code> classes autocompletion</>,
                            duration: 1000
                        },
                        {
                            text: "Always up to date",
                            duration: 1000
                        }
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Perfect dark mode integration",
                            duration: 1000
                        },
                        {
                            text: "No more white flashes",
                            animation: "animate__fadeIn",
                            duration: 1500
                        }
                    ],
                    spacing: "2rem",
                    effect: () => {

                        setTimeout(() => {

                            setIsDarkModeEnabled(isDark => !isDark);

                        }, 700);


                        return () => {

                            setIsDarkModeEnabled(isDark => !isDark);

                        };
                    }

                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Great documentation",
                            duration: 1000
                        },
                        {
                            text: "Components live sandboxes",
                            duration: 1000
                        }
                    ]

                },
                {
                    type: "text",
                    text: "Unmatched developer experience",
                    animation: "animate__fadeIn",
                    duration: 1500
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "works with ...",
                            duration: 500
                        },
                        {
                            text: "Create React App",
                            animation: "animate__fadeIn",
                            duration: 500
                        },
                        {
                            text: "Vite",
                            animation: "animate__fadeIn",
                            duration: 500
                        },
                        {
                            text: "Next.js",
                            animation: "animate__fadeIn",
                            duration: 1500
                        },

                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Server Side Rendering",
                            duration: 1000
                        },
                        {
                            text: "JavaScript not required",
                            animation: "animate__fadeIn",
                            duration: 1100
                        },
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Auto import of icons",
                            duration: 1000
                        },
                        {
                            text: "Remixicon support",
                            duration: 1000
                        }
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Routing libraries integration",
                            duration: 700
                        },
                        {
                            text: "React Router",
                            animation: "animate__fadeIn",
                            duration: 500
                        },
                        {
                            text: "TanStack Router",
                            animation: "animate__fadeIn",
                            duration: 500
                        },
                        {
                            text: "Type Route ...",
                            animation: "animate__fadeIn",
                            duration: 1500
                        }
                    ]
                },
                {
                    type: "text",
                    text: "MUI support",
                    duration: 1000
                },
                //Video MUI
                {
                    type: "text",
                    text: "Three shakable",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "CSS in JS",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "i18n",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "@codegouvfr/react-dsfr",
                    animation: "animate__fadeIn",
                    duration: 3000
                },
                {
                    type: "music credentials",
                    title: "",
                    band: "Music by Migu",
                    duration: 2000,
                    effect: () => {

                        setIsDarkModeEnabled(true);

                    }
                },
            ]}
        />
    );

}

