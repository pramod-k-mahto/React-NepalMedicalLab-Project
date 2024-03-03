import './Login.css';
function Login() {
    return (
        <div>

            <div className="div1">
                {/* <form> */}
                    <h1>Login From</h1>
                    <input type="text" className="input1" placeholder="Username"/>
                    <br/>
                    <br/>
                    <input type="password" name="" className="input1" placeholder="Password"/>
                    <br/>
                    <input type="submit" value="Login" className="submit"/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <span>Forget password? Click Here</span>
                    <br/>
                    <span>Don't have an account? Sign Up</span>
                {/* </form> */}


                {/* <div className="div2"></div>
                <div className="div3"></div>
                <div className="div4"></div>
                <div className="div5"></div>
                <div className="div6"></div>

                <div className="div7"></div>

                <div className="div8"></div> */}

            </div>
        </div>
    )
}

export default Login;