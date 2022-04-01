/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

function DetailsScreen({ route, navigation }) {
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

  const renderInfo = () => {
    let { itemInfo } = route.params;

    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <Headerbar />

          <View
            style={{
              position: "absolute",
              top: "45%",
              left: "15%",
              borderRadius: 80,
              backgroundColor: "lightgrey",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 80,
                backgroundColor: "blue",
                width: 15,
                height: 15,
              }}
            ></View>
          </View>

          <View
            style={{
              position: "absolute",
              top: "43%",
              left: "30%",
              backgroundColor: "rgba(255,255,255,0.7)",
              width: width / 2,
              padding: 24,
              margin: 5,
              flexDirection: "row",
              borderRadius: 10,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 2 }}>
              <Text style={{ fontWeight: "500" }}>{itemInfo.productName}</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "700", color: "#59990F" }}>
                ${itemInfo.price}
              </Text>
            </View>
          </View>

          {/* footer */}
          <View
            style={{
              position: "absolute",
              bottom: "20%",
              left: 24,
              right: 24,
            }}
          >
            <Text style={{ color: "lightgrey", fontSize: 20 }}>Furniture</Text>
            <Text style={{ color: "white", fontSize: 40, fontWeight: "700" }}>
              {itemInfo.productName}
            </Text>
          </View>
        </ImageBackground>
      );
    } else {
      <View></View>;
    }
  };

  const renderFooterbar = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          backgroundColor: "white",
          width: width / 1.1,
          padding: 24,
          height: 70,
          marginHorizontal: 20,
          flexDirection: "row",
          borderRadius: 35,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/dashboard_icon.png")}
                style={{ width: 20, height: 20, tintColor: "grey" }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 50 }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: "#a6c13c",
              }}
            >
              <Image
                style={{ height: 20, width: 20, tintColor: "white" }}
                source={require("../assets/plus_icon.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            >
              <Image
                style={{ height: 20, width: 20, tintColor: "#a6c13c" }}
                source={require("../assets/user_icon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>{renderInfo()}</View>
      {renderFooterbar()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DetailsScreen;
