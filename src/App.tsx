import Header from './components/Header';
import Hero from './components/Hero';
import AlternatingSection from './components/AlternatingSection';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden font-sans text-royal-dark">
      <Header />
      <main>
        <Hero />
        <AlternatingSection
          imagePosition="left"
          imageSrc="/restaurant-image.jpg"
          imageAlt="The Gurkha Elites Restaurant"
          title="Welcome to The Gurkha Elites"
          description="Our restaurant offers a unique dining experience that blends tradition with modern culinary techniques. We pride ourselves on using only the freshest ingredients to create memorable dishes."
          bgColor="bg-white"
        />
        <AlternatingSection
          imagePosition="right"
          imageSrc="/food-image.jpg"
          imageAlt="Signature dish"
          title="The Wizard Himself"
          description="Behind every extraordinary dish is the passion and creativity of our chef. With years of experience in fusion cuisine, our chef brings together Nepali, Italian, and Australian influences to create a dining experience like no other."
          bgColor="bg-royal-light"
        />
        <AlternatingSection
          imagePosition="left"
          imageSrc="/chef-image.jpg"
          imageAlt="Our chef"
          title="Our Culinary Team"
          titleExtra={<span className="text-xl font-bold mt-2 mb-4 block">Pop-up by <span className="text-royal-gold">"THE GURKHA ELITES"</span></span>}
          description="The Flavors of Kathmandu. Experience the perfect fusion of Nepali, Italian, and Modern Australian cuisine in an elegant setting. Our chefs blend traditional techniques with contemporary flair to create unforgettable culinary experiences."
          bgColor="bg-white"
        />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
