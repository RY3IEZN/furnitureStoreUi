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

function HomeScreen({ navigation }) {
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
                  backgroundColor: "black",
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsScreen", { itemInfo: item })
          }
        >
          <View>
            <Image
              style={{
                width: width / 1.9,
                height: height / 2,
                margin: 20,
                borderRadius: 20,
              }}
              source={item.image}
              resizeMode="cover"
            />
            <View
              style={{
                position: "absolute",
                top: 30,
                left: "12%",
                right: "10%",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontSize: 22 }}>
                Furniture
              </Text>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
                {item.productName}
              </Text>
            </View>
            <View
              style={{
                borderRadius: 15,
                position: "absolute",
                bottom: 30,
                left: 30,
                margin: 10,
                backgroundColor: "lightgrey",
                padding: 10,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 20 }}>
                ${item.price.toFixed(2)}
              </Text>
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

  const PromotionCard = () => {
    return (
      <>
        <View style={[styles.promocard, styles.shadow]}>
          {/* image */}

          <View
            style={{
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: "lightgrey",
            }}
          >
            <Image
              source={require("../assets/sofa.png")}
              style={{ height: 50, width: 50 }}
            />
          </View>

          {/* text */}

          <View style={{ margin: 30 }}>
            <Text style={{ fontWeight: "700", fontSize: 20 }}>
              Special Order
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15 }}>
              Adding to your Cart
            </Text>
          </View>

          {/* button */}

          <View style={{ margin: 30 }}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                width: 40,
                borderRadius: 10,
                backgroundColor: "#a6c13c",
              }}
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <Image
                style={{ width: "50%", height: "50%" }}
                source={require("../assets/chevron_icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
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

      <View>
        <PromotionCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promocard: {
    flexDirection: "row",
    margin: 20,
    height: 110,
    borderRadius: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
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
