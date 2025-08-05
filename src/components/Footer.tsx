import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:Vedh.bagare@gmail.com"
                className="hover:text-maroon smooth-transition"
              >
                Vedh.bagare@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Based in Brookfield, WI</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 Pawn to Queen Chess Coaching. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;