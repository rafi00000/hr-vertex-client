"use client"
import { coreContext } from "@/provider/AuthContext";
import { useContext } from "react";

const ProfilePage = () => {
    const {user}  = useContext(coreContext);
    return (
        <div>
            
        </div>
    )
};

export default ProfilePage;