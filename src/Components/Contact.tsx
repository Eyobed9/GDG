export const Contact = () => {
	const contactInfo = {
		phone: "+1234567890",
		email: "contact@example.com",
		address: "123 Main St, Anytown, USA",
	};

	return (
		<div>
			<h1>Contact Us</h1>
			<p>Phone: {contactInfo.phone}</p>
			<p>Email: {contactInfo.email}</p>
			<p>Address: {contactInfo.address}</p>
		</div>
	);
};
