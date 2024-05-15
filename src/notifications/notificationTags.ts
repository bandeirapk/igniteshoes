import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "bandeirapk",
    user_email: "oficilbandeira@gmail.com"
  })
}