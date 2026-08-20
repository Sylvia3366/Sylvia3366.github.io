export function Navbar() {
    return (
      <nav className="flex items-center justify-between bg-neutral-800 p-4 text-white">
        {/* Logo or Name */}
        <div className="font-bold">Sylvia Lin</div>
        
        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="https://www.instagram.com/ainuoqiu/" className="hover:text-gray-300">Instagram</a></li>
          <li><a href="https://github.com/Sylvia3366" target="_blank" className="hover:text-gray-300">GitHub</a></li>
          <li><a href="https://linkedin.com" target="_blank" className="hover:text-gray-300">LinkedIn</a></li>
        </ul>
      </nav>
    );
  }