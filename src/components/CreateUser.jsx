
import React, { useState } from "react";
import { createUser } from "../services/weavyService";

const CreateUser = () => {
    const [formData, setFormData] = useState({ name: "", email: "", uid: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(formData);
        alert("User Created!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;
