import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>Person1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 0,
    alignSelf: "flex-start",
    fontSize: 16,
    fontFamily: "Nunito-Regular"
  }
})
