import { Provider } from "components/Provider";
import { PageProps, PageType } from "interfaces/common";
import App, { AppContext } from "next/app";
import "styles/style.scss";
import { getInitialData } from "util/getInitialData";

type Props = {
  Component: PageType;
  pageProps: PageProps;
};

export default function _App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return (
    <Provider initialData={pageProps.initialData}>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </Provider>
  );
}

_App.getInitialProps = async (appContext: AppContext) => {
  appContext.ctx.res?.setHeader("Cache-Control", "public, max-age=60, stale-while-revalidate=59");
  const isDataRequest = appContext.ctx.req?.url?.includes("/_next/data");

  const initialData = !isDataRequest ? await getInitialData() : undefined;
  const props = await App.getInitialProps(appContext);

  return { ...props, pageProps: { ...props.pageProps, initialData } };
};
