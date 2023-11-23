import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { Appbar } from "ui/Appbar";
import { userEmailState, userState } from 'store';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <HeaderComponent></HeaderComponent>
    <Component {...pageProps} />
  </RecoilRoot>
}

function HeaderComponent()
{
  const userStateValue = useRecoilValue(userEmailState);
  const setUserState = useSetRecoilState(userState);
  const router = useRouter();
  return ( <Appbar 
              title={"EduWaveX"} 
              userState={userStateValue}
              onSignupParent={()=>{
                router.push("/signup");
              }}
              onLoginParent={()=>{
                router.push("/login");
              }}
              onLogoutParent={()=>{
                setUserState({
                  isLoading: false,
                  userEmail: null
                });
                router.push("/");
              }}></Appbar> );
}