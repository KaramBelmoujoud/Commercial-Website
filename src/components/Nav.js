import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import { HashLink } from 'react-router-hash-link';
 
export default function Example() {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [hidobject, sethide] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavbarColor = () =>{
    if(window.scrollY >= 48){
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
      () => window.innerWidth >= 970 && setOpenNav(false)
    );
  }, []);

  const language = [
    {
      "id": "en",
      "code":"gb"
    },
    {
      "id": "fr",
      "code":"fr"
    },
    {
      "id": "gr",
      "code":"de"
    },
    {
      "id": "sp",
      "code":"es"
    }];

  const contlang = (
    <div className="flex flex-col gap-5 bg-gray-800 h-12 z-50 ">
      <div className="flex flex-1 ml-64 mr-64 justify-center">
        <div className="flex flex-1"><h2 className="font-serif  p-3 text-white"><EmailOutlinedIcon fontSize="small" /> farid@pescatitan.net</h2>
          <h2 className="font-serif py-3 mx-4 text-white"><LocalPhoneOutlinedIcon fontSize="small" />  +212 661281000</h2></div>
        <div className="bg-gray-800 mt-2 h-8 z-50 w-36">
          <div onClick={()=> setOpen(!open)}>
          <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ color: "white" }}/>
            <LanguageOutlinedIcon fontSize="large" sx={{ color: "white" }} />
          </div>
          <ul className={open ? 'bg-gray-800 overflow-y-auto max-h-52 shadow-md rounded-md' : 'bg-gray-800 mt-2 overflow-y-auto max-h-0'} >
            {
              language.map((country) =>
                <li key={country.id} className="p-2 text-sm z-auto text-black bg-gray-200 hover:bg-black hover:text-white" onClick={() => { i18next.changeLanguage(country.id); setOpen(!open) }}><span class={`fi fi-${country.code} mx-2`}></span>{t(country.id)}</li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
  const navList = (
    <ul className="mb-4 mt-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/" className="flex items-center focus:underline underline-offset-8 scroll-auto font-serif">
          {t('home')}
        </a>
      </Typography>
      <HashLink to="/#AboutUs">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold flex items-center focus:underline underline-offset-8 scroll-auto font-serif"
      >
          {t('about_us_title')}
        </Typography>
        </HashLink>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/#/products" className="flex items-center focus:underline underline-offset-8  scroll-auto font-serif">
          {t('product')}
        </a>
      </Typography>
      
      
    </ul>
  );
    const pnavList = (
    <ul className="mb-10 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/" className="flex items-center focus:underline underline-offset-8 scroll-auto font-serif">
          {t('home')}
        </a>
        </Typography>
        <HashLink to="/#AboutUs">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold flex items-center focus:underline underline-offset-8 scroll-auto font-serif"
      >
          {t('about_us_title')}
          </Typography>
          </HashLink>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <a href="/#/products" className="flex items-center focus:underline underline-offset-8  scroll-auto font-serif">
          {t('product')}
        </a>
        </Typography>
        <div className="m-auto ">
                  <Button href='/#/ContactUs' variant="gradient" size="md" fullWidth className="mb-2">
<a href="/#/ContactUs"><span className="font-serif text-gray-900">{t('Contactus')}</span></a>
        </Button></div>
                  
      <div className="m-auto h-8 z-50">
          <div onClick={()=> setOpen(!open)}>
          <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ color: "black" }}/>
            <LanguageOutlinedIcon fontSize="large" sx={{ color: "black" }} />
          </div>
          <ul className='mt-2 overflow-y-auto max-h-52 shadow-md rounded-md z-50 flex' >
            {
              language.map((country) =>
                <li key={country.id} className="p-2 text-sm z-auto text-black bg-gray-200 hover:bg-black hover:text-white" onClick={() => { i18next.changeLanguage(country.id); setOpen(!open) }}><span class={`fi fi-${country.code} mx-2`}></span>{t(country.id)}</li>
              )
            }
          </ul>
        </div>
      
    </ul>
  );
 
  return (
    <div>
      <div className={hidobject ? 'hidden' : 'hidden lg:block'}>{contlang}</div>
    <Navbar className={colorChange ? 'w-full left-0 right-0 mx-auto max-w-screen-xl  py-2 px-4 lg:px-8 lg:py-4 shadow-md text-slate-800 bg-slate-50 fixed z-10 rounded-lg':' backdrop-blur-sm text-slate-800 bg-slate-50 w-full left-0 right-0 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 shadow-xl fixed  z-10 rounded-lg'}>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/#"
          variant="h1"
          className=" cursor-pointer py-1.5 font-medium text-blue-gray-400 hover:text-blue-gray-900"
        >
          <span className="font-serif">PESCATITAN</span>
        </Typography>

        <div className="hidden lg:block">{navList}</div>
        <Button href='/#/ContactUs' variant="gradient" size="lg" className={colorChange ? "hidden shadow-xl lg:inline-block text-slate-800 " : "text-slate-800 hidden shadow-xl lg:inline-block "}>
            <a href="/#/ContactUs"><span className="font-serif">{t('Contactus')}</span></a>
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
          {pnavList}

      </MobileNav>
      </Navbar>
      </div>
  );
}