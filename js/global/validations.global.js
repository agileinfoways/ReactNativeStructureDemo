import React, { Component } from "react";
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Slider,
  AsyncStorage,
  Alert,
  ScrollView,
  NetInfo
} from "react-native";
import GB from "./methods.global";
// import moment from 'moment';
var custom_headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
var isOnline = false;
const GlobalValidations = {
  isNetworkConnected: () => {
    if (Platform.OS == "android") {
      return new Promise((resolve, reject) => {
        NetInfo.isConnected.fetch().then(
          isConnected => {
            resolve(isConnected);
          },
          error => {
            reject(error);
          }
        );
      });
    } else {
      return new Promise((resolve, reject) => {
        NetInfo.isConnected.fetch().then(() => {
          NetInfo.isConnected.fetch().then(() => {
            NetInfo.isConnected.fetch().then(() => {
              NetInfo.isConnected.fetch().then(isConnected => {
                // isConnected is now the correct value
                resolve(isConnected);
              });
            });
          });
        });
      });
    }
  },

  isAmountFormatValid: text => {
    if (/^(?=.)([+-]?([0-9]*)(\.([0-9]{1,2}))?)$/.test(text) === false) {
      return false;
    } else {
      return true;
    }

    // return false;
  },

  isFieldEmpty: text => {
    text.replace(/\s*$/, "");
    if (text == "") {
      return true;
    }
    return false;
  },
  isFieldEmpty2: text => {
    // text.replace(/\s*$/,"");
    if (text == "") {
      return true;
    }
    return false;
  },

  isEmailInvalid: text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return true;
    }
    return false;
  },

  // isExpiryDateInvalid: (month, year) => {

  //     var user_input_date = moment().year(year).month(month - 1).date(1);
  //     var current_date = moment();
  //     var current_date_updated = moment().year(current_date.year()).month(current_date.month()).date(1);

  //     GB.showLog('userInputDate ==>' + String(user_input_date));
  //     var isValid = user_input_date.isSameOrAfter(current_date_updated);
  //     return !isValid;

  // },

  isTextLengthInvalid: (text, length) => {
    if (text.length < length) {
      return true;
    }
    return false;
  },
  isTwoTextInputsSame: (text1, text2) => {
    text1.replace(/\s*$/, "");
    text2.replace(/\s*$/, "");

    if (text1 === text2) {
      return true;
    }
    return false;
  },
  isZipCodeInvalid: text => {
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(text);

    if (!isValidZip) {
      return true;
    }
    return false;
  }
};

export default GlobalValidations;
