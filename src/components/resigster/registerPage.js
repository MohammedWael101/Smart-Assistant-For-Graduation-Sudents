import './registerPage.css'

export default function RegisterPage(){
    return (
        <div className='main d-flex flex-row mb-3'>
            <div className="sidebar">
            <a className="navbar-brand ms-5" href="#">GradStud</a>
            </div>
            <form className='regForm'>
                <div className='d-flex flex-row mb-3 warp'>
                <p className='title'>Register</p>
                </div>
                <div className='row'>
                <div class="mb-3 col-6 pe-5">
                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Last name</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <div className='row'>
                <div class="mb-3 col-6 pe-5">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">ID</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <div className='row'>
                <div class="mb-3 col-6 pe-5">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                </div>
                <a href='/' className="btn regButton btn-primary ms-5 mt-5">Register</a>
</form>
        </div>


    )
}