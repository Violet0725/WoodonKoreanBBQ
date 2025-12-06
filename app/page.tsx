'use client'

import { useState } from 'react'
import { Menu, X, Phone, MapPin, Clock, Instagram, ChevronDown } from 'lucide-react'

// Type definitions
interface MenuItem {
  name: string
  price: number
  korean?: string
  weight?: string
  description?: string
}

interface MenuCategory {
  name: string
  description?: string
  items: MenuItem[]
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reservation', label: 'Reservation' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Woodon Logo" 
              className="h-10 w-10 rounded-full bg-white object-cover"
            />
            <span className="text-2xl font-bold text-accent-orange">WOODON</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-white/80 hover:text-accent-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/photo2.png)',
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/logo.jpg" 
            alt="Woodon Logo" 
            className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-white object-cover shadow-2xl mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-accent-orange">WOODON</span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-white/90 mb-4">
          Authentic Korean BBQ Experience
        </p>
        <p className="text-lg text-white/70 mb-8">
          Premium cuts grilled at your table in Kingston, Ontario
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservation"
            className="px-8 py-3 bg-accent-orange hover:bg-accent-orange/80 text-white font-semibold rounded-lg transition-colors"
          >
            Make a Reservation
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border-2 border-white/50 hover:border-accent-orange hover:text-accent-orange text-white font-semibold rounded-lg transition-colors"
          >
            View Menu
          </a>
        </div>
      </div>
      
      {/* Scroll indicator - positioned relative to section */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown size={32} className="text-white/50" />
      </a>
    </section>
  )
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-accent-yellow">About</span> Woodon
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Welcome to Woodon, Kingston&apos;s premier Korean BBQ destination. We bring the authentic 
              taste of Korea to your table with premium quality meats and traditional recipes 
              passed down through generations.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              At Woodon, we believe in the communal experience of Korean BBQ – gathering around 
              the grill, cooking together, and sharing delicious food with friends and family. 
              Our carefully selected cuts of beef, pork, and chicken are marinated with our 
              special house recipes and grilled to perfection at your table.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Every meal comes with our signature banchan – traditional Korean side dishes that 
              complement your BBQ experience. From fresh kimchi to seasoned vegetables, each 
              side is made fresh daily with authentic Korean flavors.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">100%</div>
                <div className="text-sm text-white/60">Fresh Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">Premium</div>
                <div className="text-sm text-white/60">Quality Meats</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange">Authentic</div>
                <div className="text-sm text-white/60">Korean Recipes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/photo4.png"
              alt="Premium beef cuts at Woodon"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent-orange p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">K-BBQ</div>
              <div className="text-sm">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Menu Data
