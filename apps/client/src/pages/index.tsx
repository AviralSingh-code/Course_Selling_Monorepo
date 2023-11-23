import { userEmailState } from "store"
import { Card } from "ui/card"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { userState } from "store";


export default function Home() {
  const userStateValue = useRecoilValue(userEmailState);
  const router = useRouter();
  const setUserState = useSetRecoilState(userState);
  return (
    <>
      <Card 
        userState={userStateValue} 
        onBrowserClickParent={()=>{
        router.push("/courses");
        }}
        onLogoutClickParent={()=>{
          setUserState({
            isLoading: false,
            userEmail: null
          });
          router.push("/");
        }}
        onLoginParent={()=>{
          router.push("/login");
        }}
        onSignupParent={()=>{
          router.push("/signup");
        }}
      ></Card>
    </>
  )
}
