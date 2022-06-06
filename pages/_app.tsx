import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-component">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