const menuCategories: MenuCategory[] = [
  {
    name: 'Beef Grill 소고이',
    items: [
      { name: 'B1. Sirloin Cap', korean: '새우살', weight: '180g', price: 32.99, description: 'A tender and juicy cut, prized for its rich flavor and perfect marbling. Available in limited daily quantity.' },
      { name: 'B2. Chuck Flap Tail', korean: '살치살', weight: '180g', price: 27.99, description: 'Delicately marbled beef chuck flap tail, prized for its tenderness and savory taste.' },
      { name: 'B3. Boneless Short Rib', korean: '갈비살', weight: '180g', price: 26.99, description: 'Flavorful meat from between the short ribs, tender with a rich and savory flavor.' },
      { name: 'B4. Striploin', korean: '채끝살', weight: '180g', price: 26.99, description: 'A tender and flavorful cut from the sirloin end, well-marbled and juicy with a rich beef taste.' },
      { name: 'B5. Galbi Jumulok (Marinated)', korean: '누들목', weight: '200g', price: 27.99, description: 'Tender slices of boneless beef short rib marinated in Korean-style sauce.' },
      { name: 'B6. Yukhwe (Beef Tartare)', korean: '육회', weight: '150g', price: 17.99, description: 'Fresh raw beef seasoned with spicy-savory gochujang, garlic, sesame oil and scallion.' },
    ]
  },
  {
    name: 'Pork Grill 돼지구이',
    items: [
      { name: 'P1. Pork Belly', korean: '삼겹살', weight: '180g', price: 21.99, description: 'Juicy pork belly with layers of meat and fat.' },
      { name: 'P2. Pork Shoulder', korean: '목살', weight: '180g', price: 21.99, description: 'Flavorful and tender cut, great for table grilling.' },
      { name: 'P3. Pork Jowl', korean: '항정살', weight: '180g', price: 22.99, description: 'Richly marbled pork with a juicy and chewy texture.' },
      { name: 'P4. Pork Shoulder (Marinated)', korean: '양념목살', weight: '200g', price: 22.99, description: 'Tender pork neck slices marinated in a sweet & savory Korean-style sauce.' },
    ]
  },
  {
    name: 'Chicken Grill 닭구이',
    items: [
      { name: 'G1. Chicken Thigh', korean: '순살닭갈비', weight: '200g', price: 22.99, description: 'Chicken dark meat marinated in special soy sauce.' },
    ]
  },
  {
    name: 'Hansang - Sot Bap',
    description: 'A full Korean Entree served on one tray. Includes rice, soup, a main dish, and tasty banchan.',
    items: [
      { name: 'H1. Bulgogi Sotbap', korean: '불고기', price: 22.99, description: 'Marinated beef in a savory-sweet sauce, grilled with vegetables, served over hot pot rice.' },
      { name: 'H2. Spicy Sotbap', korean: '매운 솥밥', price: 20.99, description: 'Spicy pork OR Spicy chicken stir-fried with vegetables, served over hot pot rice.' },
      { name: 'H3. Veggie Sotbap', korean: '야채 솥밥', price: 20.99, description: 'Tofu, mushrooms, and vegetables stir-fried, served over hot pot rice.' },
      { name: 'H4. Eel Sotbap', korean: '장어 솥밥', price: 22.99, description: 'Grilled eel on rice, topped with stir-fried seasonal vegetables and sweet soy-based sauce.' },
    ]
  },
  {
    name: 'Soup & Stew',
    items: [
      { name: 'T1. Seolleong Tang', korean: '설렁탕', price: 21.99, description: 'Traditional Korean beef bone soup, slow-cooked for a rich and milky broth, served with sliced beef and noodles.' },
      { name: 'T2. Galbi Tang', korean: '갈비탕', price: 27.99, description: 'Beef short rib soup with radish, glass noodles, and egg garnish.' },
      { name: 'T3. Deulkkae Soft Tofu Jjigae', korean: '들깨 순두부', price: 21.99, description: 'A comforting Korean stew with soft tofu, nutty perilla seeds, mushrooms, and vegetables.' },
      { name: 'T4. Kimchi Jjigae', korean: '김치찌개', price: 20.99, description: 'Traditional Korean kimchi stew with pork, tofu, and vegetables.' },
      { name: 'T5. Soon Tofu Jjigae', korean: '순두부 찌개', price: 20.99, description: 'Traditional Korean soybean paste stew with tofu and vegetables.' },
    ]
  },
  {
    name: 'Noodles',
    items: [
      { name: 'N1. Mul Naengmyeon', korean: '물냉면', price: 21.99, description: 'Cold buckwheat noodles served in a refreshing icy beef broth, topped with sliced beef, cucumber, radish, and boiled egg.' },
      { name: 'N2. Bibim Naengmyeon', korean: '비빔냉면', price: 21.99, description: 'Chewy buckwheat noodles served cold and tossed in a spicy-sweet chili sauce, topped with sliced beef, cucumber, radish, and boiled egg.' },
      { name: 'N3. Spicy Bibim Noodle', korean: '제비빔면', price: 21.99, description: 'Chewy noodles topped with spicy stir-fried pork and vegetables in a savory sauce. (Chicken option available)' },
    ]
  },
  {
    name: 'Jeongol 전골',
    description: 'Your choice of protein, simmered with glass noodles and vegetables in a savoury Korean broth. Served in a hot pot that keeps simmering at your table.',
    items: [
      { name: 'J1. Beef', korean: '소고기', price: 34.99, description: 'Korean-style beef hot pot in a light, non-spicy broth with assorted vegetables and glass noodles.' },
      { name: 'J2. Pork', korean: '돼지고기', price: 32.99, description: 'Korean-style pork hot pot in a spicy broth with assorted vegetables and glass noodles.' },
      { name: 'J3. Chicken', korean: '닭고기', price: 32.99, description: 'Korean-style chicken hot pot in a spicy broth with assorted vegetables and glass noodles.' },
      { name: 'J4. Vegetable', korean: '채소', price: 32.99, description: 'Korean-style vegetable hot pot in a light, non-spicy broth with assorted vegetables and glass noodles.' },
    ]
  },
  {
    name: 'Side Menu 곁들이',
    items: [
      { name: 'S1. Naengmyeon', korean: '냉면', price: 11.99, description: 'Cold buckwheat noodles served in a refreshing icy beef broth.' },
      { name: 'S2. Bibim Naengmyeon', korean: '비빔냉면', price: 11.99, description: 'Chewy buckwheat noodles served cold and tossed in a spicy-sweet chili sauce.' },
      { name: 'S3. Yukhwe Bibimbap', korean: '육회비빔밥', price: 13.99, description: 'Traditional Korean rice bowl featuring finely seasoned raw beef (yukhoe), assorted fresh vegetables.' },
      { name: 'S4. Steamed Egg', korean: '계란찜', price: 8.99, description: 'A fluffy Korean-style steamed egg, served piping hot in a hot bowl, topped with melted mozzarella cheese.' },
      { name: 'S5. Corn Cheese', korean: '콘치즈', price: 6.99, description: 'Sweet corn mixed with melted cheese, served hot and bubbly.' },
      { name: 'S6. Dwenjang Jjigae', korean: '된장찌개', price: 7.99, description: 'Soybean paste stew with vegetables, tofu, and beef.' },
      { name: 'S7. Spicy Ramyun', korean: '소고기라면', price: 8.99, description: 'Spicy Korean style ramyun with beef.' },
    ]
  },
  {
    name: '3 Person Combo',
    items: [
      { name: 'C1. Beef Combo', korean: '소고기', price: 89.99, description: 'Chuck Flap Tail (180g), Boneless Short Rib (180g), Striploin (180g). Comes with Corn Cheese & Dwenjang Jjigae.' },
      { name: 'C2. Pork Combo', korean: '돼지고기', price: 72.99, description: 'Pork Belly (180g), Pork Shoulder (180g), Pork Jowl (180g). Comes with Corn Cheese & Dwenjang Jjigae.' },
    ]
  },
  {
    name: 'Extra Bites 추가',
    items: [
      { name: 'E1. Bowl of Rice', price: 2.49 },
      { name: 'E2. Extra Banchan', price: 0.99, description: 'Additional serving of side dishes.' },
      { name: 'E3. Rice Cakes', price: 3.99 },
      { name: 'E4. Glass Noodles', price: 3.99 },
      { name: 'E5. Mozzarella Cheese', price: 3.99 },
      { name: 'E6. Lettuce Wraps', price: 3.99 },
    ]
  },
  {
    name: 'Dessert 디저트',
    items: [
      { name: 'Ddukffle', price: 7.99, description: 'Korean-style waffle made with chewy rice cake, served warm with a scoop of homemade banana pudding. May contain Peanuts and Treenuts.' },
      { name: 'Hotteok', price: 6.99, description: 'A warm Korean sweet pancake with a melting sugar-cinnamon center, perfectly matched with cold, creamy ice cream. Contains Peanuts and Treenuts.' },
    ]
  },
]

