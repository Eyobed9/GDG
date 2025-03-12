import { useParams } from "react-router-dom";
import useAuth  from "../Hooks/useAuth";

const UserProfile = () => {
	const { loggedIn } = useAuth();
	const { id } = useParams();

	const user = {
		name: "John Doe",
		email: "john.doe@example.com",
		bio: "Software developer at XYZ Company",
	};

	return (
		<div>
			<h2>{loggedIn ? `Welcome, ${user.name}`: "Please login to view your profile"}</h2>
			{loggedIn && 
			<><br/><h3>{user.name}</h3>
			<p>ID: {id}</p>
			<p>Email: {user.email}</p>
			<p>Bio: {user.bio}</p></>}
		</div>
	);
};

export default UserProfile;
