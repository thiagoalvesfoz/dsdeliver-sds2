import React from "react";
import { ScrollView, StyleSheet } from "react-native";

//components
import Header from "../../components/header";
import OrderCard from "../../components/order-card";

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "5%",
  },
});
