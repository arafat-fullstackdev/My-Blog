import React from "react";
const FrontPage = () => {
  const backgroundStyle = {
    backgroundImage: `url('../../../public/image/Front.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    display: "flex", // Added to center the content
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    color: "black",
  };
  return (
    <div style={backgroundStyle}>
      <h1>Welcome Programming ERA!</h1>
    </div>
  );
};

export default FrontPage;
