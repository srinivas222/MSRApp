import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Activityinfomation from "./src/screens/Activityinfomation";
import Cautiondeposite from "./src/screens/Cautiondeposite";
import Dietmenu from "./src/screens/Dietmenu";
import Doctorsinteraction from "./src/screens/Doctorsinteraction";
import Doctorssuggestion from "./src/screens/Doctorssuggestion";
import Doctorssuggestion1 from "./src/screens/Doctorssuggestion1";
import DoctorsSuggestion2 from "./src/screens/DoctorsSuggestion2";
//import Faq from "./src/screens/Faq";
import Faq from "./src/screens/Faq1";
import Faq2 from "./src/screens/Faq2";
import Feedback from "./src/screens/Feedback";
import HealthTracking from "./src/screens/HealthTracking";
import Healthtrackinginfo1 from "./src/screens/Healthtrackinginfo1";
import Healthtrackinginfo3 from "./src/screens/Healthtrackinginfo3";
import Homepage from "./src/screens/Homepage";
import Homepagemenu from "./src/screens/Homepagemenu";
import Homepagenotification from "./src/screens/Homepagenotification";
import Login from "./src/screens/Login";
import Newsfeed from "./src/screens/Newsfeed";
import Registrationpage from "./src/screens/Registrationpage";
import TreatmentInfo from "./src/screens/TreatmentInfo";
import Untitled2 from "./src/screens/Untitled2";
import Welcome from "./src/screens/Welcome";
import SadhakasHealthTracking from "./src/screens/SadhakasHealthTracking";
import SadhakasHealthTrackingInfo from "./src/screens/SadhakasHealthTrackingInfo";
import MyDropdown from "./src/screens/MyDropdown";
import SadhakasDoctorSuggestionInteraction from "./src/screens/SadhakasDocotorsSuggestionInformation";
import CustomBottomBar from "./src/components/customBottomBar";

const DrawerNavigation = createDrawerNavigator({
  Faq: Faq,
  Feedback: Feedback,
  
  TreatmentInfo: TreatmentInfo,
  Dietmenu: Dietmenu,
  Homepage: Homepage,
  Activityinfomation: Activityinfomation,
 
  SadhakasDoctorSuggestionInteraction : SadhakasDoctorSuggestionInteraction,
  Login: Login,
  Welcome: Welcome,
  SadhakasHealthTracking : SadhakasHealthTracking,
  Registrationpage: Registrationpage,
  SadhakasHealthTrackingInfo : SadhakasHealthTrackingInfo,
  MyDropdown : MyDropdown,
  Healthtrackinginfo3: Healthtrackinginfo3,
  Homepage: Homepage,
  Cautiondeposite: Cautiondeposite,
  
  Doctorsinteraction: Doctorsinteraction,
  Doctorssuggestion: Doctorssuggestion,
  Doctorssuggestion1: Doctorssuggestion1,
  DoctorsSuggestion2: DoctorsSuggestion2,
  //Faq: Faq,
  //Faq1: Faq1,
  Faq2: Faq2,
  
  HealthTracking: HealthTracking,
  Healthtrackinginfo1: Healthtrackinginfo1,
  Healthtrackinginfo3: Healthtrackinginfo3,
  Homepage: Homepage,
  Homepagemenu: Homepagemenu,
  Homepagenotification: Homepagenotification,
  
  Newsfeed: Newsfeed,
  
  CustomBottomBar : CustomBottomBar,
  Untitled2: Untitled2,
  
});

const StackNavigation = createStackNavigator(
  { 
     DrawerNavigation: {
       screen: DrawerNavigation
     },
    //Loginside : Loginside,
    //LeftDrawer:LeftDrawer,
    Activityinfomation: Activityinfomation,
    Cautiondeposite: Cautiondeposite,
    Dietmenu: Dietmenu,
    Doctorsinteraction: Doctorsinteraction,
    Doctorssuggestion: Doctorssuggestion,
    Doctorssuggestion1: Doctorssuggestion1,
    DoctorsSuggestion2: DoctorsSuggestion2,
    Faq: Faq,
    //Faq1: Faq1,
    //Faq2: Faq2,
    Feedback: Feedback,
    HealthTracking: HealthTracking,
    Healthtrackinginfo1: Healthtrackinginfo1,
    Healthtrackinginfo3: Healthtrackinginfo3,
    Homepage: Homepage,
    Homepagemenu: Homepagemenu,
    Homepagenotification: Homepagenotification,
    Login: Login,
    Newsfeed: Newsfeed,
    Registrationpage: Registrationpage,
    TreatmentInfo: TreatmentInfo,
    Untitled2: Untitled2,
    Welcome: Welcome,
    SadhakasHealthTracking : SadhakasHealthTracking,
    SadhakasHealthTrackingInfo : SadhakasHealthTrackingInfo,
    MyDropdown : MyDropdown,
    SadhakasDoctorSuggestionInteraction : SadhakasDoctorSuggestionInteraction,
    CustomBottomBar : CustomBottomBar
  },
  {
    headerMode: "none",
    
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {

 

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
 }
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "Bahnschrift": require("./src/assets/fonts/bahnschrift.ttf"),
      "Roboto_medium" :  require("./src/assets/fonts/roboto-medium.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
