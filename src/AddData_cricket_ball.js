import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import { db } from "../Config";
import { ref, set } from 'firebase/database';

const AddData = () => {
    const [gForceX, setgForceX] = useState('');
    const [gForceY, setgForceY] = useState('');
    const [gForceZ, setgForceZ] = useState('');
    const [rotX, setrotX] = useState('');
    const [rotY, setrotY] = useState('');
    const [rotZ, setrotZ] = useState('');
    const [timeStamp, setTimeStamp] = useState('');

    // function to add data to the firebase realtime db
    const dataAddOn = () => {
        set(ref(db, 'records/' + timeStamp), {
            gForceX: gForceX,
            gForceY: gForceY,
            gForceZ: gForceZ,
            rotX: rotX,
            rotY: rotY,
            rotZ: rotZ,
            timeStamp: timeStamp,
        }).then(r => {
            console.log(gForceX, gForceY, timeStamp);
        });
        setgForceX('');
        setgForceY('');
        setgForceZ('');
        setrotX('');
        setrotY('');
        setrotZ('');
        setTimeStamp('');
    }

    return (
        <View>
            <Text>Add data</Text>
            <TextInput
                placeholder='gForceX'
                value={gForceX}
                onChangeText={(text => setgForceX(text))}
            />
            <TextInput
                placeholder='gForceY'
                value={gForceY}
                onChangeText={(text => setgForceY(text))}
            />
            <TextInput
                placeholder='gForceZ'
                value={gForceZ}
                onChangeText={(text => setgForceZ(text))}
            />

            <TextInput
                placeholder='rotX'
                value={rotX}
                onChangeText={(text => setrotX(text))}
            />
            <TextInput
                placeholder='rotY'
                value={rotY}
                onChangeText={(text => setrotY(text))}
            />
            <TextInput
                placeholder='rotZ'
                value={rotZ}
                onChangeText={(text => setrotZ(text))}
            />
            <TextInput
                placeholder='timeStamp'
                value={timeStamp}
                onChangeText={(text => setTimeStamp(text))}
            />

            <Button
                title='Submit'
                onPress={dataAddOn}
            />
        </View>
    )
}

export default AddData;