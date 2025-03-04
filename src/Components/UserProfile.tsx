import { useParams } from "react-router-dom";

const UserProfile = () => {
	const {id} = useParams();
	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		bio: "Software developer at XYZ Company",
	};

	return (
		<div>
			<h1>{user.name}</h1>
			<p>ID: {id}</p>
			<p>Email: {user.email}</p>
			<p>Bio: {user.bio}</p>
		</div>
	);
};

export default UserProfile;
