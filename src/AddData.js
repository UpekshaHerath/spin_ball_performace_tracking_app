import {useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import { db } from "../Config";
import { ref, set } from 'firebase/database';

const AddData = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // function to add data to the firebase realtime db
    const dataAddOn = () => {
        set(ref(db, 'posts/' + title), {
            title: title,
            body: body,
        }).then(r => {
            console.log("The title is : " + title);
            console.log("The body content is : " + body);
        });
        setTitle('');
        setBody('');
    }

    return (
        <View>
            <Text>Add data</Text>
            <TextInput
                placeholder='Title'
                value={title}
                onChangeText={(text => setTitle(text))}
            />
            <TextInput
                placeholder='Body'
                value={body}
                onChangeText={(text => setBody(text))}
            />
            <Button
                title='Submit'
                onPress={dataAddOn}
            />
        </View>
    )
}

export default AddData;