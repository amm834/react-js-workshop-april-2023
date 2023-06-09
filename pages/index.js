import React, {useContext, useEffect} from 'react';
import {AuthContext} from "@/contexts/AuthContext";
import {useRouter} from "next/router";

const Home = () => {
    const {isAuthenticated} = useContext(AuthContext)
    const router = useRouter()


    useEffect(() => {
        if(isAuthenticated){
            router.push('/dashboard')
        }
    },[])

    return (
        <div>
            Home page
        </div>
    );
};

export default Home;
