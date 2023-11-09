function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, ActivityIndicator } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
function Section(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var isDarkMode = useColorScheme() === 'dark';
  return /*#__PURE__*/React.createElement(View, {
    style: styles.sectionContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.sectionTitle, {
      color: isDarkMode ? Colors.white : Colors.black
    }]
  }, title), /*#__PURE__*/React.createElement(Text, {
    style: [styles.sectionDescription, {
      color: isDarkMode ? Colors.light : Colors.dark
    }]
  }, children));
}
function App() {
  var isDarkMode = useColorScheme() === 'dark';
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    apiData = _useState4[0],
    setApiData = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };
  var handleButtonPress = function handleButtonPress() {
    // Show the loading indicator
    setLoading(true);

    // Make an API call (replace with your API endpoint)
    // Make an API call
    fetch('https://v2.jokeapi.dev/joke/Programming').then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(function (data) {
      // Hide the loading indicator
      setLoading(false);
      console.log(data);
      // Set the API data in the state
      setApiData(data);
    })["catch"](function (err) {
      // Hide the loading indicator and handle the error
      setLoading(false);
      setError(err.message);
    });
  };
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    style: backgroundStyle
  }, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: isDarkMode ? 'light-content' : 'dark-content',
    backgroundColor: backgroundStyle.backgroundColor
  }), /*#__PURE__*/React.createElement(ScrollView, {
    contentInsetAdjustmentBehavior: "automatic",
    style: backgroundStyle
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Step One"
  }, "Edit ", /*#__PURE__*/React.createElement(Text, {
    style: styles.highlight
  }, "App.tsx"), " to change this screen and then come back to see your edits."), /*#__PURE__*/React.createElement(Button, {
    title: "Start Functionality",
    onPress: handleButtonPress,
    disabled: loading
  }), loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "large",
    color: isDarkMode ? 'white' : 'black'
  }), error && /*#__PURE__*/React.createElement(Text, null, "Error: ", error), apiData && /*#__PURE__*/React.createElement(Text, null, "API Data: ", JSON.stringify(apiData)))));
}
var styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});
export default App;