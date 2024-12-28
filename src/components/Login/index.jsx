
import { useState } from 'react';
import './index.css';

const Login = ()=>{

    const [allValues,setValues] = useState({

        username : "",
        password : "",
        errormsg : "",

    })

    const onSubmitData = async(e)=> {

        e.preventDefault();

        const api = 'https://apis.ccbp.in/login';

        const userDetails = {

            username : allValues.username,
            password : allValues.password,

        }
        const options = {

            method : 'post',
            body : JSON.stringify(userDetails),

        }

        try{

            const response = await fetch(api,options);

            const data = await response.json();

            if(response.ok === true)(

                setValues({...allValues,errormsg : ""})

            )
            else(

                setValues({...allValues,errormsg : data.error_msg})

            )


        }catch(error){

            console.log(error);

        }


    }
    return(

        <div className='login-maincont'>

                <form onSubmit = {onSubmitData} className = 'form-cont'>

                    <div  className='form-group'>
                        <label htmlFor ='exampleInputEmail1'>Username</label>
                        <input type='text' onChange={(e)=>{setValues({ ...allValues,username: e.target.value })}} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'/>
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your username with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Password</label>
                        <input type='password' onChange={(e)=>{setValues({...allValues,password : e.target.value})}} className='form-control' id='exampleInputPassword1'/>
                    </div>
                    <button type='submit' className='btn btn-dark btn-block'> Login </button>
                    <br>
                    </br>
                    <p className='text-danger'>{allValues.errormsg}</p>
                </form>

        </div>
        
    )
}
export default Login;