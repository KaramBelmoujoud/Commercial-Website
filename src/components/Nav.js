import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import pesca from "../assets/pes.png";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 220){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="#" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
         Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="#AboutUs" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
        About Us
         
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="#Products" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
        Products
        </a>
      </Typography>
      
    </ul>
  );
 
  return (
    <Navbar className={colorChange ? 'w-full left-0 right-0 mx-auto max-w-screen-xl  py-2 px-4 lg:px-8 lg:py-4 shadow-md text-slate-800 bg-slate-50 fixed z-10 rounded-lg':'w-full left-0 right-0 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-xl fixed  z-10 rounded-lg'}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h1"
          className=" cursor-pointer py-1.5 font-medium text-blue-gray-400 hover:text-blue-gray-900"
        >
          <span>Pescatitan</span>
        </Typography>
        
        <div className="hidden lg:block">{navList}</div>
        <Button href='#Contact' variant="gradient" size="lg" className={colorChange ? "hidden shadow-xl lg:inline-block text-slate-800 " : "hidden shadow-xl lg:inline-block "}>
        <a href="#Contact"><span>Contact Us</span></a>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden content-between"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button href='#Contact' variant="gradient" size="sm" fullWidth className="mb-2">
          <a href="#Contact"><span>Contact Us</span></a>
        </Button>
      </MobileNav>
    </Navbar>
  );
}