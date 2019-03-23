import { AsyncStorage } from 'react-native';

export const getLoggedInUser = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const userId = await AsyncStorage.getItem('userId');
    if (!token) throw `Authentication error. Token: ${token}.`;
    if (!userId) throw `Authentication error. UserId: ${userId}`;
    return userId;
  } catch (e) {
    console.log(e);
  }
};

export const clearUserToken = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const setUserToken = async (id, token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userId', id);
  } catch (e) {
    console.log(e);
  }
};
