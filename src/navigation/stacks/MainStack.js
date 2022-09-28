import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, StoryScreen} from '../../screens';

const Stack = createStackNavigator();
const defaultScreenOption = {
  headerShown: false,
};

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={defaultScreenOption}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={defaultScreenOption}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
