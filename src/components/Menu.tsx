import React, { useState } from 'react';
import { motion } from 'framer-motion';

type MenuItem = {
  name: string;
  price: string;
  description: string;
  note?: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

type MenuData = {
  title: string;
  categories: MenuCategory[];
};

const menuData: Record<string, MenuData> = {
  nepali: {
    title: "Nepali Menu",
    categories: [
      {
        title: "Mains",
        items: [
          {
            name: "Veggie “Mo:mo: Cha”",
            price: "14",
            description: "Native Kathmandu Style Dumplings with veggies, cottage cheese, ginger-garlic, spices, herbs and coriander (6 pcs)",
            note: "Served with Tomato Achaar - may contain sesame, soybeans, and peanuts"
          },
          {
            name: "Buffalo “Mo:mo: Cha”",
            price: "16",
            description: "Native Kathmandu Style Dumplings with Buffalo Meat, spices, and herbs",
            note: "Served with Tomato Achaar - may contain sesame, soybeans, and peanuts"
          },
          {
            name: "Land-locked Mussels",
            price: "24",
            description: "Thaaru Tribe Style Mussel-soup with Tamarind, coconut milk, and garlic bread"
          }
        ]
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Coco Lal Mohan",
            price: "9",
            description: "Terai Region Style fried milk solids with coconut yoghurt"
          },
          {
            name: "Coco Honey (Vegan)",
            price: "7",
            description: "Coconut yoghurt served with honey"
          }
        ]
      }
    ]
  },
  italian: {
    title: "Italian Menu",
    categories: [
      {
        title: "Mains",
        items: [
          {
            name: "Vegetarian Pizza Slice",
            price: "6",
            description: "With 'Nepali' Sauce: Mustang's Timmur & Himalayan Chilli Chhop"
          },
          {
            name: "Meaty Pizza Slice",
            price: "7",
            description: "With Chicken Choyyla topping and 'Nepali' Sauce"
          }
        ]
      }
    ]
  },
  australian: {
    title: "Modern Australian",
    categories: [
      {
        title: "Mains",
        items: [
          {
            name: "Grilled Barramundi",
            price: "28",
            description: "With native herbs and seasonal vegetables"
          },
          {
            name: "Kangaroo Loin",
            price: "32",
            description: "Pan-seared with bush tomato chutney and sweet potato mash"
          }
        ]
      }
    ]
  }
};

const MenuItemCard: React.FC<MenuItem> = ({ name, price, description, note }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="border-b border-royal-gold/20 pb-6 mb-6"
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-xl font-serif font-bold">{name}</h4>
      <span className="text-xl font-bold text-royal-gold">${price}</span>
    </div>
    <p className="text-gray-600 mb-2">{description}</p>
    {note && <p className="text-sm italic text-royal-gold/80">{note}</p>}
  </motion.div>
);

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'nepali' | 'italian' | 'australian'>('nepali');

  return (
    <section id="menu" className="w-full py-20 bg-royal-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-center mb-8 text-royal-dark">
            The Gorkha Elite Menu
          </h2>

          <div className="flex justify-center mb-8 overflow-x-auto w-full">
            <div className="inline-flex space-x-2 rounded-full bg-white/80 p-1">
              {(['nepali', 'italian', 'australian'] as const).map((menu) => (
                <button
                  key={menu}
                  onClick={() => setActiveMenu(menu)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeMenu === menu
                      ? 'bg-royal-gold text-white'
                      : 'text-royal-dark hover:bg-gray-100'
                  }`}
                >
                  {menuData[menu].title}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center text-sm mb-8 text-gray-600">
            Swipe left/right to see more menu items
          </p>

          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto w-full"
          >
            {menuData[activeMenu].categories.map((category, index) => (
              <div key={index} className="mb-12 w-full">
                <h3 className="text-2xl font-serif mb-6 text-center border-b border-royal-gold/30 pb-2">
                  {category.title}
                </h3>
                
                <div className="space-y-6 w-full">
                  {category.items.map((item, itemIndex) => (
                    <MenuItemCard
                      key={itemIndex}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      note={item.note}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;



//“Mo:mo: Cha”"