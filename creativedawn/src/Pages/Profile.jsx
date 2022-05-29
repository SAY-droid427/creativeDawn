import { useNavigate, useMatch, Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';

const Profile = ({ login }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!login){
            navigate("/");
        }
    }, [login, navigate]);

    const {path, url} = useMatch();
    return (
        <div>
        <h1> Profile </h1>
        <ul>
            <li>
                <Link to ={`${url}/viewprofile`}>View Profile</Link>
            </li>
            <li>
                <Link to={`${url}/editprofile`}>Edit Profile</Link>
            </li>
        </ul>
        <BrowserRouter>
            <Routes>
                <Route path = {`${path}/viewprofile`} element={<ViewProfile />} />
                <Route path = {`${path}/editprofile`} element={<EditProfile />} />
            </Routes>
        </BrowserRouter>
            

        </div>
        
    )
}

export default Profile;
