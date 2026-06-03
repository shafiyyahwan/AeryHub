// AeryHub Mock Data

const FARMERS = [
  {id:1,name:"Ahmad Razif",farm:"Ladang Hijau Selangor",address:"No.12, Jalan Kampung Baru",city:"Kuala Kubu Bharu",state:"Selangor",distance:"12 km",rating:4.8,reviews:142,image:"img/farm1.jpg",farmImage:"https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=200&fit=crop",products:12,sold:3240,certified:true,bio:"Produces fresh organic vegetables and herbs harvested daily for maximum freshness. Focuses on sustainable growing methods that support healthy soil and consistent quality throughout the year.",certifications:["SALM Organic","MyGAP","GlobalGAP"]},
  {id:2,name:"Siti Rahmah",farm:"Kebun Segar Cameron",address:"Lot 88, Jalan Strawberry",city:"Tanah Rata",state:"Pahang",distance:"89 km",rating:4.9,reviews:287,image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",products:18,sold:8921,certified:true,bio:"Grows premium highland vegetables in the cool mountain climate. Every harvest is carefully selected to ensure freshness, flavor, and nutritional value for customers.",certifications:["SALM Organic","MyGAP"]},
  {id:3,name:"Lim Ah Kow",farm:"Happy Farm Perak",address:"No.5, Jalan Lembah Permai",city:"Ipoh",state:"Perak",distance:"145 km",rating:4.6,reviews:98,image:"https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=200&fit=crop",products:8,sold:1820,certified:false,bio:"Cultivates a variety of tropical fruits using natural farming practices. Seasonal harvests are picked at peak ripeness to deliver better taste and quality.",certifications:["MyGAP"]},
  {id:4,name:"Muthu Krishnan",farm:"Green Valley Farm",address:"No.22, Jalan Nilai Perdana 3",city:"Nilai",state:"Negeri Sembilan",distance:"34 km",rating:4.7,reviews:176,image:"https://images.unsplash.com/photo-1559564099-a9e8d2e9c0e2?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=200&fit=crop",products:14,sold:4102,certified:true,bio:"Supplies fresh chillies and specialty crops to households and local businesses. Emphasizes consistent harvest quality and environmentally responsible cultivation methods.",certifications:["SALM Organic","GlobalGAP"]},
  {id:5,name:"Fatimah Zahra",farm:"Ladang Impian",address:"Lot 15, Jalan Slim River Lama",city:"Slim River",state:"Perak",distance:"78 km",rating:4.5,reviews:63,image:"https://images.unsplash.com/photo-1655709890891-fa62b4ccba0b?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=200&fit=crop",products:6,sold:892,certified:false,bio:"Combines modern agricultural techniques with careful crop management. Produces fresh vegetables that meet high standards of quality and freshness.",certifications:["MyGAP"]},
  {id:6,name:"Rajesh Kumar",farm:"Sunshine Orchard",address:"Jalan Seremban Jaya",city:"Seremban",state:"Negeri Sembilan",distance:"56 km",rating:4.8,reviews:201,image:"https://images.unsplash.com/photo-1622473590773-f588134b6ce7?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?w=400&h=200&fit=crop",products:10,sold:5678,certified:true,bio:"Produces premium tropical fruits known for their sweetness and quality. Careful harvesting and post-harvest handling help maintain freshness from farm to customer.",certifications:["SALM Organic","MyGAP","GlobalGAP"]},
  {id:7,name:"Noraini Hassan",farm:"Padi Murni Kedah",address:"Jalan Alor Setar-Sungai Petani",city:"Alor Setar",state:"Kedah",distance:"380 km",rating:4.9,reviews:334,image:"https://images.unsplash.com/photo-1612898499488-21221d22a75f?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=200&fit=crop",products:5,sold:12400,certified:true,bio:"Produces high-quality rice cultivated with decades of farming expertise. Every harvest is processed and stored carefully to preserve its natural flavor and texture.",certifications:["SALM Organic"]},
  {id:8,name:"Chong Wei Ming",farm:"Dragon Fruit Paradise",address:"Jalan Kuala Pilah Lama",city:"Kuala Pilah",state:"Negeri Sembilan",distance:"92 km",rating:4.6,reviews:145,image:"https://images.unsplash.com/photo-1593113598332-cd288d649433?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=200&fit=crop",products:7,sold:2980,certified:false,bio:"Specializes in growing vibrant, sweet, and nutritious dragon fruits. Modern cultivation practices help ensure reliable harvests and excellent fruit quality.",certifications:["MyGAP"]},
  {id:9,name:"Aisyah Mohd",farm:"Herbs & Spices Garden",address:"Jalan Rawang Batu 16",city:"Rawang",state:"Selangor",distance:"28 km",rating:4.7,reviews:89,image:"https://images.unsplash.com/photo-1655709890483-3d73e15fc6c5?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop",products:15,sold:1650,certified:true,bio:"Produces a diverse range of fresh herbs and aromatic plants for cooking and wellness. Crops are grown with attention to flavor, freshness, and natural quality.",certifications:["SALM Organic","MyGAP"]},
  {id:10,name:"Tan Boon Huat",farm:"Golden Harvest Farm",address:"Jalan Banting-Klang",city:"Banting",state:"Selangor",distance:"41 km",rating:4.8,reviews:212,image:"https://images.unsplash.com/photo-1592878904946-b3cd8ae243d4?w=150&h=150&fit=crop&crop=face",farmImage:"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=200&fit=crop",products:11,sold:6231,certified:true,bio:"Produces sweet corn, vegetables, and seasonal crops harvested at peak freshness. Focuses on reliable supply, consistent quality, and sustainable farming practices.",certifications:["MyGAP","GlobalGAP"]},
];

const PRODUCTS = [
  { id: 1, name: "Tomato Organik", category: "Vegetables", stock: 240, rating: 4.8, reviews: 89, sold: 1240, farmerId: 1, harvestDate: "2026-06-01", organic: true, description: "Tomato organik ranum matahari ditanam tanpa racun perosak di Kuala Kubu Bharu. Sesuai untuk salad dan sambal.", images: ["https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop"], tags: ["organic", "fresh", "local", "sayur"], pricing: [{ label: "250g", price: 2.20 }, { label: "500g", price: 4.00 }, { label: "1kg", price: 7.50 }] },
  { id: 2, name: "Cherry Tomato", category: "Vegetables", stock: 180, rating: 4.7, reviews: 64, sold: 530, farmerId: 1, harvestDate: "2026-06-01", organic: true, description: "Tomato ceri Cameron Highlands yang manis, rangup, dan penuh jus. Sesuai untuk snek sihat.", images: ["https://images.unsplash.com/photo-1558818498-28c1e002b655?w=400&h=400&fit=crop"], tags: ["organic", "sweet", "snack", "seasonal"], pricing: [{ label: "200g", price: 4.50 }, { label: "500g", price: 9.80 }] },
  { id: 3, name: "Cili Merah Kulai Segar", category: "Vegetables", stock: 95, rating: 4.6, reviews: 112, sold: 2100, farmerId: 4, harvestDate: "2026-05-30", organic: false, description: "Cili merah gred Kulai yang pedas ketagih, dipetik segar dari ladang di Nilai.", images: ["https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&h=400&fit=crop"], tags: ["spicy", "fresh", "local", "seasonal"], pricing: [{ label: "100g", price: 3.20 }, { label: "250g", price: 7.00 }, { label: "500g", price: 13.50 }] },
  { id: 4, name: "Salad Cameron", category: "Vegetables", stock: 320, rating: 4.9, reviews: 201, sold: 3420, farmerId: 2, harvestDate: "2026-06-02", organic: true, description: "Salad Butterhead segar dan rapuh dari tanah tinggi Cameron Highlands.", images: ["https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop"], tags: ["organic", "highland", "crisp"], pricing: [{ label: "1 pokok (1 head)", price: 3.50 }, { label: "3 pokok (Combo Pack)", price: 9.00 }] },
  { id: 5, name: "Bayam Hijau Segar", category: "Vegetables", stock: 150, rating: 4.7, reviews: 78, sold: 940, farmerId: 2, harvestDate: "2026-06-02", organic: true, description: "Bayam hijau organik kaya dengan zat besi, dituai subuh untuk kesegaran maksimum.", images: ["https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop"], tags: ["organic", "nutritious", "sayur"], pricing: [{ label: "250g", price: 2.80 }, { label: "500g", price: 5.00 }] },
  { id: 6, name: "Tembikai Seedles", category: "Fruits", stock: 48, rating: 4.8, reviews: 156, sold: 410, farmerId: 10, harvestDate: "2026-05-28", organic: false, description: "Tembikai merah tanpa biji yang manis, gred A, sesuai untuk cuaca panas Malaysia.", images: ["https://images.unsplash.com/photo-1563114773-84221bd62daa?w=400&h=400&fit=crop"], tags: ["sweet", "refreshing", "buah", "seasonal"], pricing: [{ label: "Saiz S (2-3kg)", price: 12.00 }, { label: "Saiz M (4-5kg)", price: 19.50 }, { label: "Saiz L (6kg+)", price: 26.00 }] },
  { id: 7, name: "Buah Naga Merah", category: "Fruits", stock: 200, rating: 4.6, reviews: 93, sold: 1150, farmerId: 8, harvestDate: "2026-05-31", organic: false, description: "Buah naga isi merah organik dari Kuala Pilah. Manis gred premium.", images: ["https://images.unsplash.com/photo-1527325678964-54921661f888?w=400&h=400&fit=crop"], tags: ["sweet", "antioxidant", "buah", "seasonal"], pricing: [{ label: "1kg (2-3 biji)", price: 9.50 }, { label: "3kg (Kotak Borong)", price: 26.00 }] },
  { id: 8, name: "Harumanis Perlis", category: "Fruits", stock: 120, rating: 4.9, reviews: 278, sold: 5620, farmerId: 6, harvestDate: "2026-05-25", organic: false, description: "Mangga Harumanis premium asli. Aromanya memikat, isinya tebal dan sangat manis.", images: ["https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop"], tags: ["premium", "sweet", "seasonal"], pricing: [{ label: "1kg (Gred A)", price: 28.00 }, { label: "3kg (Kotak Hadiah)", price: 80.00 }] },
  { id: 9, name: "Jagung Manis Madu", category: "Vegetables", stock: 400, rating: 4.7, reviews: 188, sold: 3890, farmerId: 10, harvestDate: "2026-06-01", organic: false, description: "Jagung manis mutiara madu dari Banting. Sangat manis, sesuai direbus atau dibakar.", images: ["https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop"], tags: ["sweet", "fresh", "banting"], pricing: [{ label: "3 Tongkol", price: 5.00 }, { label: "10 Tongkol (Pek Kenduri)", price: 15.00 }] },
  { id: 10, name: "Terung Panjang", category: "Vegetables", stock: 88, rating: 4.5, reviews: 42, sold: 620, farmerId: 3, harvestDate: "2026-05-30", organic: false, description: "Terung panjang ungu segar dari Ipoh, berkulit nipis and empuk apabila dimasak.", images: ["/img/terung.jpg"], tags: ["fresh", "local", "sayur"], pricing: [{ label: "500g", price: 4.50 }, { label: "1kg", price: 8.00 }] },
  { id: 11, name: "Timun Jepun Cameron", category: "Vegetables", stock: 175, rating: 4.6, reviews: 67, sold: 1430, farmerId: 2, harvestDate: "2026-06-02", organic: true, description: "Timun Jepun premium rangup tinggi kandungan air, ditanam secara hidroponik.", images: ["/img/pandan.jpg"], tags: ["crispy", "organic", "hidroponik"], pricing: [{ label: "500g", price: 3.80 }, { label: "1kg", price: 7.00 }] },
  { id: 12, name: "Daun Pandan Wangi", category: "Herbs", stock: 300, rating: 4.8, reviews: 134, sold: 4500, farmerId: 9, harvestDate: "2026-06-02", organic: true, description: "Daun pandan tua kampung asli, beraroma pekat untuk masakan nasi lemak dan kuih.", images: ["https://images.unsplash.com/photo-1604499759580-39a8fb50a4b5?w=400&h=400&fit=crop"], tags: ["aromatic", "cooking", "baking"], pricing: [{ label: "100g (approx 10 helai)", price: 2.00 }, { label: "300g (Pek Komersial)", price: 5.00 }] },
  { id: 13, name: "Serai Kampung Segar", category: "Herbs", stock: 220, rating: 4.7, reviews: 98, sold: 2310, farmerId: 9, harvestDate: "2026-06-01", organic: true, description: "Batang serai wangi kampung segar gred masakan dari Rawang.", images: ["/img/serai.jpg"], tags: ["aromatic", "cooking", "fresh"], pricing: [{ label: "250g (approx 5-7 batang)", price: 2.50 }, { label: "1kg", price: 8.50 }] },
  { id: 14, name: "Ikan Siakap Sangkar", category: "Aquaculture products", stock: 65, rating: 4.9, reviews: 142, sold: 3240, farmerId: 10, harvestDate: "2026-06-02", organic: false, description: "Ikan Siakap hidup dari ternakan sangkar air masin Banting. Isi manis, bersih tanpa bau lumpur. Disiang percuma sebelum penghantaran.", images: ["/img/siakap.jpg"], tags: ["aquaculture", "seafood", "fresh-fish"], pricing: [{ label: "600g - 800g (1 ekor)", price: 16.80 }, { label: "900g - 1.1kg (1 ekor)", price: 23.50 }] },
  { id: 15, name: "Udang Harimau Kolam Gred A", category: "Aquaculture products", stock: 45, rating: 4.8, reviews: 92, sold: 1410, farmerId: 10, harvestDate: "2026-06-02", organic: false, description: "Udang Harimau (Tiger Prawn) ternakan air payau premium, ditangkap segar mengikut pesanan. Kulit keras berkilat, isi padat mantap.", images: ["/img/udang.jpg"], tags: ["aquaculture", "prawns", "premium"], pricing: [{ label: "300g (approx 10-12 ekor)", price: 24.00 }, { label: "600g (approx 20-24 ekor)", price: 46.00 }] }
];



const ORDERS = [
  { id: "AH-20250601-001", status: "out_for_delivery", date: "2025-06-01", items: [{productId: 1, qty: 2, price: 5.50}, {productId: 4, qty: 1, price: 4.50}], total: 17.00, commission: 0.85, farmer: 1, address: "No 12, Jalan Subang 3, Putra Heights, 47650 Subang Jaya", payment: "FPX Banking" },
  { id: "AH-20250530-008", status: "delivered", date: "2025-05-30", items: [{productId: 8, qty: 1, price: 15.00}], total: 15.00, commission: 0.75, farmer: 6, address: "No 12, Jalan Subang 3, Putra Heights, 47650 Subang Jaya", payment: "Touch n Go" },
  { id: "AH-20250528-022", status: "delivered", date: "2025-05-28", items: [{productId: 9, qty: 2, price: 22.00}, {productId: 13, qty: 3, price: 3.50}], total: 54.50, commission: 2.725, farmer: 7, address: "No 12, Jalan Subang 3, Putra Heights, 47650 Subang Jaya", payment: "GrabPay" },
];

const NOTIFICATIONS = [
  { id: 1, type: "order", title: "Order Confirmed!", message: "Your order AH-20250601-001 has been confirmed by Ahmad Razif.", time: "5 mins ago", read: false, icon: "✅" },
  { id: 2, type: "delivery", title: "Out For Delivery", message: "Your order is on the way! Expected arrival: Today 3-5 PM.", time: "1 hour ago", read: false, icon: "🚚" },
  { id: 3, type: "message", title: "New Message", message: "Ahmad Razif: Your tomatoes are freshly harvested today!", time: "2 hours ago", read: false, icon: "💬" },
  { id: 4, type: "promo", title: "Weekend Deal!", message: "Get 20% off on all highland vegetables this weekend.", time: "1 day ago", read: true, icon: "🎉" },
  { id: 5, type: "review", title: "Review Received", message: "You received a 5-star review from Amir for Organic Tomato.", time: "2 days ago", read: true, icon: "⭐" },
];

const CHAT_CONVERSATIONS = [
  { id: 1, farmerId: 1, farmerName: "Ahmad Razif", lastMessage: "Your tomatoes are freshly harvested today!", time: "2h ago", unread: 2, messages: [
      { from: "farmer", text: "Hello! Thank you for your order.", time: "10:00 AM" },
      { from: "consumer", text: "Hi! When will my tomatoes be ready?", time: "10:05 AM" },
      { from: "farmer", text: "Your tomatoes are freshly harvested today!", time: "10:10 AM" },
      { from: "farmer", text: "I will pack them carefully for you 😊", time: "10:11 AM" },
    ]},
  { id: 2, farmerId: 6, farmerName: "Rajesh Kumar", lastMessage: "The mangoes are perfectly ripe now!", time: "1d ago", unread: 0, messages: [
      { from: "consumer", text: "Are the Harumanis mangoes available?", time: "Yesterday 2:00 PM" },
      { from: "farmer", text: "Yes! We just harvested a fresh batch.", time: "Yesterday 2:30 PM" },
      { from: "farmer", text: "The mangoes are perfectly ripe now!", time: "Yesterday 2:31 PM" },
    ]},
];

const FARMER_EARNINGS = {
  today: 145.50,
  thisWeek: 892.00,
  thisMonth: 3240.00,
  commissionPaid: 162.00,
  pendingPayout: 284.50,
  weeklyData: [420, 380, 510, 290, 640, 892, 145],
  topProducts: [
    { name: "Organic Tomato", sold: 340, revenue: 1870 },
    { name: "Cherry Tomato", sold: 180, revenue: 1422 },
    { name: "Butterhead Lettuce", sold: 120, revenue: 540 },
  ]
};


// App State
const AppState = {
  currentUser: null,
  cart: [],
  wishlist: [1, 8, 9],
  darkMode: false,

  login(role) {
    if (role === 'farmer') {
      this.currentUser = { role: 'farmer', name: 'Ahmad Razif', email: 'farmer@aeryhub.com', farmerId: 1, plan: 'free' };
    } else {
      this.currentUser = { role: 'consumer', name: 'Sarah Lim', email: 'consumer@aeryhub.com', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=100&h=100&fit=crop&crop=face' };
    }
    localStorage.setItem('aeryhub_user', JSON.stringify(this.currentUser));
  },

  logout() {
    this.currentUser = null;
    this.cart = [];
    localStorage.removeItem('aeryhub_user');
  },

  addToCart(productId, qty = 1) {
    const existing = this.cart.find(i => i.productId === productId);
    if (existing) existing.qty += qty;
    else this.cart.push({ productId, qty });
    this.saveCart();
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.productId !== productId);
    this.saveCart();
  },

  updateCartQty(productId, qty) {
    const item = this.cart.find(i => i.productId === productId);
    if (item) item.qty = qty;
    if (qty <= 0) this.removeFromCart(productId);
    this.saveCart();
  },

  saveCart() {
    localStorage.setItem('aeryhub_cart', JSON.stringify(this.cart));
  },

  loadCart() {
    const saved = localStorage.getItem('aeryhub_cart');
    if (saved) this.cart = JSON.parse(saved);
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      // FIXED: Safely access inner pricing structures to avoid RM NaN issues
      const price = product && product.pricing && product.pricing.length > 0 ? product.pricing[0].price : 0;
      return sum + (price * item.qty);
    }, 0);
  },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) this.wishlist.splice(idx, 1);
    else this.wishlist.push(productId);
  },

  init() {
    const saved = localStorage.getItem('aeryhub_user');
    if (saved) this.currentUser = JSON.parse(saved);
    this.loadCart();
    const dm = localStorage.getItem('aeryhub_dark');
    if (dm === 'true') {
      this.darkMode = true;
      document.body.classList.add('dark');
    }
  }
};
