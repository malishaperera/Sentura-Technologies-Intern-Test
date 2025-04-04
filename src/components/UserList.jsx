import React, { useEffect, useState } from "react";
import { listUsers } from "../services/weavyService";

const UserList = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await listUsers();
                console.log("API Response:", response.data);
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;