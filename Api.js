import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";

const Api = () => {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const todos = await result.json();
    setData(todos);
  };
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text className="bg-blue-500 p-2 text-center sticky top-0   text-2xl font-semibold text-white ">
          Dummy User Data
        </Text>
        {data.length ? (
          data.map((item) => {
            return (
              <View key={item.id} className="p-2 bg-gray-200 my-2 rounded">
                <Text className="text-center p-1 rounded-md bg-red-400 text-white font-bold text-xl">
                  {" "}
                  <Text className="">User ID: </Text> {item.id}{" "}
                </Text>
                <Text>
                  {" "}
                  <Text className="text-blue-700  font-semibold text-xl">
                    {" "}
                    Name:{" "}
                  </Text>{" "}
                  {item.name}{" "}
                </Text>
                <Text>
                  <Text className="text-blue-700  font-semibold text-xl">
                    User-Name:{" "}
                  </Text>{" "}
                  {item.username}{" "}
                </Text>
                <Text>
                  {" "}
                  <Text className="text-blue-700  font-semibold text-xl">
                    Email:{" "}
                  </Text>{" "}
                  {item.email}{" "}
                </Text>

                <Text>
                  {" "}
                  <Text className="text-blue-700  font-semibold text-xl">
                    City:{" "}
                  </Text>{" "}
                  {item.address.city}{" "}
                </Text>
                <Text>
                  {" "}
                  <Text className="text-blue-700  font-semibold text-xl">
                    zipcode:{" "}
                  </Text>{" "}
                  {item.address.zipcode}{" "}
                </Text>
                <Text>
                  <Text className="text-blue-700  font-semibold text-xl">
                    Street:{" "}
                  </Text>{" "}
                  {item.address.street}{" "}
                </Text>
              </View>
            );
          })
        ) : (
          <Text>No data to Display</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Api;
