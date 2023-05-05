import {View} from "react-native";
import AuthBanner from "../../components/AuthBanner";
import CompleteSignUpForm from "../../components/CompleteSignUpForm";


export default function CompleteSignUpScreen() {
  return <View className="flex-1 space-y-24 bg-white">
    <View>
      <AuthBanner/>
    </View>

    <View>
      <CompleteSignUpForm/>
    </View>
  </View>
}
