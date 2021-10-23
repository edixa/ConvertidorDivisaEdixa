import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export const Convertidor = () => {
    const [origen, setOrigen] = useState('')
    const [destino, setDestino] = useState('')
    const [convertir, setConvertir] = useState(0);
    const [resultado, setResultado] = useState(0);

    const handleChangeConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        setConvertir(numero)
    }
    const handleCalcular = () => {
        if (origen === 'Dolar' && destino === 'Cordoba' ){
            const result = convertir * 35.20
            setResultado(result)
        }
        else if(origen === 'Cordoba' && destino === 'Dolar'){
            const result = convertir / 35
            setResultado(result)
        }
        else if(origen === 'Euro' && destino === 'Cordoba'){
            const result = convertir * 40.9
            setResultado(result)
        }
        else if(origen === 'Cordoba' && destino === 'Euro'){
            const result = convertir / 40.9
            setResultado(result)
        }
        else if(origen === 'Euro' && destino === 'Dolar'){
            const result = convertir * 1.16
            setResultado(result)
        }
        else if(origen === 'Dolar' && destino === 'Euro'){
            const result = convertir *  0.86
            setResultado(result)
        }
    }
    return (
        <View>
            <Text>origen</Text>
            <TextInput 
                placeholder="Ingrese el monto"
                defaultValue={origen}
                style={styles.input}
                onChangeText={setOrigen}
                />
            
            <Text>destino</Text>
            <TextInput 
                placeholder="Ingrese el monto"
                defaultValue={destino}
                maxLength={10}
                style={styles.input}
                onChangeText={setDestino}
                />
                
            <Text>Convertir</Text>
            <TextInput 
                defaultValue={convertir.toString()}
                style={styles.input}
                onChangeText={(text) => handleChangeConvertir(text) }
                />

            <Text>Resultado</Text>
            <TextInput 
                defaultValue={resultado.toString()}
                style={styles.input}
                />

            <View style={styles.button}>
            <Button
                title="Calcular"
                onPress={handleCalcular}
                color= 'blue'
             />
             </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        paddingTop:30,
        paddingLeft: 20,
        marginTop: 20,
        marginBottom:40,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'blue'
    }
})