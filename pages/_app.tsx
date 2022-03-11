import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

import GraphQLProvider from "../apollo";
import { store } from "../redux/store";
import RouteGuard from "../components/route-guard";
import { RootState } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      {/* <RouteGuard> */}
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
      {/* </RouteGuard> */}
    </ReduxProvider>
  );
}

export default MyApp;
