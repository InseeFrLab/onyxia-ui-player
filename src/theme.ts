import {
    createThemeProvider,
    defaultGetTypographyDesc
} from "onyxia-ui/lib";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import { createText } from "onyxia-ui/Text";
import type { Param0 } from "tsafe";
import { createTss } from "tss-react";
import { createOnyxiaSplashScreenLogo } from "onyxia-ui/lib/SplashScreen";
import type { ThemeProviderProps } from "onyxia-ui";
//Import icons from https://material-ui.com/components/material-icons/ that you plan to use
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import EditIcon from "@mui/icons-material/Edit";
import "onyxia-ui/assets/fonts/WorkSans/font.css";


export const { ThemeProvider, useTheme } = createThemeProvider({
    "getTypographyDesc": params => ({
        ...defaultGetTypographyDesc(params),
        "fontFamily": '"Work Sans", sans-serif',
    })
});

export const { Icon } = createIcon({
    "hello": EmojiPeopleIcon,
    "edit": EditIcon,
});

export type IconId = Param0<typeof Icon>["iconId"];

export const { IconButton } = createIconButton({ Icon });
export const { Button } = createButton({ Icon });
export const { Text } = createText({ useTheme });

export const { tss } = createTss({
    "useContext": function useContext() {
        const theme = useTheme();
        return { theme };
    }
});

export const useStyles = tss.create({});

const { OnyxiaSplashScreenLogo } = createOnyxiaSplashScreenLogo({ useTheme });


export const splashScreen: ThemeProviderProps["splashScreen"] = {
    "Logo": OnyxiaSplashScreenLogo,
    "fadeOutDuration": 500
};