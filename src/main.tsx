/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ReactDOM from "react-dom/client"
import "animate.css";
import { Player } from "./Player";
import { useStyles, ThemeProvider } from "./theme";
import { useIsDarkModeEnabled } from "onyxia-ui";
import onyxiaLogoUrl from "./onyxia-logo.png";
import { enableScreenScaler } from "screen-scaler/react";
import { GlobalStyles } from "tss-react";

const { ScreenScalerOutOfRangeFallbackProvider } = enableScreenScaler({
    "rootDivId": "root",
    "targetWindowInnerWidth": 1080
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ScreenScalerOutOfRangeFallbackProvider
        fallback={<h1>Please Rotate your phone, this app does not render well in portrait mode.</h1>}
    >
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ScreenScalerOutOfRangeFallbackProvider>
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

    const { css, cx } = useStyles();

    useEffect(
        () => { setIsDarkModeEnabled(false); },
        []
    );

    return (
        <>
        <GlobalStyles
        styles={{
            "html": {
                "fontSize": "32px"
            },
        }}
        />
        <Player
            //specificIndex={5}
            items={[
                {
                    type: "text",
                    text: "...",
                    duration: 1000
                },
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
                    text: "CodeGouv 🇫🇷",
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
                            text: ({ isVisible }) => <>for all your <Focus className={!isVisible ? undefined : cx("animate__animated", "animate__pulse", css({ animationDuration: "700ms", animationDelay: "200ms" }))}>data</Focus> needs</>,
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
                            duration: 1000
                        },
                        {
                            text: <Focus>On premise</Focus>,
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
                    effect: () => {

                        console.log("ok");

                        setTimeout(() => {

                            console.log("wesh!");

                            setIsDarkModeEnabled(true);

                        }, 1500);

                        return () => setIsDarkModeEnabled(false);
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
        </>
    );

}

