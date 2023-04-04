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

function App() {

    const { theme } = useStyles();

    const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

    useEffect(
        () => {

            setIsDarkModeEnabled(false);

        },
        []
    );

    return (
        <Player
            specificIndex={5}
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
                            text: "for all your data needs",
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
                            text: "Built on top standards",
                            duration: 1000
                        },
                        {
                            text: "Kubernetes",
                            duration: 500
                        },
                        {
                            text: "Helm",
                            duration: 500
                        },
                        {
                            text: "S3",
                            duration: 500
                        },
                        {
                            text: "OIDC",
                            duration: 500
                        },
                        {
                            text: "Vault",
                            duration: 500
                        },
                    ]
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "An intuitive UI...",
                            duration: 500
                        },
                        {
                            text: "...that show you what's going on",
                            animation: "animate__fadeIn",
                            duration: 1800
                        }
                    ],
                },
                {
                    type: "bullet points",
                    bulletPoints: [
                        {
                            text: "Enable your data team to require needed resources",
                            duration: 1000
                        },
                        {
                            text: "CPU",
                            duration: 500
                        },
                        {
                            text: "GPU",
                            duration: 500
                        },
                        {
                            text: "RAM",
                            duration: 500
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
                    duration: 300
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
                            duration: 500
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
                },
                {
                    type: "music credentials",
                    title: "",
                    band: "Music by Migu",
                    duration: 2000,
                    effect: () => {

                        //setIsDarkModeEnabled(true);

                    }
                },
            ]}
        />
    );

}

