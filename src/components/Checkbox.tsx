import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BORDER_RADIUS, TYPOGRAPHY_SCALES } from "../constants/theme";

interface CheckboxProps {
    children?: React.ReactNode
}

function Checkbox({ children }: CheckboxProps): React.JSX.Element {
    const [checked, setChecked] = useState<boolean>(true);

    return <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={() => setChecked(!checked)} activeOpacity={0.7}>
            {checked && <Text style={styles.tick}>✔</Text>}
        </TouchableOpacity>
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        top: 24,
        flexDirection: 'row'
    },
    box: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: BORDER_RADIUS.xs.value,
    },
    tick: {
        fontSize: TYPOGRAPHY_SCALES.Caption.size,
        fontWeight: TYPOGRAPHY_SCALES.Caption.weight,
        lineHeight: TYPOGRAPHY_SCALES.Caption.lineHeight,
        textAlign:'center'
    }
})

export default Checkbox;