
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {currentYear} All rights reserved. Developed with ❤️ by{" "}
          <a
            href="https://chandankrv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 no-underline"
          >
            Chandan Kumar
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
