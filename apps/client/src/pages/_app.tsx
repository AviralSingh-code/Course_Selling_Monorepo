import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { Appbar } from "ui/Appbar";
import { isUserLoading } from 'store';
export default function App({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <HeaderComponent></HeaderComponent>
    <Component {...pageProps} />
  </RecoilRoot>
}

function HeaderComponent()
{
  const userState = useRecoilValue(isUserLoading);
  return ( <Appbar title={"EduWaveX"} userState={userState}></Appbar> );
}