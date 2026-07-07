import { HomeNav } from "../../components/navbar/HomeNav"

function Login() {

  return (
    <>
            <div className='header'> <HomeNav /></div>
            <div className='body'><h2>This is Login Page</h2></div>
            <div className='footer'> <div>© Astracare</div>
                <div><h2>About</h2>
                    <p>this is about astracare
                    </p></div>
                <div><h2>Contact</h2>
                    <p>this is contact details
                    </p></div>
            </div>
        </>
  )
}

export default Login