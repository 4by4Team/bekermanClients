import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");
        if (token) {
            sessionStorage.setItem("token", token);
            // Optionally: fetch user info here and save firstName, etc.
            navigate("/"); // Redirect to home or profile
        } else {
            // handle error
            navigate("/login");
        }
    }, [navigate]);

    return <div>מתחבר עם Google...</div>;
};

export default GoogleCallback;
