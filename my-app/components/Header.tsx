import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-white">RENTAL</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-white hover:text-blue-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
            About
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
            Features
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
            Pricing
          </Link>
          <Link href="#" className="text-white/80 hover:text-white transition-colors font-medium">
            Booking History
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="hidden sm:flex border-white/30 text-black cursor-pointer hover:bg-white/10">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-rental-primary-dark cursor-pointer text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;