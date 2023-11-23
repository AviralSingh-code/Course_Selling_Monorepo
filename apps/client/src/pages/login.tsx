import axios from "axios";
import { useRouter } from "next/navigation";
import { userState } from "store";
import { Login } from "ui/Login";
import { useSetRecoilState } from "recoil";
export default function LoginPage()
{
    const router = useRouter();
    const setUserState = useSetRecoilState(userState);
    return <div>
        <Login onClick={async (username, password) => {
            const respone = await axios.post("/api/admin/login",{},{
                headers:{
                    "Content-Type": "application/json",
                    "username": username,
                    "password": password
                }
            });
            let data = respone.data;
            if(!data.token)
            {
                router.push('/oopsLogin');
            }
            else{
                localStorage.setItem("token", data.token);
                setUserState({
                    isLoading: false,
                    userEmail: username
                });
                // router.push("/courses");
                router.push("/");
            }
        }}></Login>
    </div>
}