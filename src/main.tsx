/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ReactDOM from "react-dom/client"
import "animate.css";
import { Player } from "./Player";
import { useStyles, ThemeProvider } from "./theme";
import { useIsDarkModeEnabled } from "onyxia-ui";
import onyxiaLogoUrl from "./onyxia-logo.png";

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
    </ThemeProvider>
);

function Focus(props: { children: React.ReactNode; color: string; }){

    const { children, color } = props;

    const { css, theme } = useStyles();

    return (
        <span className={css({ color })} >{children}</span>
    );
    
}

function App() {

    const { css, theme } = useStyles();

    const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

    useEffect(
        () => {

            setIsDarkModeEnabled(false);

        },
        []
    );

    return (
        <Player
            items={[
                {
                    type: "text",
                    text: "INSEE",
                    duration: 400
                },
                {
                    type: "text",
                    text: "&",
                    duration: 300
                },
                {
                    type: "text",
                    text: "CodeGouv 🇫🇷",
                    duration: 400
                },
                {
                    type: "text",
                    text: "are",
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
                            text: "A cutting-edge solution",
                            duration: 500
                        },
                        {
                            text: <>for all your <Focus color={theme.colors.useCases.typography.textFocus}>data</Focus> needs</>,
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                    ],
                },
                // Video
                {
                    type: "text",
                    text: "Built on top standards",
                    duration: 1000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Kubernetes",
                            duration: 400
                        },
                        {
                            text: "Helm",
                            duration: 400
                        },
                        {
                            text: "S3",
                            duration: 400
                        },
                        {
                            text: "OIDC",
                            duration: 400
                        },
                        {
                            text: "Vault",
                            duration: 1800
                        },
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "An intuitive UI...",
                            duration: 1000
                        },
                        {
                            text: "...that shows what's going on",
                            animation: "animate__fadeIn",
                            duration: 1800
                        }
                    ],
                },
                {
                    type: "text",
                    text: "Allocate computing resources",
                    duration: 1000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "CPU",
                            duration: 500,
                            animation: "animate__pulse"
                        },
                        {
                            text: "RAM",
                            duration: 500,
                            animation: "animate__pulse"
                        },
                        {
                            text: <Focus color={theme.colors.useCases.typography.textFocus}>GPU</Focus>,
                            duration: 1000,
                            animation: "animate__pulse"
                        },
                    ],
                },
                // Video
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Horizontal scaling",
                            duration: 500
                        },
                        {
                            text: "Spawn new containers on demand",
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                    ],
                },
                // Video
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Deploy anywhere",
                            duration: 500
                        },
                        {
                            text: "OVH",
                            duration: 500
                        },
                        {
                            text: "AWS",
                            duration: 500
                        },
                        {
                            text: "Azure",
                            duration: 1800
                        }
                    ],
                },
                {
                    type: "text",
                    text: "Or...",
                    animation: "animate__fadeIn",
                    duration: 1000
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Break free from GAFAM hyperscalers",
                            duration: 1000
                        },
                        {
                            text: "deploy on premise",
                            duration: 1000
                        },
                        {
                            text: "and unleash the full potential of your infrastructure",
                            duration: 1800
                        },
                    ],
                },


                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Customize your instance",
                            duration: 500
                        },
                        {
                            text: "Extends the built-in catalog of tools",
                            duration: 500
                        },
                        {
                            text: "apply your brand identity",
                            duration: 1800
                        },
                    ],
                },

                // Video
                {
                    type: "text",
                    text: "Free and open source software",
                    duration: 800
                },
                {
                    type: "text",
                    text: "Made with ❤️",
                    duration: 800
                },
                {
                    type: "text",
                    text: "by the 🇫🇷 public service",
                    duration: 800
                },
                {
                    type: "text",
                    text: "Try it today",
                    duration: 800
                },
                {
                    type: "image",
                    duration: 3000,
                    imgUrl: onyxiaLogoUrl,
                    width: 200,
                }
            ]}
        />
    );

}

