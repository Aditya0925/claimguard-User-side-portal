import { Button } from "@/components/ui/button";
import { Shield, Home, FileText, Clock, Bell, User, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">claimGuard</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link to="/dashboard">
              <Button variant={isActive("/dashboard") ? "secondary" : "ghost"} className="gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link to="/file-claim">
              <Button variant={isActive("/file-claim") ? "secondary" : "ghost"} className="gap-2">
                <FileText className="h-4 w-4" />
                File Claim
              </Button>
            </Link>
            <Link to="/track-claims">
              <Button variant={isActive("/track-claims") ? "secondary" : "ghost"} className="gap-2">
                <Clock className="h-4 w-4" />
                Track Claims
              </Button>
            </Link>
            <Link to="/notifications">
              <Button variant={isActive("/notifications") ? "secondary" : "ghost"} className="gap-2 relative">
                <Bell className="h-4 w-4" />
                Notifications
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
              </Button>
            </Link>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
