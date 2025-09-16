import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            const params = new URLSearchParams(window.location.search);
            const token = params.get("token");
            if (token) {
                sessionStorage.setItem("token", token);
                // Fetch user info from backend using token
                fetch(`${import.meta.env.VITE_API_URL.replace('/api', '')}/api/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.user?.firstName) {
                            sessionStorage.setItem("firstName", data.user.firstName);
                        }
                        // Optionally save more user data
                        navigate("/");
                    })
                    .catch(() => {
                        navigate("/");
                    });
            } else {
                console.log("failed:");
                alert("failed to login with google");
                navigate("/login");
            }
        }
    }, [navigate]);

    return <div>מתחבר עם Google...</div>;
};

export default GoogleCallback;
