import { useRouter } from 'next/router';
import { Signup } from 'ui/Signup';
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from 'store';
export default function SignupPage()
{
    const router = useRouter();
    const setUserState = useSetRecoilState(userState);
    return <div>
        <Signup onClick={async (username, password) => {
            const response = await axios.post("/api/admin/signup", {
                username: username,
                password: password
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let data = response.data;
            if(!data.token)
            {
                router.push('/oopssignup');
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
        }} />
    </div>
}