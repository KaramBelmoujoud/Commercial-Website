import './App.css';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
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
          "our_mission_title": "Our Mission",
          "thankyou": "thank you for choosing us!.",
          "Contactus": "Contact Us",
          "Description": "PESCATITAN is a company specializing in the sale of all seafood products",
          "sub": "Subscribe",
          "product": "Products",
          "home": "Home",
          "Name": "Name",
          "Email": "Email",
          "Message": "Message",
          "Contact": "If you need information about our products or want to get in touch, you can either fill out the form with your request or find our contact information.",
          "en": "English",
          "fr": "French",
          "gr": "German",
          "sp": "Spanish",
          "We": "We provide Premium quality fish",
          "ididat":"In the agri-food sector, cleanliness is of paramount importance, so we have invested a considerable amount of money in the development of a highly equipped laboratory, as well as sanitary facilities and changing rooms to guarantee an environment clean and hygienic working conditions. We have also set up a water drainage system to ensure the safety of our facilities.",
          "Best": "We are the best in the market",
          "houtat":"We offer a range of fresh products, such as whole or gutted fish, fillets of white fish, cephalopods and pelagics. These products can be packaged in cardboard or polyester boxes, as well as in sachets or cling film, according to the preferences of our customers.",
          "camion":"The PESCATITAN company specializes in the processing of seafood products. To guarantee the quality and freshness of its products, we have insulated trucks dedicated to transport from the ports to its manufacturing site. These trucks are equipped with high-performance refrigeration systems that maintain a constant temperature inside the trailer.",
          "flouka": "The quality of our products greatly depends on our supply flow, which is a key element in our production process. We pride ourselves on the satisfaction of our customers, whether local or international, who testify the quality of our products.",
          "ex": "EXPLORE",
          "sv": "Services and Advantages",
          "mr":"more ...",
        },
      },
        fr: {
          translation: {
          "about_us": "Bienvenue dans notre société! Nous sommes une entreprise dédiée à fournir à nos clients le poisson de la plus haute qualité disponible. Des fruits de mer frais pêchés de manière durable aux plats surgelés, nous avons quelque chose pour tout le monde. Notre équipe est passionnée par la recherche et la vente des meilleurs produits, et nous sommes fiers de l'excellent service client que nous offrons. Nous espérons vous servir, à vous et à votre famille, des poissons délicieux et sains pour les années à venir. En plus de fournir des clients localement, nous avons également une activité d'exportation florissante. Notre équipe travaille fort pour s'assurer que tous nos produits répondent aux normes les plus élevées de qualité et de fraîcheur, peu importe où ils vont. Nous avons de l'expérience dans l'expédition vers une variété de destinations internationales et sommes en mesure de répondre aux exigences uniques de chaque marché. Nous sommes fiers de pouvoir proposer nos poissons et fruits de mer de haute qualité à des clients du monde entier.",
          "our_mission": "Notre mission est de fournir à nos clients les poissons et fruits de mer les plus frais et de la plus haute qualité disponibles. Nous sommes fiers de servir les marchés locaux et internationaux et nous travaillons dur pour nous assurer que tous nos produits répondent aux normes de qualité et de fraîcheur les plus élevées. Nous nous engageons pour la durabilité et achetons nos produits de manière responsable. En plus de servir des clients individuels, nous avons également une entreprise de vente en gros florissante, fournissant à d'autres entreprises les produits dont elles ont besoin pour réussir. Nous nous engageons à établir des relations durables avec tous nos clients et à fournir un excellent service à chaque étape du processus. Nous nous efforçons d'être la source incontournable pour tous vos besoins en poisson et fruits de mer, que vous soyez restaurateur, traiteur ou détaillant.",
          "about_us_title": "À propos de nous",
            "our_mission_title": "Notre mission",
            "thankyou": "merci de nous avoir choisis!.",
            "Contactus": "Contactez-nous",
            "Description": "PESCATITAN est une entreprise spécialisée dans la vente de tout produit de la mer",
            "sub": "Souscrire",
            "product": "Produits",
            "home": "Accueil",
            "Name": "Nom",
            "Email": "Email",
            "Message": "Message",
            "Contact": "Si vous avez besoin d'informations sur nos produits ou souhaitez nous contacter, vous pouvez soit remplir le formulaire avec votre demande, soit trouver nos coordonnées.",
            "en": "Anglais",
            "fr": "Français",
            "gr": "Allemand",
            "sp": "Espagnol",
            "We": "Nous fournissons des poissons de qualité Premium",
            "Best": "Nous sommes les meilleurs du marché",
            "ididat":"Dans le secteur agroalimentaire, la propreté est d'une importance capitale. Nous avons donc investi une somme considérable dans l'aménagement d'un laboratoire hautement équipé, ainsi que dans des installations sanitaires et des vestiaires pour garantir un environnement de travail propre et hygiénique. Nous avons également mis en place un système d'évacuation des eaux pour assurer la salubrité de nos installations.",
            "camion":"La société PESCATITAN est spécialisée dans la transformation des produits de la mer. Pour garantir la qualité et la fraîcheur de ses produits, nous disposons des camions isothermes dédiés au transport depuis les ports jusqu'à son site de fabrication. Ces camions sont équipés de systèmes de réfrigération performants qui permettent de maintenir une température constante à l'intérieur de la remorque.",
            "houtat": "Nous proposons une gamme de produits frais, tels que des poissons entiers ou éviscérés, des filets de poissons blancs, des céphalopodes et des pélagiques. Ces produits peuvent être conditionnés dans des caisses en carton ou en polyester, ainsi que dans des sachets ou du film alimentaire, selon les préférences de nos clients.",
            "flouka": "La qualité de nos produits dépend grandement de notre flux d'approvisionnement, qui est un élément clé dans notre processus de production. Nous sommes fiers de la satisfaction de nos clients, qu'ils soient locaux ou internationaux, qui témoignent de la qualité de nos produits.",
            "ex": "EXPLORE",
            "sv": "Services and Advantages",
            "mr":"plus ...",
          },
        },
        gr: {
          translation: {
            "about_us": "Willkommen bei unserem Unternehmen! Wir sind ein Unternehmen, das sich der Bereitstellung unserer Kunden mit der höchsten Qualität Fisch zur Verfügung stellt. Von frischem, nachhaltig gefangenen Meeresfrüchten bis zu gefrorenen Optionen haben wir etwas für jeden. Unser Team ist begeistert von der Suche und dem Verkauf der besten Produkte und wir sind stolz auf den ausgezeichneten Kundenservice, den wir anbieten. Wir hoffen, Sie und Ihre Familie mit leckerem, gesundem Fisch für viele Jahre zu bedienen. Neben der Versorgung von Kunden vor Ort haben wir auch ein florierendes Exportgeschäft. Unser Team arbeitet hart daran, sicherzustellen, dass alle unsere Produkte die höchsten Qualitäts- und Frischestandards erfüllen, egal wohin sie gehen. Wir haben Erfahrung mit der Lieferung an eine Vielzahl von internationalen Zielen und können die einzigartigen Anforderungen jedes Marktes erfüllen. Wir sind stolz darauf, unseren hochwertigen Fisch und Meeresfrüchte an Kunden auf der ganzen Welt liefern zu können.",
            "our_mission": "Unsere Mission ist es, unseren Kunden den frischesten, hochwertigsten Fisch und Meeresfrüchte zur Verfügung zu stellen. Wir sind stolz darauf, sowohl lokale als auch internationale Märkte zu bedienen und arbeiten hart daran, sicherzustellen, dass alle unsere Produkte die höchsten Qualitäts- und Frischestandards erfüllen. Wir sind uns unserer Verantwortung für Nachhaltigkeit bewusst und beziehen unsere Produkte verantwortungsvoll. Neben der Versorgung von Einzelkunden haben wir auch ein florierendes Großhandelsgeschäft, das andere Unternehmen mit den Produkten versorgt, die sie zum Erfolg benötigen. Wir sind bestrebt, langfristige Beziehungen zu allen unseren Kunden aufzubauen und unseren Kunden bei jedem Schritt des Weges einen ausgezeichneten Service zu bieten. Wir streben danach, die erste Wahl für alle Ihre Fisch- und Meeresfrüchtebedürfnisse zu sein, ob Sie Restaurantbesitzer, Caterer oder Einzelhändler sind.",
            "about_us_title": "Über uns",
            "our_mission_title": "Unsere Mission",
            "thankyou": "danke, dass du dich für uns entschieden hast!.",
            "Contactus": "Kontaktiere uns",
            "Description": "PESCATITAN ist ein Unternehmen, das sich auf den Verkauf aller Meeresfrüchte spezialisiert hat",
            "sub": "Abonnieren",
            "product": "Produkte",
            "home": "Zuhause",
            "Name": "Name",
            "Email": "Email",
            "Message": "Botschaft",
            "Contact": "Wenn Sie Informationen zu unseren Produkten benötigen oder uns kontaktieren möchten, können Sie entweder das Formular mit Ihrer Anfrage ausfüllen oder unsere Kontaktdaten finden.",
            "en": "Englisch",
            "fr": "Französisch",
            "gr": "Deutsch",
            "sp": "Spanisch",
            "We": "Wir liefern Fisch in Premium-Qualität",
            "Best": "Wir sind die Besten auf dem Markt",
            "ididat": "In der Agrar- und Lebensmittelbranche ist Sauberkeit von größter Bedeutung, daher haben wir viel Geld in die Entwicklung eines hoch ausgestatteten Labors sowie sanitärer Einrichtungen und Umkleidekabinen investiert, um eine saubere und saubere Umgebung zu gewährleisten hygienische Arbeitsbedingungen. Außerdem haben wir eine Wasserableitung eingerichtet, um die Sicherheit unserer Anlagen zu gewährleisten.",
            "houtat":"Wir bieten eine Reihe frischer Produkte an, wie ganze oder ausgenommene Fische, Weißfischfilets, Kopffüßer und pelagische Arten. Diese Produkte können je nach Bedarf in Kartons oder Polyesterkartons sowie in Beuteln oder Frischhaltefolie verpackt werden den Vorlieben unserer Kunden.",
            "camion":"Das Unternehmen PESCATITAN ist auf die Verarbeitung von Fischprodukten spezialisiert. Um die Qualität und Frische seiner Produkte zu garantieren, verfügen wir über isolierte Lastwagen, die für den Transport von den Häfen zu seinem Produktionsstandort bestimmt sind. Diese Lastwagen sind mit einer Hochleistungskühlung ausgestattet Systeme, die eine konstante Temperatur im Anhänger aufrechterhalten.",
            "flouka": "Die Qualität unserer Produkte hängt stark von unserem Lieferfluss ab, der ein Schlüsselelement in unserem Produktionsprozess ist. Wir sind stolz auf die Zufriedenheit unserer Kunden, ob lokal oder international, die die Qualität unserer Produkte bezeugen. ",
            "ex": "ERKUNDEN",
            "sv": "Dienstleistungen und Vorteile",
            "mr":"mehr ...",
          }
      },
      sp: {
        translation: {
          "about_us": "Bienvenido a nuestra empresa! Somos una empresa dedicada a proporcionar a nuestros clientes el pescado de la más alta calidad disponible. De mariscos frescos pescados de manera sostenible a opciones congeladas, tenemos algo para todos. Nuestro equipo está entusiasmado con la búsqueda y la venta de los mejores productos y estamos orgullosos del excelente servicio al cliente que ofrecemos. Esperamos servirle, usted y su familia, pescado delicioso y saludable durante muchos años. Además de suministrar a clientes locales, también tenemos un próspero negocio de exportación. Nuestro equipo trabaja duro para asegurarse de que todos nuestros productos cumplan con los más altos estándares de calidad y frescura, sin importar a dónde vayan. Tenemos experiencia en el envío a una variedad de destinos internacionales y podemos satisfacer las necesidades únicas de cada mercado. Estamos orgullosos de poder ofrecer nuestros pescados y mariscos de alta calidad a clientes en todo el mundo.",
          "our_mission": "Nuestra misión es proporcionar a nuestros clientes el pescado y mariscos más frescos y de la más alta calidad disponibles. Estamos orgullosos de servir a los mercados locales e internacionales y trabajamos duro para asegurarnos de que todos nuestros productos cumplan con los más altos estándares de calidad y frescura. Nos comprometemos con la sostenibilidad y compramos nuestros productos de manera responsable. Además de servir a clientes individuales, también tenemos un próspero negocio de venta al por mayor, que proporciona a otras empresas los productos que necesitan para tener éxito. Nos comprometemos a establecer relaciones duraderas con todos nuestros clientes y a brindar un excelente servicio en cada paso del proceso. Nos esforzamos por ser la fuente ineludible para todas sus necesidades de pescado y mariscos, ya sea que sea restaurante, catering o minorista.",
          "about_us_title": "Sobre nosotros",
          "our_mission_title": "Nuestra misión",
          "thankyou": "gracias por elegirnos!.",
          "Contactus": "Contáctenos",
          "Description": "PESCATITAN es una empresa especializada en la venta de todo tipo de productos del mar",
          "sub": "Suscribirse",
          "product": "Productos",
          "home": "Casa",
          "Name": "Nombre",
          "Email": "Email",
          "Message": "Mensaje",
          "Contact": "Si necesita información sobre nuestros productos o desea ponerse en contacto, puede completar el formulario con su solicitud o encontrar nuestra información de contacto.",
          "en": "En inglés",
          "fr": "francés",
          "gr": "alemán",
          "sp": "español",
          "We": "Enviamos pescado de alta calidad",
          "Best": "Somos los mejores en el mercado",
          "ididat":"En el sector agroalimentario la limpieza es de suma importancia, por ello hemos invertido una importante cantidad de dinero en el desarrollo de un laboratorio altamente equipado, así como instalaciones sanitarias y vestuarios para garantizar un entorno limpio y condiciones higiénicas de trabajo, además hemos habilitado un sistema de drenaje de agua para garantizar la seguridad de nuestras instalaciones.",
          "houtat":"Ofrecemos una gama de productos frescos, como pescado entero o eviscerado, filetes de pescado blanco, cefalópodos y pelágicos. Estos productos se pueden envasar en cajas de cartón o poliéster, así como en sobres o film transparente, según a las preferencias de nuestros clientes.",
          "camion":"La empresa PESCATITAN se especializa en el procesamiento de productos del mar. Para garantizar la calidad y frescura de sus productos, contamos con camiones isotérmicos dedicados al transporte desde los puertos hasta su sitio de fabricación. Estos camiones están equipados con refrigeración de alto rendimiento sistemas que mantienen una temperatura constante dentro del remolque",
          "flouka": "La calidad de nuestros productos depende en gran medida de nuestro flujo de suministro, que es un elemento clave en nuestro proceso de producción. Nos enorgullecemos de la satisfacción de nuestros clientes, ya sean locales o internacionales, quienes dan fe de la calidad de nuestros productos. ",
          "ex": "EXPLORAR",
          "sv": "Servicios y beneficios",
          "mr":"más ...",
        }
        }
    },
    
    fallbackLng: "fr",
    detection: {
      order: ['cookie','htmlTag','localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });
  
function App() {

  return (

    <div >
      <Router basename='/'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
    );
}

export default App;
