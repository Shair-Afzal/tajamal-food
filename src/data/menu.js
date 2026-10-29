import { SHOP, CATEGORIES } from '../config.js';

export { SHOP, CATEGORIES };

export const MENU = [
  // ---------- DEALS ----------
  { 
    id: "deal-1", 
    category: "Deals", 
    name: "Deal 1", 
    price: 470, 
    includes: ["Zinger Burger", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Crispy whole muscle Zinger Burger, salted hot fries & chilled regular drink.",
    featured: true,
    badge: "Most Popular"
  },
  { 
    id: "deal-2", 
    category: "Deals", 
    name: "Deal 2", 
    price: 540, 
    includes: ["Fillet Burger", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: "Succulent chicken fillet burger served with golden fries and chilled cold drink.",
    featured: false,
    badge: "Value Deal"
  },
  { 
    id: "deal-3", 
    category: "Deals", 
    name: "Deal 3", 
    price: 540, 
    includes: ["Cheetos Burger", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    description: "Flamin' Cheetos crusted chicken burger with cheese, fries and regular drink.",
    featured: true,
    badge: "Chef Special"
  },
  { 
    id: "deal-4", 
    category: "Deals", 
    name: "Deal 4", 
    price: 490, 
    includes: ["Panini Tikka Sandwich", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description: "Toasted panini loaded with smoky chicken tikka and melted cheese, with fries & drink.",
    featured: false
  },
  { 
    id: "deal-5", 
    category: "Deals", 
    name: "Deal 5", 
    price: 550, 
    includes: ["Crunchy Tortilla Wrap", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Toasted tortilla stuffed with crispy chicken strips, secret sauce, fries and drink.",
    featured: true,
    badge: "Top Rated"
  },
  { 
    id: "deal-6", 
    category: "Deals", 
    name: "Deal 6", 
    price: 470, 
    includes: ["Zinger Paratha Roll", "Fries", "Regular Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Flaky layered paratha wrapped with crispy zinger fillet, spicy sauce, fries & drink.",
    featured: false
  },
  { 
    id: "deal-7", 
    category: "Deals", 
    name: "Deal 7", 
    price: 800, 
    includes: ["Small Pizza", "6 Pcs Nuggets", "Half Ltr. Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "1 Small 7\" Cheesy Pizza + 6 Crispy Chicken Nuggets + Half Liter Drink.",
    featured: true,
    badge: "Best Value"
  },
  { 
    id: "deal-8", 
    category: "Deals", 
    name: "Deal 8", 
    price: 1800, 
    includes: ["2 Medium Pizza", "Jumbo Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "2 Medium 10\" Pizzas in your choice of flavors + 1 Jumbo 1.5L soft drink.",
    featured: true,
    badge: "Family Feast"
  },
  { 
    id: "deal-9", 
    category: "Deals", 
    name: "Deal 9", 
    price: 3400, 
    includes: ["2 Large Pizza", "12 Hot Wings", "Jumbo Drink"], 
    variants: [], 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "2 Large 13\" Pizzas + 12 Fiery Hot Wings + 1 Jumbo 1.5L soft drink.",
    featured: true,
    badge: "Mega Party"
  },

  // ---------- BURGERS ----------
  { 
    id: "burger-1", 
    category: "Burgers", 
    name: "Zinger Burger", 
    price: 300, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Signature whole muscle crispy fried chicken fillet, fresh lettuce and garlic mayo.",
    featured: true,
    isSpicy: true,
    badge: "Customer Favorite"
  },
  { 
    id: "burger-2", 
    category: "Burgers", 
    name: "Patty Burger", 
    price: 240, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    description: "Grilled spiced chicken patty tucked in toasted sesame buns with tangy sauce.",
    featured: false
  },
  { 
    id: "burger-3", 
    category: "Burgers", 
    name: "Double Patty Burger", 
    price: 400, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    description: "Two seasoned juicy chicken patties with extra dressing and crisp greens.",
    featured: false
  },
  { 
    id: "burger-4", 
    category: "Burgers", 
    name: "Zinger Cheese Burger", 
    price: 350, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Crispy fried zinger fillet topped with melted cheddar cheese slice.",
    featured: true,
    isSpicy: true
  },
  { 
    id: "burger-5", 
    category: "Burgers", 
    name: "Tower Burger", 
    price: 450, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    description: "Stacked mega burger with crunchy zinger, hash potato patty, cheese and dressing.",
    featured: true,
    badge: "Big Bite"
  },
  { 
    id: "burger-6", 
    category: "Burgers", 
    name: "Double Zinger Burger", 
    price: 540, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Double the crunch! Two whole muscle zinger fillets stacked high.",
    featured: true,
    isSpicy: true,
    badge: "Double Crunch"
  },
  { 
    id: "burger-7", 
    category: "Burgers", 
    name: "Cheese Patty Burger", 
    price: 290, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    description: "Classic tender patty burger with melted cheese and house signature sauce.",
    featured: false
  },
  { 
    id: "burger-8", 
    category: "Burgers", 
    name: "Cheetos Burger", 
    price: 370, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?auto=format&fit=crop&w=800&q=80",
    description: "Crispy chicken rolled in flaming Cheetos crumbs drenched with cheddar sauce.",
    featured: true,
    badge: "Flamin' Hot"
  },
  { 
    id: "burger-9", 
    category: "Burgers", 
    name: "Fillet Burger", 
    price: 370, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: "Tender grilled whole breast fillet with caramelized onions and herb dressing.",
    featured: false
  },
  { 
    id: "burger-10", 
    category: "Burgers", 
    name: "Tikka Boti Burger", 
    price: 300, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    description: "Charcoal smoky chicken tikka chunks with onions and mint yogurt sauce.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "burger-11", 
    category: "Burgers", 
    name: "Malai Boti Burger", 
    price: 350, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Creamy melt-in-mouth malai boti pieces infused with aromatic cardamom cream.",
    featured: false
  },
  { 
    id: "burger-12", 
    category: "Burgers", 
    name: "Siracha Honey Zinger Burger", 
    price: 450, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    description: "Crispy zinger coated in sweet spicy sriracha honey glaze with fresh coleslaw.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "burger-13", 
    category: "Burgers", 
    name: "Dynamite Saucy Burger", 
    price: 350, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    description: "Saucy fried chicken exploding with TFC's fiery Japanese dynamite dressing.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "burger-14", 
    category: "Burgers", 
    name: "Chapli Burger", 
    price: 350, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    description: "Peshawari spiced chicken chapli patty fried with tomato slice and fresh greens.",
    featured: false
  },
  { 
    id: "burger-15", 
    category: "Burgers", 
    name: "Pizza Burger", 
    price: 650, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    description: "Crispy chicken patty stuffed with pizza marinara, herbs and oozing mozzarella.",
    featured: true,
    badge: "Specialty"
  },
  { 
    id: "burger-16", 
    category: "Burgers", 
    name: "Thai Burger", 
    price: 370, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    description: "Crispy chicken tossed in tangy Thai sweet-chili glaze with crispy cabbage.",
    featured: false
  },

  // ---------- PIZZAS (S 7" / M 10" / L 13") ----------
  { 
    id: "pizza-1", 
    category: "Pizzas", 
    name: "Tfc Special Pizza", 
    price: 550, 
    variants: [{ label: 'Small 7"', price: 550 }, { label: 'Medium 10"', price: 870 }, { label: 'Large 13"', price: 1300 }], 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Our crown jewel! Smoked chicken, black olives, sweet corn, mushrooms and triple cheese.",
    featured: true,
    badge: "House Special"
  },
  { 
    id: "pizza-2", 
    category: "Pizzas", 
    name: "Chicken Fajita Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    description: "Marinated Mexican fajita chicken cubes, crisp onions, bell peppers and jalapeños.",
    featured: true
  },
  { 
    id: "pizza-3", 
    category: "Pizzas", 
    name: "Chicken Tikka Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "Smoky tandoori chicken tikka chunks with onions and mozzarella on fresh dough.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "pizza-4", 
    category: "Pizzas", 
    name: "Chicken Supreme Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    description: "Loaded with smoked chicken, fajita chicken, mushrooms, onions, olives and capsicum.",
    featured: false
  },
  { 
    id: "pizza-5", 
    category: "Pizzas", 
    name: "Cheese Lover Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80",
    description: "Herb-infused tomato marinara under a thick double layer of 100% mozzarella.",
    featured: false,
    isVeg: true
  },
  { 
    id: "pizza-6", 
    category: "Pizzas", 
    name: "Maxicon Pizza", 
    price: 500, 
    variants: [{ label: 'Small 7"', price: 500 }, { label: 'Medium 10"', price: 850 }, { label: 'Large 13"', price: 1250 }], 
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    description: "Spicy Mexican sauce, seasoned chicken cubes, sweet corn, hot jalapeños and onions.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "pizza-7", 
    category: "Pizzas", 
    name: "Arabic Rancher Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Creamy garlic ranch sauce base, tender grilled chicken chunks and roasted peppers.",
    featured: false
  },
  { 
    id: "pizza-8", 
    category: "Pizzas", 
    name: "Hot & Spicy Pizza", 
    price: 450, 
    variants: [{ label: 'Small 7"', price: 450 }, { label: 'Medium 10"', price: 800 }, { label: 'Large 13"', price: 1200 }], 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    description: "Fiery chili sauce, spiced chicken pieces, chili flakes, diced tomatoes and jalapenos.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "pizza-9", 
    category: "Pizzas", 
    name: "Malai Boti Pizza", 
    price: 500, 
    variants: [{ label: 'Small 7"', price: 500 }, { label: 'Medium 10"', price: 950 }, { label: 'Large 13"', price: 1400 }], 
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "Creamy Malai chicken boti with garlic sauce, bell peppers and bubbly mozzarella.",
    featured: false
  },
  { 
    id: "pizza-10", 
    category: "Pizzas", 
    name: "Chicken Stuff Pizza", 
    price: 700, 
    variants: [{ label: 'Small 7"', price: 700 }, { label: 'Medium 10"', price: 1050 }, { label: 'Large 13"', price: 1500 }], 
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    description: "Double crust loaded inside and outside with shredded chicken, garlic butter and cheese.",
    featured: false,
    badge: "Stuffed Crust"
  },
  { 
    id: "pizza-11", 
    category: "Pizzas", 
    name: "Kabaab Stuff Pizza", 
    price: 700, 
    variants: [{ label: 'Small 7"', price: 700 }, { label: 'Medium 10"', price: 1050 }, { label: 'Large 13"', price: 1500 }], 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Crust stuffed with juicy chicken seekh kabab, topped with smoked chicken and cheese.",
    featured: false,
    badge: "Kabab Crust"
  },
  { 
    id: "pizza-12", 
    category: "Pizzas", 
    name: "Chicken Sausages Pizza", 
    price: 650, 
    variants: [{ label: 'Small 7"', price: 650 }, { label: 'Medium 10"', price: 1000 }, { label: 'Large 13"', price: 1400 }], 
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    description: "Sliced chicken sausages, sweet corn, mushrooms, olives and extra stretchy cheese.",
    featured: false
  },
  { 
    id: "pizza-13", 
    category: "Pizzas", 
    name: "Crown Crust Pizza", 
    price: 950, 
    variants: [{ label: 'Medium 10"', price: 950 }, { label: 'Large 13"', price: 1350 }], 
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80",
    description: "Majestic crown-shaped crust filled with cheese bites, topped with grilled chicken.",
    featured: true,
    badge: "Crown Special"
  },
  { 
    id: "pizza-14", 
    category: "Pizzas", 
    name: "Lazania Pizza", 
    price: 1100, 
    variants: [{ label: 'Medium 10"', price: 1100 }, { label: 'Large 13"', price: 1600 }], 
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "Layered lasagna style pizza with seasoned chicken, bechamel, marinara and cheese.",
    featured: false,
    badge: "Chef Specialty"
  },
  { 
    id: "pizza-15", 
    category: "Pizzas", 
    name: "Extra Topping", 
    price: 100, 
    variants: [{ label: 'Small 7"', price: 100 }, { label: 'Medium 10"', price: 200 }, { label: 'Large 13"', price: 300 }], 
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Add extra melted mozzarella cheese, smoked chicken or fresh olives to any pizza.",
    featured: false
  },

  // ---------- SHAWARMA ----------
  { 
    id: "shawarma-1", 
    category: "Shawarma", 
    name: "TFC Special Oven Bake Shawarma", 
    price: 480, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Pita filled with roasted chicken and garlic mayo, baked with a layer of molten cheese.",
    featured: true,
    badge: "Oven Baked"
  },
  { 
    id: "shawarma-2", 
    category: "Shawarma", 
    name: "Chicken Shawarma", 
    price: 200, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    description: "Classic street style pita wrap with juicy rotisserie chicken, garlic tahini and pickles.",
    featured: false
  },
  { 
    id: "shawarma-3", 
    category: "Shawarma", 
    name: "Zinger Shawarma", 
    price: 270, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Crunchy fried zinger strips wrapped in soft Lebanese pita with tangy sauce.",
    featured: false
  },
  { 
    id: "shawarma-4", 
    category: "Shawarma", 
    name: "Zinger Cheese Shawarma", 
    price: 320, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Crispy zinger chicken strips loaded with melted cheddar cheese slice in fresh pita.",
    featured: false
  },
  { 
    id: "shawarma-5", 
    category: "Shawarma", 
    name: "Platter Shawarma", 
    price: 420, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    description: "Open plate carving of spiced chicken, french fries, garlic dip and 2 warm pitas.",
    featured: false
  },

  // ---------- PARATHAS ----------
  { 
    id: "paratha-1", 
    category: "Parathas", 
    name: "TFC Special Oven Baked Paratha", 
    price: 650, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Golden flaky paratha stuffed with spicy chicken and baked with bubbling cheese.",
    featured: true,
    badge: "Oven Baked"
  },
  { 
    id: "paratha-2", 
    category: "Parathas", 
    name: "Zinger Paratha Roll", 
    price: 300, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Crispy fried zinger pieces rolled in a hot flaky paratha with spicy green chutney.",
    featured: true
  },
  { 
    id: "paratha-3", 
    category: "Parathas", 
    name: "Kabab Paratha Roll", 
    price: 320, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    description: "Grilled spicy seekh kabab wrapped in buttery paratha with mint sauce and crisp onions.",
    featured: false
  },
  { 
    id: "paratha-4", 
    category: "Parathas", 
    name: "Tikka Paratha Roll", 
    price: 320, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Charcoal roasted BBQ tikka boti cubes rolled in hot paratha with onions.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "paratha-5", 
    category: "Parathas", 
    name: "Malai Boti Paratha Roll", 
    price: 360, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Succulent creamy malai boti pieces rolled in fresh paratha with special white sauce.",
    featured: false
  },

  // ---------- WRAPS ----------
  { 
    id: "wrap-1", 
    category: "Wraps", 
    name: "Crunchy Tortilla Wrap", 
    price: 380, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Crispy tenders, iceberg lettuce, diced tomatoes and creamy ranch in a toasted tortilla.",
    featured: false
  },
  { 
    id: "wrap-2", 
    category: "Wraps", 
    name: "Boti Tortilla Wrap", 
    price: 380, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    description: "Marinated chicken boti wrapped in soft tortilla with garlic mayo and greens.",
    featured: false
  },
  { 
    id: "wrap-3", 
    category: "Wraps", 
    name: "Malai Boti Tortilla Wrap", 
    price: 450, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    description: "Melt-in-mouth creamy malai boti pieces wrapped in warm toasted flour tortilla.",
    featured: false
  },
  { 
    id: "wrap-4", 
    category: "Wraps", 
    name: "Fillet Tortilla Wrap", 
    price: 400, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Char-grilled fillet strips with crisp peppers, onions and chipotle mayonnaise.",
    featured: false
  },
  { 
    id: "wrap-5", 
    category: "Wraps", 
    name: "Cheetos Tortilla Wrap", 
    price: 400, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Crispy tenders, flaming Cheetos crunch and liquid cheddar cheese in a warm tortilla.",
    featured: true,
    badge: "Crunchy Hot"
  },

  // ---------- WINGS & NUGGETS ----------
  { 
    id: "wings-1", 
    category: "Wings & Nuggets", 
    name: "Oven Baked Wing 6 Pcs", 
    price: 450, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
    description: "6 tender chicken wings slow baked with rosemary herbs to golden perfection.",
    featured: false
  },
  { 
    id: "wings-2", 
    category: "Wings & Nuggets", 
    name: "Hot Wings 6 Pcs", 
    price: 400, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1527477321055-43615b6294a5?auto=format&fit=crop&w=800&q=80",
    description: "6 crunchy fried wings seasoned with fiery red chili spice rub.",
    featured: true,
    isSpicy: true
  },
  { 
    id: "wings-3", 
    category: "Wings & Nuggets", 
    name: "Dynamite Saucy Wings 6 Pcs", 
    price: 550, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80",
    description: "6 crispy wings drenched in creamy, spicy Japanese dynamite sauce.",
    featured: true,
    badge: "Saucy Best"
  },
  { 
    id: "wings-4", 
    category: "Wings & Nuggets", 
    name: "Siracha Honey Wings 6 Pcs", 
    price: 600, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1527477321055-43615b6294a5?auto=format&fit=crop&w=800&q=80",
    description: "6 crispy wings tossed in a luscious sweet spicy sriracha honey reduction.",
    featured: false
  },
  { 
    id: "wings-5", 
    category: "Wings & Nuggets", 
    name: "Nuggets 6 Pcs", 
    price: 250, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: "Golden crispy bite-sized chicken tempura nuggets with garlic dip.",
    featured: false
  },
  { 
    id: "wings-6", 
    category: "Wings & Nuggets", 
    name: "Zinger Piece", 
    price: 250, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    description: "Single piece of TFC signature crispy fried bone-in chicken.",
    featured: false
  },

  // ---------- SANDWICHES ----------
  { 
    id: "sandwich-1", 
    category: "Sandwiches", 
    name: "TFC Special Sandwich", 
    price: 470, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description: "Triple-decker club sandwich with shredded chicken, boiled egg and cheese slice.",
    featured: false
  },
  { 
    id: "sandwich-2", 
    category: "Sandwiches", 
    name: "Panini Tikka Sandwich", 
    price: 320, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    description: "Pressed panini grilled with chicken tikka chunks, peppers and stringy mozzarella.",
    featured: false
  },
  { 
    id: "sandwich-3", 
    category: "Sandwiches", 
    name: "Panini Malai Sandwich", 
    price: 420, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    description: "Toasted panini packed with creamy malai boti and herb garlic dressing.",
    featured: false
  },

  // ---------- LOADED FRIES ----------
  { 
    id: "lfries-1", 
    category: "Loaded Fries", 
    name: "Loaded Fries", 
    price: 400, 
    variants: [{ label: "Regular", price: 400 }, { label: "Large", price: 600 }], 
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    description: "Crispy fries smothered in cheese sauce, zinger chicken chunks and jalapenos.",
    featured: true,
    badge: "Craving Pick"
  },

  // ---------- SIMPLE FRIES ----------
  { 
    id: "fries-1", 
    category: "Simple Fries", 
    name: "Simple Fries", 
    price: 150, 
    variants: [{ label: "Small", price: 150 }, { label: "Medium", price: 300 }, { label: "Large", price: 500 }], 
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    description: "Golden salted french fries fried hot on order with secret spice seasoning.",
    featured: false
  },

  // ---------- DIPS ----------
  { 
    id: "dip-1", 
    category: "Dips", 
    name: "Mayo Dip", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Creamy smooth mayo made with fresh ingredients.",
    featured: false
  },
  { 
    id: "dip-2", 
    category: "Dips", 
    name: "Garlic Mayo", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Rich mayonnaise blended with roasted garlic and herbs.",
    featured: false
  },
  { 
    id: "dip-3", 
    category: "Dips", 
    name: "Cheese Slice", 
    price: 60, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    description: "Single slice of melted cheddar cheese for extra richness.",
    featured: false
  },
  { 
    id: "dip-4", 
    category: "Dips", 
    name: "Jalapeno Sauce", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Zesty spicy sauce made with real pickled jalapeno peppers.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "dip-5", 
    category: "Dips", 
    name: "Dynamite Sauce", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Signature sweet, tangy and spicy Japanese dynamite mayo.",
    featured: false,
    isSpicy: true
  },
  { 
    id: "dip-6", 
    category: "Dips", 
    name: "Thousand Iceland Sauce", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Classic sweet pink burger and sandwich sauce.",
    featured: false
  },
  { 
    id: "dip-7", 
    category: "Dips", 
    name: "Bar B. Q Sauce", 
    price: 40, 
    variants: [], 
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80",
    description: "Smoky sweet hickory barbecue sauce.",
    featured: false
  }
];

export default MENU;
