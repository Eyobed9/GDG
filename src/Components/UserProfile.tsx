const UserProfile = () => {
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		bio: "Software developer at XYZ Company",
	};

	return (
		<div>
			<h1>{user.name}</h1>
			<p>Email: {user.email}</p>
			<p>Bio: {user.bio}</p>
		</div>
	);
};

export default UserProfile;
