import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import { db } from "../Config";
import { ref, onValue } from 'firebase/database';
import {LineChart} from "react-native-chart-kit";

const FetchData_cricket_ball = () => {
    const [todoData, setToDoData] = useState([]);
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);

    useEffect(() => {
        const starCountRef = ref(db, 'records/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));
            // console.log(newPosts);
            const last15Records = newPosts.slice(-8);
            let xValues = [];
            let yValues = [];
            setToDoData(last15Records);
            console.log("*************************************************************");
            for (let i = 0; i < 8; i++) {
                xValues.push(last15Records[i].gForceX);
                yValues.push(last15Records[i].gForceY);
            }
            setXValues(xValues);
            setYValues(yValues);
            console.log(last15Records);
            console.log(xValues);
            console.log(yValues);
        })
    }, []);

    return (
        <View>
            <Text style={{color: "blue"}}>Fetched Data</Text>
            {
                todoData.map((item) => (
                    <View key={item.id}>
                        <Text style={{color: "red"}}>{item.gForceX}</Text>
                        <Text>{item.gForceY}</Text>
                    </View>
                ))
            }
            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: xValues,
                        datasets: [
                            {
                                data: yValues
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    // yAxisLabel="$"
                    // yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>

    )
}

export default FetchData_cricket_ball;