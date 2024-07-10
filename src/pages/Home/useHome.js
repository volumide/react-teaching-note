import { useState } from "react";

const useHome = () => {
    const [form, setForm] = useState({});
    const handleEvent = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = () => {
        console.log(form["email"]);
    };
    return { handleEvent, submit };
};

export default useHome;
