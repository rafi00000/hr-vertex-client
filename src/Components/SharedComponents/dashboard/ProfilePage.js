"use client"
import { coreContext } from "@/provider/AuthContext";
import { useContext } from "react";

const ProfilePage = () => {
    const {user}  = useContext(coreContext);
    return (
        <div>
            <p>Welcome Back {user?.displayName}</p>
        </div>
    )
};

export default ProfilePage;