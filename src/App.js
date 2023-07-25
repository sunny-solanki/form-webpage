import './app.css';


function App() {
  return (
    <>
      <div className="main_div">
        <div className="box">
            <h1>
                LOGIN FORM
            </h1>
            <form method=" " action=" ">
                <div className="inputBox">
                    <input type="text" name="username" autocomplete="off" required />
                    <label>Username</label>
                </div>
                <div className="inputBox">
                    <input type="password" name="password" autocomplete="off" required />
                    <label>Password</label>
                </div>
                <input type="submit" name="" value="login" />
                <div className="remember-forget">
                    <label> <input type="checkbox" /> Remember me </label>
                    <a href="www.google.com" target="_blank"> Forgot Password? </a>
                </div>


                <div className="register-link">
                    <p> Don't have an account? <a href="www.google.com" target="_blank"> Register </a></p>
                </div>


            </form>
        </div>
    </div>
    </>
  );
}

export default App;
