/** @format */

import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");

function HomeScreen(props) {
  const [tabList, setTabList] = useState([
    {
      id: 0,
      name: "Chair",
      title: "chairs",
      productList: [
        {
          productId: 1,
          productName: "Chair Green Colour",
          price: 10.0,
          image: require("../assets/green_chair.png"),
        },
        {
          productId: 2,
          productName: "Chair Peach Colour",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 3,
          productName: "Chair White Colour",
          price: 10.0,
          image: require("../assets/white_chair.png"),
        },
      ],
    },
    {
      id: 1,
      name: "Cupboard",
      title: "cupboards",
      productList: [
        {
          productId: 4,
          productName: "Product 4",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 5,
          productName: "Product 5",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 6,
          productName: "Product 6",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
      ],
    },
    {
      id: 2,
      name: "Table",
      title: "tables",
      productList: [
        {
          productId: 7,
          productName: "Product 7",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 8,
          productName: "Product 8",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 9,
          productName: "Product 9",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
      ],
    },
    {
      id: 3,
      name: "Accessories",
      title: "accessories",
      productList: [
        {
          productId: 10,
          productName: "Product 10",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 11,
          productName: "Product 11",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
        {
          productId: 12,
          productName: "Product 12",
          price: 10.0,
          image: require("../assets/red_chair.png"),
        },
      ],
    },
  ]);

  const [selectedTab, setSelectedTab] = useState({
    id: 0,
    name: "Chair",
    title: "chairs",
    productList: [
      {
        productId: 1,
        productName: "Chair Green Colour",
        price: 10.0,
        image: require("../assets/green_chair.png"),
      },
      {
        productId: 2,
        productName: "Chair Peach Colour",
        price: 10.0,
        image: require("../assets/red_chair.png"),
      },
      {
        productId: 3,
        productName: "Chair White Colour",
        price: 10.0,
        image: require("../assets/white_chair.png"),
      },
    ],
  });

  const Headerbar = () => {
    return (
      <View style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/menu_icon.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/cart_icon.png")}
              style={{ width: 25, height: 25 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ScrollableTabs = ({ tabList, selectedTab, onPress }) => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => onPress(item)}
          style={{ marginHorizontal: 20, marginTop: 10 }}
        >
          <Text style={{ fontSize: 20, color: "grey" }}>{item.name}</Text>

          {selectedTab.id == item.id && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  borderRadius: 5,
                  width: 10,
                  height: 10,
                  backgroundColor: "blue",
                }}
              ></View>
            </View>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  const ScrollableCards = ({ productList }) => {
    const Cards = ({ item }) => {
      return (
        <TouchableOpacity>
          <View>
            <Image
              style={{
                width: width / 2,
                height: height / 2,
                margin: 20,
                borderRadius: 20,
              }}
              source={item.image}
              resizeMode="cover"
            />
            <View>
              <Text>Furniture</Text>
              <Text>{item.productName}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={productList}
          renderItem={Cards}
          keyExtractor={(item) => item.productId}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Headerbar />

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>Collection of</Text>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>
          {selectedTab.title}
        </Text>
      </View>

      <ScrollableTabs
        tabList={tabList}
        selectedTab={selectedTab}
        onPress={(item) => setSelectedTab(item)}
      />
      <View style={{ flex: 1 }}>
        <ScrollableCards productList={selectedTab.productList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowRadius: 5.62,
    elevation: 9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default HomeScreen;
