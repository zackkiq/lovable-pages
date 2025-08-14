
const Header = () => {
  console.log("Header component rendering");
  
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img 
              src="/lovable-uploads/348bdbf8-9c79-49e8-b279-8d062507f068.png" 
              alt="KonstructIQ" 
              className="h-10"
            />
            <div className="text-sm text-gray-500 hidden sm:block">In partnership with</div>
            <img 
              src="/lovable-uploads/34316b32-2d57-484d-8c62-3ac8d835e69e.png" 
              alt="National Funding XPRS" 
              className="h-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
