import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import pesca from "../assets/pes.png";
import { useTranslation } from "react-i18next";
 
export default function Example() {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [hidobject, sethide] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 35){
      setColorchange(true);
      sethide(true);
    }
    else{
      setColorchange(false);
      sethide(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const contlang = (
    <div className="flex flex-col gap-2 bg-blue-300 h-12 relative">
      <div className="mx-60 flex flex-row">
      <h2 className="items-center justify-center left-20 bg-blue-200 p-3">Email : farid@pescatitan.net</h2>
      <h2 className="items-center justify-center left-64 py-3 mx-4">Tel : +212 661281000</h2>
      
      </div>
    </div>
  );
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
          {t('home')}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/#AboutUs" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
          {t('about_us_title')}
         
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="Products" className="flex items-center focus:underline underline-offset-8  decoration-4 scroll-auto">
          {t('product')}
        </a>
      </Typography>
      
    </ul>
  );
 
  return (
    <div>
      <div className={hidobject ? 'hidden' : 'hidden lg:block'}>{contlang}</div>
    <Navbar className={colorChange ? 'w-full left-0 right-0 mx-auto max-w-screen-xl  py-2 px-4 lg:px-8 lg:py-4 shadow-md text-slate-800 bg-slate-50 fixed z-10 rounded-lg':' backdrop-blur-sm text-slate-800 bg-slate-50 w-full left-0 right-0 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-xl fixed  z-10 rounded-lg'}>
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
        <Button href='Contactus' variant="gradient" size="lg" className={colorChange ? "hidden shadow-xl lg:inline-block text-slate-800 " : "text-slate-800 hidden shadow-xl lg:inline-block "}>
            <a href="Contactus"><span>{t('Contactus')}</span></a>
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
        <Button href='Contactus' variant="gradient" size="sm" fullWidth className="mb-2">
          <a href="Contactus"><span>{t('Contactus')}</span></a>
        </Button>
      </MobileNav>
      </Navbar>
      </div>
  );
}