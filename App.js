/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import ReactNativeAN from 'react-native-alarm-notification';

const fireDate = ReactNativeAN.parseDate(new Date(Date.now() + 5000)); // set the fire date for 1 second from now
import DatePicker from './DatePicker';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const alarmNotificationData = {
  title: 'My Notification Title',
  message: 'My Notification Message',
  channel: 'my_channel_id',
  small_icon: 'ic_launcher',
  has_button: true,
  use_big_text: true,
  volume: 1,
  // You can add any additional data that is important for the notification
  // It will be added to the PendingIntent along with the rest of the bundle.
  // e.g.
  data: {foo: 'bar'},
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    async function initAlarm() {
      //Schedule Future Alarm
      const alarm = await ReactNativeAN.scheduleAlarm({
        ...alarmNotificationData,
        fire_date: fireDate,
      });
      console.log(alarm); // { id: 1 }
    }
    // initAlarm();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{margin: 5}}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <DatePicker />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
