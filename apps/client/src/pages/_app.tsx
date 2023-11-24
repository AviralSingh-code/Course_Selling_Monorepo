import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { Appbar } from "ui/Appbar";
import { userEmailState, userState } from 'store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
export default function App({ Component, pageProps }: AppProps) {
  
  return <RecoilRoot>
    <HeaderComponent Component={Component} pageProps={pageProps}></HeaderComponent>
    
  </RecoilRoot>
}

function HeaderComponent({ Component, pageProps })
{
  const userStateValue = useRecoilValue(userEmailState);
  const setUserState = useSetRecoilState(userState);
  const router = useRouter();

  // if(!userStateValue)
  // {
  //   return (
  //     <div>
  //       Loading....
  //       <InitUser></InitUser>
  //     </div>
  //   );
  // }
  // else
  // {
    return ( 
      <div>
        <InitUser></InitUser>
        <Appbar 
          title={"EduWaveX"} 
          userState={userStateValue}
          onSignupParent={()=>{
            router.push("/signup");
          }}
          onLoginParent={()=>{
            router.push("/login");
          }}
          onLogoutParent={()=>{
            localStorage.setItem("token", "");
            setUserState({
              isLoading: false,
              userEmail: null
            });
            router.push("/");
          }}
          onAddCourseParent={()=>{
            router.push("/addcourse");
          }}></Appbar> 
          <Component {...pageProps} />
      </div>
      );
  }
// }


function InitUser()
{
  const setUser = useSetRecoilState(userState);
  const init = async()=>{
    try{
      const response = await axios.get('/api/auth/me',{
        headers:{
          "Content-Type": "application/json",
          "authorization": "Bearer " + localStorage.getItem("token")
        }
      })

      if(response.data.user)
      {
        setUser({
          isLoading: false,
          userEmail: response.data.user.username
        })
      }
      else
      {
        setUser({
          isLoading: false,
          userEmail: null
        })
      }
    }
    catch(e)
    {
      setUser({
        isLoading: false,
        userEmail: null
      })
    }
  };

  useEffect(()=>{
    init();
  }, []);

  return <div></div> //returns empty div
}