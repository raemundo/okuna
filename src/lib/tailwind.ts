import { create } from 'twrnc';
import { useState, useEffect } from "react";
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';

// create the customized version...
const tw = create(require(`../../tailwind.config.js`)); // <- your path may differ

export const t = (strings: TemplateStringsArray, ...values: (string | number)[]) => {
    let str = ``;
    strings.forEach((string, i) => {
        str += string + (values[i] || ``);
    });
    return StyleSheet.create({ x: tw`${str}` }).x;
};

t.style = (...exprs) => StyleSheet.create({ x: tw.style(...exprs) }).x;
// ... and then this becomes the main function your app uses
export default tw;



export function useDeviceContext(tw) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // if (typeof window !== "undefined") {
        // }
        setIsClient(true);
    }, []);
    const window = useWindowDimensions();
    const win = isClient ? window :
        {
            fontScale: 1,
            height: 218,
            scale: 1,
            width: 1349,
        }
    tw.setWindowDimensions(win);
    tw.setFontScale(win.fontScale);
    tw.setPixelDensity(win.scale === 1 ? 1 : 2);
    tw.setColorScheme(useColorScheme());
}