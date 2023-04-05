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

function Focus(props: { className?: string; children: React.ReactNode; }) {

    const { className, children } = props;

    const { cx, css, theme } = useStyles();

    return (
        <span className={cx(
            css({
                color: theme.colors.useCases.typography.textFocus,
                "display": "inline-block"
            }), className)} >{children}</span>
    );

}

function App() {

    const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

    const { css } = useStyles();

    useEffect(
        () => { setIsDarkModeEnabled(false); },
        []
    );

    return (
        <Player
            items={[
                {
                    type: "text",
                    text: "INSEE",
                    duration: 500
                },
                {
                    type: "text",
                    text: "&",
                    duration: 300
                },
                {
                    type: "text",
                    text: "CodeGouv🇫🇷",
                    duration: 500
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
                            text: ({ isVisible }) => <>for all your <Focus className={!isVisible? undefined : "animate__animated animate__pulse"}>data</Focus> needs</>,
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                    ],
                },
                // Video
                {
                    type: "text",
                    text: "Built on top standards...",
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
                            animation: "animate__fadeIn",
                            duration: 400,
                        },
                        {
                            text: "S3",
                            animation: "animate__fadeIn",
                            duration: 400
                        },
                        {
                            text: "OIDC",
                            animation: "animate__fadeIn",
                            duration: 400
                        },
                        {
                            text: "Vault",
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: ({ isVisible }) => <>An intuitive <Focus className={!isVisible ? undefined : "animate__animated animate__pulse"}>UI</Focus></>,
                            duration: 700
                        },
                        {
                            text: "explaining what's going on",
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
                            text: <Focus>GPU</Focus>,
                            duration: 1500,
                            animation: "animate__tada"
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
                            text: "spawn containers on demand",
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
                            text: <>OVH, AWS, GCP, Azure... OR...</>,
                            animation: "animate__fadeIn",
                            duration: 1000
                        },
                        {
                            text: <Focus>On premise</Focus>,
                            animation: "animate__pulse",
                            duration: 1800
                        },
                    ],
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Unleash the potential of your infrastructure",
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                        {
                            text: "break free from GAFAM hyperscalers",
                            animation: "animate__fadeIn",
                            duration: 1800
                        },
                    ],
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Customize your instance",
                            duration: 1000
                        },
                        {
                            text: "use your branding",
                            duration: 1000
                        },
                        {
                            text: "extends the catalog",
                            duration: 1800
                        },
                    ],
                    effect: ()=> {

                        setTimeout(() => {

                            setIsDarkModeEnabled(true);

                        }, 1500);

                        return ()=> setIsDarkModeEnabled(false);
                    }
                },

                // Video
                {
                    type: "text",
                    text: "Free and open source software",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "Made with ❤️",
                    duration: 1000
                },
                {
                    type: "text",
                    text: "by the 🇫🇷 public service",
                    duration: 1000
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
                    width: 300,
                    
                }
            ]}
        />
    );

}

