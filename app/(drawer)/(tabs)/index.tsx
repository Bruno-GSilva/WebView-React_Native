import { WebView } from 'react-native-webview';

export default function Home() {
  return (
    <WebView
      className="flex-1" source={{ uri: 'https://api-rick-and-morty-azfn.vercel.app/' }} />
  );
}
