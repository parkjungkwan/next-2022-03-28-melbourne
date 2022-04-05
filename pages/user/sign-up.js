import axios from "axios"
import { useState } from "react"

export default function SignUp(){
    const [inputs, setInputs] = useState({})
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target 
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('',inputs).then(res=>{}).catch(err=>{})
    }


    return (<><h1>회원가입폼</h1>
    <form >
  
    <div>
    <label><b>사용자 ID</b></label>
    <input type="text" name='username' /><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password'/><br />

    <label><b>이름</b></label>
    <input type="text" name='name' /><br />

    <label><b>전화번호</b></label>
    <input type="text" name='telephone' /><br />

    <button >전 송</button><button>취 소</button><br />
    </div>
    <div>
    </div>
    </form>
    </>)
}