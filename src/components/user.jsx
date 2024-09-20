import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../redux/actions/userActions";

const Users = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);
	const [newUser, setNewUser] = useState({
		username: "",
		email: "",
		age: "",
	});

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(addUser(newUser));
		dispatch(fetchUsers());
		setNewUser({ username: "", email: "", age: "" });
	};

	return (
		<div className="users-container">
			<div className="list-container">
				<h2>User List</h2>

				{loading && <p className="loading">Loading...</p>}
				{error && <p className="error">{error}</p>}
				{!loading && users.length === 0 && <p>No users found.</p>}

				<table className="users-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index} className="fade-in">
								<td>{user?.username}</td>
								<td>{user?.email}</td>
								<td>{user?.age}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="form-conatiner">
				<h2>Add New User</h2>
				<form onSubmit={handleSubmit} className="user-form">
					<input
						type="text"
						name="username"
						value={newUser.username}
						onChange={handleChange}
						placeholder="username"
						required
					/>
					<input
						type="email"
						name="email"
						value={newUser.email}
						onChange={handleChange}
						placeholder="Email"
						required
					/>
					<input
						type="number"
						name="age"
						value={newUser.age}
						onChange={handleChange}
						placeholder="Age"
						required
					/>
					<button type="submit">Add User</button>
				</form>
			</div>
		</div>
	);
};

export default Users;
