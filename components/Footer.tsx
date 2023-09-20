
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-100 text-gray-600 font-light py-5">
      <div className="footer-content flex justify-between items-center maincol">
        <p>&copy; {currentYear} Darel Bvcr. All rights reserved.</p>
        <div className="flex space-x-4 items-center">
          <p className="text-sm">Contact: +385914200355</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
