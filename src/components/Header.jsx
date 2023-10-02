import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-evenly p-6 bg-slate-100'>
            <div>
                <h2>Login Page</h2>
            </div>
            <div>
                <NavLink className='py-2 px-5 mx-2 ' to='/'>Home</NavLink>
                <NavLink className='py-2 px-5 mx-2 hover:border hover:rounded-lg' to='/signin'>SignIn</NavLink>
                <NavLink className='py-2 px-5 mx-2 hover:border hover:rounded-lg' to='/signup'>SignUp</NavLink>
            </div>
        </div>
    );
};

export default Header;