import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="details/details" />
      <Stack.Screen name="details/[id]" />
    </Stack>
  );
}