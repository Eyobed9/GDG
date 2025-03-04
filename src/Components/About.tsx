export default function About() {
  const aboutInfo = {
    title: "About Us",
    description: "We are a company dedicated to providing the best services to our customers."
  };

  return (
    <div>
      <h1>{aboutInfo.title}</h1>
      <p>{aboutInfo.description}</p>
    </div>
  );
};
