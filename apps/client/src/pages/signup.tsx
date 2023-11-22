import { useRouter } from 'next/router';
import { Signup } from 'ui/Signup';
import axios from "axios";
export default function SignupPage()
{
    const router = useRouter();
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
                router.push("/courses");
            }
        }} />
    </div>
}