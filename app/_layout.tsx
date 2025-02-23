import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#25292e',
        tabBarInactiveTintColor: '#b4b4b4',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#b4b4b4',
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="home" color={color} size={30} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }: { color: string }) => <Ionicons name="person" color={color} size={30} />,
        }}
      />
    </Tabs>
  );
}
