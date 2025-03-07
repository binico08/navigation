import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useConstants, useTheme, useLanguage } from '../constants'; // Adjusted import paths as necessary
import RoundButton from '../components/RoundButton'; // Assuming this is a custom button component

const Login: React.FC = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigation = useNavigation();
  const constants = useConstants();
  const theme = useTheme();
  const language = useLanguage();

  const backButton = () => {
    navigation.goBack();
  };

  const submitButton = () => {
    navigation.navigate('Home' as never); // Type assertion to avoid TypeScript error
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <TouchableOpacity onPress={backButton}>
        <MaterialIcon name="arrow-left" size={30} color="#000" style={style.backIcon} />
      </TouchableOpacity>
      <ScrollView>
        <View style={style.container}>
          <View style={style.topContainer}>
            <Text style={style.title}>{language.labelLogin}</Text>
          </View>
          <View style={style.childContainer}>
            <Text style={style.inputLabel}>{language.labelUser}</Text>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[style.inputContainer, { borderBottomColor: theme.inputBorderColor, color: theme.textColor }]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={language.userPlaceholder}
              value={username} // Controlled input for username
              onChangeText={setUsername} // Update state on change
            />
          </View>
          <View style={style.childContainer}>
            <Text style={style.inputLabel}>{language.labelPass}</Text>
          </View>
          <View style={style.childContainer}>
            <TextInput
              style={[style.inputContainer, { borderBottomColor: theme.inputBorderColor, color: theme.textColor }]}
              placeholderTextColor={theme.lightTextColor}
              placeholder={language.passPlaceholder}
              secureTextEntry={true}
              value={password} // Controlled input for password
              onChangeText={setPassword} // Update state on change




























































            />
          </View>
          <View style={style.childContainer}>
            <Text style={style.forgotPassword} onPress={() => { alert("Password recovery functionality to be implemented.") }}>{language.labelForget}</Text>
          </View>
          <RoundButton label={language.labelSubmit} buttonStyle={{ minWidth: 230 }} onPress={submitButton} />
          <View style={style.childContainer}>
            <Text style={style.forgotPassword}>{language.labelChoice}</Text>
          </View>
          <View style={style.childContainer}>
            <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.googleColor }]}>
              <Icon name="google" size={30} color={theme.highlightTextColor} style={style.Icon} onPress={() => { alert("google") }} />
            </View>
            <View style={[style.iconContainer, { shadowColor: theme.labelBgColor, backgroundColor: theme.facebookColor }]}>
              <Icon name="facebook" size={30} color={theme.highlightTextColor} style={style.Icon} onPress={() => { alert("facebook") }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: "center",
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    borderRadius: 6,
    margin: 12,
    minWidth: 50,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
});

export default Login;
