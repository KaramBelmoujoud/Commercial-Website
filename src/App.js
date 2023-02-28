import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from '../src/components/Products';
import ContactUs from '../src/components/ContactUs';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "about_us": "Welcome to our company! We are a business dedicated to providing our customers with the highest quality fish available. From fresh, sustainably caught seafood to frozen options, we have something for everyone. Our team is passionate about sourcing and selling only the best products, and we take pride in the excellent customer service that we offer. We hope to serve you and your family with delicious, healthy fish for years to come. In addition to supplying customers locally, we also have a thriving export business. Our team works hard to ensure that all of our products meet the highest standards of quality and freshness, no matter where they are going. We have experience shipping to a variety of international destinations and are able to meet the unique requirements of each market. We are proud to be able to bring our high-quality fish and seafood to customers around the world.",
          "our_mission": "Our mission is to provide our customers with the freshest, highest quality fish and seafood available. We are proud to serve both local and international markets, and work hard to ensure that all of our products meet the highest standards of quality and freshness. We are committed to sustainability and source our products responsibly. In addition to serving individual customers, we also have a thriving wholesale business, supplying other businesses with the products they need to succeed. We are dedicated to building lasting relationships with all of our customers and providing excellent service at every step of the way. We strive to be the go-to source for all of your fish and seafood needs, whether you are a restaurant owner, caterer, or retailer.",
          "about_us_title": "About Us",
          "our_mission_title": "Our Mission"
        },
      },
        fr: {
          translation: {
          "about_us": "Bienvenue dans notre société! Nous sommes une entreprise dédiée à fournir à nos clients le poisson de la plus haute qualité disponible. Des fruits de mer frais pêchés de manière durable aux plats surgelés, nous avons quelque chose pour tout le monde. Notre équipe est passionnée par la recherche et la vente des meilleurs produits, et nous sommes fiers de l'excellent service client que nous offrons. Nous espérons vous servir, à vous et à votre famille, des poissons délicieux et sains pour les années à venir. En plus de fournir des clients localement, nous avons également une activité d'exportation florissante. Notre équipe travaille fort pour s'assurer que tous nos produits répondent aux normes les plus élevées de qualité et de fraîcheur, peu importe où ils vont. Nous avons de l'expérience dans l'expédition vers une variété de destinations internationales et sommes en mesure de répondre aux exigences uniques de chaque marché. Nous sommes fiers de pouvoir proposer nos poissons et fruits de mer de haute qualité à des clients du monde entier.",
          "our_mission": "Notre mission est de fournir à nos clients les poissons et fruits de mer les plus frais et de la plus haute qualité disponibles. Nous sommes fiers de servir les marchés locaux et internationaux et nous travaillons dur pour nous assurer que tous nos produits répondent aux normes de qualité et de fraîcheur les plus élevées. Nous nous engageons pour la durabilité et achetons nos produits de manière responsable. En plus de servir des clients individuels, nous avons également une entreprise de vente en gros florissante, fournissant à d'autres entreprises les produits dont elles ont besoin pour réussir. Nous nous engageons à établir des relations durables avec tous nos clients et à fournir un excellent service à chaque étape du processus. Nous nous efforçons d'être la source incontournable pour tous vos besoins en poisson et fruits de mer, que vous soyez restaurateur, traiteur ou détaillant.",
          "about_us_title": "À propos de nous",
          "our_mission_title": "Notre mission"
          },
        }
    },
    
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag','localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
