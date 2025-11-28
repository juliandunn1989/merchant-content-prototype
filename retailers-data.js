// Retailers Data - 100 UK Retailers
// Mix of major, mid-level retailers, restaurants and leisure activities
const retailers = [
    // Grocery Retailers
    { id: 1, name: "ASDA", emoji: "🛒", offerRate: 2, category: "Grocery" },
    { id: 2, name: "Tesco", emoji: "🛍️", offerRate: 3, category: "Grocery" },
    { id: 3, name: "Sainsbury's", emoji: "🥫", offerRate: 2, category: "Grocery" },
    { id: 4, name: "Morrisons", emoji: "🥬", offerRate: 4, category: "Grocery" },
    { id: 5, name: "Waitrose", emoji: "🍇", offerRate: 5, category: "Grocery" },
    { id: 6, name: "Aldi", emoji: "🛒", offerRate: 1, category: "Grocery" },
    { id: 7, name: "Lidl", emoji: "🥖", offerRate: 2, category: "Grocery" },
    { id: 8, name: "Iceland", emoji: "🧊", offerRate: 3, category: "Grocery" },
    { id: 9, name: "Co-op", emoji: "🏪", offerRate: 3, category: "Grocery" },
    { id: 10, name: "Marks & Spencer", emoji: "🥗", offerRate: 4, category: "Grocery" },

    // Restaurants - Fast Food
    { id: 11, name: "McDonald's", emoji: "🍔", offerRate: 2, category: "Restaurant" },
    { id: 12, name: "KFC", emoji: "🍗", offerRate: 3, category: "Restaurant" },
    { id: 13, name: "Burger King", emoji: "👑", offerRate: 3, category: "Restaurant" },
    { id: 14, name: "Subway", emoji: "🥪", offerRate: 2, category: "Restaurant" },
    { id: 15, name: "Greggs", emoji: "🥐", offerRate: 4, category: "Restaurant" },
    { id: 16, name: "Pret A Manger", emoji: "☕", offerRate: 5, category: "Restaurant" },
    { id: 17, name: "Costa Coffee", emoji: "☕", offerRate: 3, category: "Restaurant" },
    { id: 18, name: "Starbucks", emoji: "🌟", offerRate: 4, category: "Restaurant" },
    { id: 19, name: "Nando's", emoji: "🐔", offerRate: 6, category: "Restaurant" },
    { id: 20, name: "Pizza Hut", emoji: "🍕", offerRate: 5, category: "Restaurant" },
    { id: 21, name: "Domino's Pizza", emoji: "🍕", offerRate: 4, category: "Restaurant" },
    { id: 22, name: "Pizza Express", emoji: "🍕", offerRate: 7, category: "Restaurant" },
    { id: 23, name: "Wagamama", emoji: "🍜", offerRate: 6, category: "Restaurant" },
    { id: 24, name: "Yo! Sushi", emoji: "🍱", offerRate: 5, category: "Restaurant" },
    { id: 25, name: "Five Guys", emoji: "🍔", offerRate: 4, category: "Restaurant" },
    { id: 26, name: "Leon", emoji: "🥗", offerRate: 5, category: "Restaurant" },
    { id: 27, name: "Dishoom", emoji: "🍛", offerRate: 8, category: "Restaurant" },
    { id: 28, name: "Zizzi", emoji: "🍝", offerRate: 6, category: "Restaurant" },
    { id: 29, name: "Frankie & Benny's", emoji: "🍔", offerRate: 5, category: "Restaurant" },
    { id: 30, name: "Bella Italia", emoji: "🇮🇹", offerRate: 6, category: "Restaurant" },

    // Fashion & Clothing
    { id: 31, name: "Primark", emoji: "👕", offerRate: 1, category: "Fashion" },
    { id: 32, name: "Next", emoji: "👗", offerRate: 4, category: "Fashion" },
    { id: 33, name: "H&M", emoji: "👔", offerRate: 3, category: "Fashion" },
    { id: 34, name: "Zara", emoji: "👘", offerRate: 5, category: "Fashion" },
    { id: 35, name: "ASOS", emoji: "👗", offerRate: 6, category: "Fashion" },
    { id: 36, name: "New Look", emoji: "👚", offerRate: 3, category: "Fashion" },
    { id: 37, name: "River Island", emoji: "👖", offerRate: 4, category: "Fashion" },
    { id: 38, name: "Topshop", emoji: "👠", offerRate: 5, category: "Fashion" },
    { id: 39, name: "John Lewis", emoji: "🎁", offerRate: 6, category: "Fashion" },
    { id: 40, name: "Debenhams", emoji: "🏬", offerRate: 4, category: "Fashion" },

    // Sports & Fitness
    { id: 41, name: "JD Sports", emoji: "👟", offerRate: 3, category: "Sports" },
    { id: 42, name: "Sports Direct", emoji: "⚽", offerRate: 2, category: "Sports" },
    { id: 43, name: "Nike", emoji: "✔️", offerRate: 5, category: "Sports" },
    { id: 44, name: "Adidas", emoji: "👟", offerRate: 4, category: "Sports" },
    { id: 45, name: "Foot Locker", emoji: "👟", offerRate: 3, category: "Sports" },
    { id: 46, name: "PureGym", emoji: "💪", offerRate: 2, category: "Leisure" },
    { id: 47, name: "David Lloyd", emoji: "🎾", offerRate: 7, category: "Leisure" },
    { id: 48, name: "Decathlon", emoji: "🚴", offerRate: 3, category: "Sports" },

    // Electronics & Tech
    { id: 49, name: "Currys", emoji: "💻", offerRate: 3, category: "Electronics" },
    { id: 50, name: "Argos", emoji: "📦", offerRate: 2, category: "Electronics" },
    { id: 51, name: "Apple Store", emoji: "🍎", offerRate: 2, category: "Electronics" },
    { id: 52, name: "Carphone Warehouse", emoji: "📱", offerRate: 3, category: "Electronics" },
    { id: 53, name: "PC World", emoji: "🖥️", offerRate: 4, category: "Electronics" },

    // Home & DIY
    { id: 54, name: "B&Q", emoji: "🔨", offerRate: 3, category: "Home & DIY" },
    { id: 55, name: "Homebase", emoji: "🏠", offerRate: 4, category: "Home & DIY" },
    { id: 56, name: "IKEA", emoji: "🛋️", offerRate: 2, category: "Home & DIY" },
    { id: 57, name: "Dunelm", emoji: "🛏️", offerRate: 5, category: "Home & DIY" },
    { id: 58, name: "The Range", emoji: "🏡", offerRate: 3, category: "Home & DIY" },
    { id: 59, name: "Screwfix", emoji: "🔧", offerRate: 2, category: "Home & DIY" },
    { id: 60, name: "Wickes", emoji: "🪚", offerRate: 3, category: "Home & DIY" },

    // Entertainment & Leisure
    { id: 61, name: "Vue Cinema", emoji: "🎬", offerRate: 6, category: "Leisure" },
    { id: 62, name: "Odeon", emoji: "🍿", offerRate: 5, category: "Leisure" },
    { id: 63, name: "Cineworld", emoji: "🎥", offerRate: 5, category: "Leisure" },
    { id: 64, name: "Thorpe Park", emoji: "🎢", offerRate: 8, category: "Leisure" },
    { id: 65, name: "Alton Towers", emoji: "🎡", offerRate: 7, category: "Leisure" },
    { id: 66, name: "Legoland", emoji: "🧱", offerRate: 6, category: "Leisure" },
    { id: 67, name: "Merlin Entertainments", emoji: "🎪", offerRate: 7, category: "Leisure" },
    { id: 68, name: "Tenpin Bowling", emoji: "🎳", offerRate: 5, category: "Leisure" },
    { id: 69, name: "Hollywood Bowl", emoji: "🎳", offerRate: 4, category: "Leisure" },
    { id: 70, name: "Climbing Hangar", emoji: "🧗", offerRate: 6, category: "Leisure" },

    // Beauty & Health
    { id: 71, name: "Boots", emoji: "💊", offerRate: 4, category: "Health & Beauty" },
    { id: 72, name: "Superdrug", emoji: "💄", offerRate: 3, category: "Health & Beauty" },
    { id: 73, name: "The Body Shop", emoji: "🧴", offerRate: 5, category: "Health & Beauty" },
    { id: 74, name: "Lush", emoji: "🛁", offerRate: 6, category: "Health & Beauty" },
    { id: 75, name: "Sephora", emoji: "💅", offerRate: 7, category: "Health & Beauty" },
    { id: 76, name: "Lookfantastic", emoji: "✨", offerRate: 6, category: "Health & Beauty" },

    // Pubs & Bars
    { id: 77, name: "Wetherspoons", emoji: "🍺", offerRate: 2, category: "Restaurant" },
    { id: 78, name: "Slug & Lettuce", emoji: "🍻", offerRate: 4, category: "Restaurant" },
    { id: 79, name: "All Bar One", emoji: "🍷", offerRate: 5, category: "Restaurant" },
    { id: 80, name: "Brewdog", emoji: "🍺", offerRate: 6, category: "Restaurant" },

    // Bookstores & Entertainment
    { id: 81, name: "Waterstones", emoji: "📚", offerRate: 4, category: "Entertainment" },
    { id: 82, name: "WHSmith", emoji: "📰", offerRate: 2, category: "Entertainment" },
    { id: 83, name: "HMV", emoji: "🎵", offerRate: 5, category: "Entertainment" },

    // Pet Supplies
    { id: 84, name: "Pets at Home", emoji: "🐾", offerRate: 4, category: "Pets" },
    { id: 85, name: "Fetch", emoji: "🐕", offerRate: 3, category: "Pets" },

    // Hotels & Travel
    { id: 86, name: "Premier Inn", emoji: "🏨", offerRate: 5, category: "Travel" },
    { id: 87, name: "Travelodge", emoji: "🛏️", offerRate: 4, category: "Travel" },
    { id: 88, name: "Holiday Inn", emoji: "🏩", offerRate: 6, category: "Travel" },

    // Transport
    { id: 89, name: "Uber", emoji: "🚗", offerRate: 2, category: "Transport" },
    { id: 90, name: "Trainline", emoji: "🚄", offerRate: 3, category: "Transport" },
    { id: 91, name: "National Express", emoji: "🚌", offerRate: 4, category: "Transport" },

    // Garden Centres
    { id: 92, name: "Wyevale", emoji: "🌱", offerRate: 4, category: "Home & DIY" },
    { id: 93, name: "Dobbies", emoji: "🌻", offerRate: 5, category: "Home & DIY" },

    // Specialty Stores
    { id: 94, name: "Build-A-Bear", emoji: "🧸", offerRate: 6, category: "Leisure" },
    { id: 95, name: "Game", emoji: "🎮", offerRate: 4, category: "Entertainment" },
    { id: 96, name: "Smyths Toys", emoji: "🎁", offerRate: 3, category: "Entertainment" },
    { id: 97, name: "Toys R Us", emoji: "🧸", offerRate: 5, category: "Entertainment" },
    { id: 98, name: "Ryman", emoji: "✏️", offerRate: 3, category: "Stationery" },
    { id: 99, name: "Card Factory", emoji: "💌", offerRate: 2, category: "Entertainment" },
    { id: 100, name: "Paperchase", emoji: "🎨", offerRate: 4, category: "Stationery" }
];

