import './loginPage.css'

export default function LoginPage(){
    return (
        <div className='main d-flex flex-row mb-3'>
            <div className="sidebar">
            <a className="navbar-brand ms-5" href="#">GradStud</a>
            </div>
            <form>
                <div className='d-flex flex-row mb-3 warp'>
                <p className='title'>Login</p>
                </div>
                <div className='row'>
                <div class="mb-3 ">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 ">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <a href='/' type="submit" class="btn logButton btn-primary mb-5">Login</a>
                <p className='register'>Don't have an account? <a href="/register-page" class="link-underline-dark goto">Register now</a></p>
</form>    
        </div>    
    )
}