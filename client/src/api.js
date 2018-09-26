const API_URL = 'http://localhost:3000';

export const fetchUsers = () => fetch(`${API_URL}/users`).then(r => r.json())

export const addUser = (user) => fetch(`${API_URL}/users`, { method: 'POST', body: JSON.stringify(user) }).then(r => r.json())

export const deleteUser = (id) => fetch(`${API_URL}/users/${id}`, { method: 'DELETE' }).then(r => r.json())

export const editUser = (id, data) =>  fetch(`${API_URL}/users/${id}`, { method: 'PATCH', body: JSON.stringify(data) }).then(r => r.json())