// Category summary for reference
const categories = {
    "Grocery": "Supermarkets and food retailers",
    "Restaurant": "Fast food, cafes, and dining",
    "Fashion": "Clothing and accessories",
    "Sports": "Sports equipment and apparel",
    "Electronics": "Technology and gadgets",
    "Home & DIY": "Home improvement and furniture",
    "Leisure": "Entertainment and activities",
    "Health & Beauty": "Personal care and cosmetics",
    "Entertainment": "Books, music, games, and toys",
    "Pets": "Pet supplies and services",
    "Travel": "Hotels and accommodation",
    "Transport": "Travel and commuting",
    "Stationery": "Office and craft supplies"
};

// Helper function to get retailers by category
function getRetailersByCategory(category) {
    return retailers.filter(retailer => retailer.category === category);
}

// Helper function to get retailers by offer rate
function getRetailersByOfferRate(minRate, maxRate) {
    return retailers.filter(retailer =>
        retailer.offerRate >= minRate && retailer.offerRate <= maxRate
    );
}

// Helper function to search retailers
function searchRetailers(query) {
    const searchTerm = query.toLowerCase();
    return retailers.filter(retailer =>
        retailer.name.toLowerCase().includes(searchTerm) ||
        retailer.category.toLowerCase().includes(searchTerm)
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { retailers, categories, getRetailersByCategory, getRetailersByOfferRate, searchRetailers };
}
