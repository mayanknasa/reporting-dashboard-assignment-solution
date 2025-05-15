import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Developed by <a href="https://mayanknasa.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline transition-colors">Mayank Nasa</a> for VoicePlug</h3>
            <div className="flex space-x-4 justify-center">
              <a href="https://github.com/mayanknasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mayanknasa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} | Developed with ❤️ by <a href="https://mayanknasa.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline transition-colors">Mayank Nasa</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
