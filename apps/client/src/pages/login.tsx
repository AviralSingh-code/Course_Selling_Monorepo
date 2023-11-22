import axios from "axios";
import { useRouter } from "next/navigation";
import { Login } from "ui/Login";
export default function LoginPage()
{
    const router = useRouter();
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
                router.push("/courses");
            }
        }}></Login>
    </div>
}