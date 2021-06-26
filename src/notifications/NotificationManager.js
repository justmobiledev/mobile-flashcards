//import ReactNativeAN from 'react-native-alarm-notification';
import {dbGetQuizCompleted} from '../storage/storageHelper';
import * as Notifications from 'expo-notifications';

const secondsToTrigger = 60; // seconds
export const scheduleNotification = async() => {
    // First, cancel previous notifications
    Notifications.cancelAllScheduledNotificationsAsync().then(async() => {
        // Schedule new notification
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Study reminder",
                body: "Please complete at least one quiz a day.",
            },
            trigger: { seconds: secondsToTrigger },
        });
    }).catch((error) => {
        console.log('Failed to cancel notifications, ', error);
    })
}

export const runNotificationReminderCheck = () => {
    // Check if Quiz was completed
    dbGetQuizCompleted().then((completed) => {
        if (completed) {
            console.log('quiz completed');
            // Quick was completed -> cancel notifications
            Notifications.cancelAllScheduledNotificationsAsync();
        }
        else {
            // Schedule next check
            scheduleNotification();
            setTimeout(() => {
                // Run next check
                runNotificationReminderCheck();
            },120000);
        }
    }).catch((error) => {
        console.log('Failed to get Quiz completed flag, ',error);
    })
}

const createNotificationChannel =  () => {
    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'mobile-flashcards-channel',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
}

export const requestNotificationPermisssions = async() => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Notification permission not granted - unable to display notification');
      return;
    }
    else {
        createNotificationChannel();
        runNotificationReminderCheck();
    }
}

