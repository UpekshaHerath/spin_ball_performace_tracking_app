import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import { db } from "../Config";
import { ref, onValue } from 'firebase/database';

const FetchData = () => {
    const [todoData, setToDoData] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, 'posts/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            console.log(newPosts);
            setToDoData(newPosts);
        })
    }, []);

    return (
        <View>
            <Text>Fetched Data</Text>
            {
                todoData.map((item) => (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default FetchData;