const drinkCategories = [
  {
    name: 'Alcoholic',
    items: [
      { name: 'High Ball - Omiberry', price: 10.99 },
      { name: 'High Ball - Green Plum', price: 10.99 },
      { name: 'Makguli Original', price: 17.99 },
      { name: 'Soju Original', price: 19.99 },
      { name: 'Soju Green Grape', price: 19.99 },
      { name: 'Terra Beer (500ml)', price: 9.99 },
      { name: 'Corona (330ml)', price: 7.49 },
      { name: 'Sapporo Draft', price: 9.49 },
      { name: 'Stella Draft', price: 9.49 },
      { name: 'Red Wine - Dog House (Glass)', price: 8.99 },
      { name: 'Red Wine - Dog House (Bottle)', price: 34.99 },
      { name: 'White Wine - Pinot Grigio (Glass)', price: 8.99 },
      { name: 'White Wine - Pinot Grigio (Bottle)', price: 34.99 },
    ]
  },
  {
    name: 'Non-Alcoholic',
    items: [
      { name: 'Original Coke', price: 2.99 },
      { name: 'Coke Zero', price: 2.99 },
      { name: 'Sprite', price: 2.99 },
      { name: 'Ginger Ale', price: 2.99 },
      { name: 'Iced Tea', price: 2.99 },
      { name: 'Banana Milk', price: 3.49 },
      { name: 'High Ball - Omiberry (NA)', price: 7.99 },
      { name: 'High Ball - Green Plum (NA)', price: 7.99 },
      { name: 'Korean Coffee (Hot)', price: 5.99 },
      { name: 'Korean Coffee (Iced)', price: 5.99 },
      { name: 'Jasmine Tea (Hot)', price: 3.00 },
      { name: 'Green Plum Tea (Hot)', price: 3.99 },
      { name: 'Citron Yuzu Tea (Hot)', price: 3.99 },
    ]
  },
]

