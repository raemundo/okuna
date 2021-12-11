import { create, useDeviceContext, useAppColorScheme } from 'twrnc';
import { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create the customized version...
const twi = create(require(`../../tailwind.config.js`)); // <- your path may differ

export const tw = (strings: TemplateStringsArray, ...values: (string | number)[]) => {
    let str = ``;
    strings.forEach((string, i) => {
        str += string + (values[i] || ``);
    });
    return StyleSheet.create({ x: twi`${str}` }).x;
};

tw.style = (...exprs) => StyleSheet.create({ x: twi.style(...exprs) }).x;
// ... and then this becomes the main function your app uses
export default twi;

export function useDeviceContextSever(tw) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    useDeviceContext(isClient ? tw : tw, { withDeviceColorScheme: false });
}