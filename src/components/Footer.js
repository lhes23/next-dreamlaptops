const Footer = () => {
  return (
    <div className="p-4 text-center">
      <span>Dream Laptops</span> ||{" "}
      <span>&copy;Copyright All Rights Reserved</span> ||{" "}
      {new Date().getFullYear()}
    </div>
  );
};
export default Footer;
