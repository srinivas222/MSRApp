import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL1 = "http://sahakarsoft.com/";

const supportedURL2 = "http://www.savvysoft.net/";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const YoTubeLinks = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL1}>For Health Mantra Youtube Channel</OpenURLButton>
      <OpenURLButton url={supportedURL2}>For Good Health Youtube Channel</OpenURLButton>
    </View>
  );
};

export default YoTubeLinks;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});