// Menu Section
function MenuSection() {
  const [activeTab, setActiveTab] = useState('food')

  return (
    <section id="menu" className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-accent-orange">Menu</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            All BBQ orders require a minimum of 2 servings. All BBQ selections are served with banchan - Korean side dishes to enjoy with your meal!
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('food')}
            className={`px-6 py-2 font-semibold transition-colors ${
              activeTab === 'food'
                ? 'bg-accent-orange text-white'
                : 'bg-white/10 text-white/70 hover:text-white'
            } rounded-l-lg`}
          >
            Food
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`px-6 py-2 font-semibold transition-colors ${
              activeTab === 'drinks'
                ? 'bg-accent-orange text-white'
                : 'bg-white/10 text-white/70 hover:text-white'
            } rounded-r-lg`}
          >
            Drinks
          </button>
        </div>

        {/* Food Menu */}
        {activeTab === 'food' && (
          <div className="space-y-12">
            {menuCategories.map((category) => (
              <div key={category.name} className="bg-primary/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-accent-yellow mb-2">{category.name}</h3>
                {category.description && (
                  <p className="text-white/60 text-sm mb-4">{category.description}</p>
                )}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-primary-dark/50 rounded-lg p-4 hover:bg-primary-light/30 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-white">{item.name}</h4>
                          {item.korean && (
                            <span className="text-white/50 text-sm">{item.korean}</span>
                          )}
                          {item.weight && (
                            <span className="text-accent-orange text-sm ml-2">{item.weight}</span>
                          )}
                        </div>
                        <span className="text-accent-orange font-bold">${item.price.toFixed(2)}</span>
                      </div>
                      {item.description && (
                        <p className="text-white/60 text-sm">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Drinks Menu */}
        {activeTab === 'drinks' && (
          <div className="space-y-12">
            {drinkCategories.map((category) => (
              <div key={category.name} className="bg-primary/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-accent-yellow mb-4">{category.name}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-primary-dark/50 rounded-lg p-4 flex justify-between items-center hover:bg-primary-light/30 transition-colors"
                    >
                      <span className="text-white">{item.name}</span>
                      <span className="text-accent-orange font-bold">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Gallery Section
function Gallery() {
  const images = [
    { src: '/photo1.png', alt: 'BBQ table spread with grilling meat and banchan' },
    { src: '/photo2.png', alt: 'Full Korean BBQ table setup' },
    { src: '/photo3.png', alt: 'Sapporo beer and refreshing drinks' },
    { src: '/photo4.png', alt: 'Premium beef cuts on wooden board' },
    { src: '/photo5.png', alt: 'Meat platter with drinks and banchan' },
    { src: '/photo6.png', alt: 'Korean BBQ dining experience' },
    { src: '/photo7.png', alt: 'Grilled meats and side dishes' },
  ]

  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent-yellow">Gallery</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A glimpse into the Woodon experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="text-white text-sm font-medium text-center">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Reservation Section
function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your reservation request! We will contact you shortly to confirm.')
  }

  return (
    <section id="reservation" className="py-20 bg-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Make a <span className="text-accent-orange">Reservation</span>
          </h2>
          <p className="text-white/70">
            Book your table for an authentic Korean BBQ experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-primary/50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 mb-2" htmlFor="name">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2" htmlFor="phone">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2" htmlFor="guests">
                Number of Guests *
              </label>
              <select
                id="guests"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 mb-2" htmlFor="date">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-white/80 mb-2" htmlFor="time">
                Preferred Time *
              </label>
              <select
                id="time"
                required
                className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              >
                <option value="">Select a time</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="13:30">1:30 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-white/80 mb-2" htmlFor="message">
              Special Requests
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-primary-dark/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any special requests or dietary requirements..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full py-4 bg-accent-orange hover:bg-accent-orange/80 text-white font-bold rounded-lg transition-colors"
          >
            Request Reservation
          </button>
        </form>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-accent-yellow">Contact</span> Us
          </h2>
          <p className="text-white/70">
            We&apos;d love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent-orange/20 p-3 rounded-lg">
                  <MapPin className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-white/70">371 Princess Street<br />Kingston, Ontario K7L 1B9</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-orange/20 p-3 rounded-lg">
                  <Phone className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:6135426066" className="text-white/70 hover:text-accent-orange transition-colors">
                    (613) 542-6066
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-orange/20 p-3 rounded-lg">
                  <Clock className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Hours</h3>
                  <div className="text-white/70 space-y-1 text-sm">
                    <p>Monday: 4:00 PM - 10:00 PM</p>
                    <p>Tuesday - Sunday: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent-orange/20 p-3 rounded-lg">
                  <Instagram className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Social Media</h3>
                  <a
                    href="https://www.instagram.com/woo.don_kingston/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent-orange transition-colors"
                  >
                    @woo.don_kingston
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.6895!2d-76.4885!3d44.2315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab0fcb7c96cf%3A0x4c5b1e0f8c7c0f0!2s371%20Princess%20St%2C%20Kingston%2C%20ON%20K7L%201B9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Woodon Korean BBQ Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-primary-dark/50 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="contact-name">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="contact-email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="contact-subject">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2" htmlFor="contact-message">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-primary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent-orange hover:bg-accent-orange/80 text-white font-bold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-primary-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Woodon Logo" 
                className="h-12 w-12 rounded-full bg-white object-cover"
              />
              <span className="text-2xl font-bold text-accent-orange">WOODON</span>
            </div>
            <p className="text-white/60 text-sm">
              Authentic Korean BBQ experience in the heart of Kingston, Ontario.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-white/60 hover:text-accent-orange transition-colors text-sm">Home</a>
              <a href="#about" className="block text-white/60 hover:text-accent-orange transition-colors text-sm">About</a>
              <a href="#menu" className="block text-white/60 hover:text-accent-orange transition-colors text-sm">Menu</a>
              <a href="#reservation" className="block text-white/60 hover:text-accent-orange transition-colors text-sm">Reservation</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-white/60 text-sm">
              <p>371 Princess Street</p>
              <p>Kingston, Ontario K7L 1B9</p>
              <p>(613) 542-6066</p>
              <a
                href="https://www.instagram.com/woo.don_kingston/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent-orange transition-colors"
              >
                <Instagram size={16} /> @woo.don_kingston
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Woodon Korean BBQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="overflow-x-hidden max-w-[100vw]">
      <Navigation />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  )
}
