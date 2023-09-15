const express = require('express');
const cors = require('cors')
const app = express();
const corsOptions = {
    origin: 'http://localhost:1234', // Replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  };
  
  app.use(cors(corsOptions));

  const listOfRestaurant = [
    {
      _id: 1,
      name: "Starbucks Coffee",
      avgRating: 4.3,
      cuisines: ["Beverages", "Cafe", "Snacks", "Desserts"],
      deliveryTime: "Delivered in 36 minutes",
  
      CloudinaryID: "yunobf9mdp1zjjdvx1ik",
    },
    {
      _id: 2,
      name: "EatFit",
      avgRating: 4.2,
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      deliveryTime: "Delivered in 28 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 3,
      name: "Baskin Robbins - Ice Cream Desserts",
      avgRating: 4.6,
      cuisines: ["Desserts", "Ice Cream"],
      deliveryTime: "Delivered in 45 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 4,
      name: "Blue Nile",
      avgRating: 4.1,
      cuisines: ["Indian", "Chinese"],
      deliveryTime: "Delivered in 50 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 5,
      name: "Yenna Dosa",
      avgRating: 4.5,
      cuisines: ["South Indian"],
      deliveryTime: "Delivered in 32 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 6,
      name: "Wadeshwar(Law college road)",
      avgRating: 4.5,
      cuisines: [
        "South Indian",
        "Snacks",
        "Street Food",
        "Beverages",
        "Desserts",
      ],
      deliveryTime: "Delivered in 55 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 7,
      name: "Subway",
      avgRating: 4.2,
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      deliveryTime: "Delivered in 40 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },
    {
      _id: 8,
      name: "Irani Cafe",
      avgRating: 4.4,
      cuisines: [
        "Bakery",
        "Snacks",
        "Fast Food",
        "Desserts",
        "Beverages",
        "Indian",
        "Street Food",
      ],
      deliveryTime: "Delivered in 48 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 9,
      name: "Paratha Box - Desi Punjabi Meals",
      avgRating: 3.7,
      cuisines: ["North Indian", "Punjabi", "Indian", "Home Food", "Beverages"],
      deliveryTime: "Delivered in 42 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 10,
      name: "Havmor Havfunn Ice cream",
      avgRating: 4.0,
      cuisines: ["Ice Cream", "Ice Cream Cakes", "Desserts", "Beverages"],
      deliveryTime: "Delivered in 38 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 11,
      name: "Cafe Zam Zam",
      avgRating: 4.2,
      cuisines: ["Mughlai", "North Indian", "Chinese", "Fast Food", "Biryani"],
      deliveryTime: "Delivered in 50 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },{
      _id: 12,
      name: "Sushi House",
      avgRating: 4.8,
      cuisines: ["Japanese", "Sushi", "Seafood"],
      deliveryTime: "Delivered in 55 minutes",
      CloudinaryID: "4df3497f1460dfd1ecd8125222f6d362",
    },
    {
      _id: 13,
      name: "Taco Town",
      avgRating: 4.3,
      cuisines: ["Mexican", "Tacos", "Burritos"],
      deliveryTime: "Delivered in 30 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 14,
      name: "Pizza Paradise",
      avgRating: 3.9,
      cuisines: ["Italian", "Pizza", "Pasta"],
      deliveryTime: "Delivered in 40 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 15,
      name: "Burger Haven",
      avgRating: 4.5,
      cuisines: ["American", "Burgers", "Fries"],
      deliveryTime: "Delivered in 25 minutes",
      CloudinaryID: "0da26b9dde86dc03dad7b4a1a747d2bd",
    },
    {
      _id: 16,
      name: "Veggie Delight",
      avgRating: 3.6,
      cuisines: ["Vegetarian", "Healthy Food", "Salads"],
      deliveryTime: "Delivered in 35 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },
    {
      _id: 17,
      name: "Cafe Coffee Day",
      avgRating: 3.6,
      cuisines: ["Capaccino", "Black Tea", "Lemon Tea"],
      deliveryTime: "Delivered in 35 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },
    {
      _id: 18,
      name: "Coffee for Crush",
      avgRating: 3.6,
      cuisines: ["Vegetarian", "Healthy Food", "Salads"],
      deliveryTime: "Delivered in 35 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },
    {
      _id: 19,
      name: "Burger Ban",
      avgRating: 3.6,
      cuisines: ["Vegetarian", "Healthy Food", "Salads"],
      deliveryTime: "Delivered in 35 minutes",
      CloudinaryID: "78ece6968844e2eba6c04eb462ce0eba",
    },
    {
      _id: 20,
      name: "Burger King",
      avgRating: 3.6,
      cuisines: ["Vegetarian", "Healthy Food", "Salads"],
      deliveryTime: "Delivered in 35 minutes",
      CloudinaryID: "c583ca6ce40b426797a78ae2ac91f2ec",
    },
    
    
  ]


  const listOfRestaurant2 = {
    "statusCode": 0,
    "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
    "nextOffset": "CMw/EOskKICAn5PGxcHIKzCgEjgC",
    "widgetOffset": {
    "restaurantCountWidget": "",
    "collectionV5RestaurantListWidget_SimRestoRelevance_food": "11",
    "inlineFacetFilter": "",
    "collectionV5MastheadWidget": ""
    }
    },
    "cards": [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
    "collectionId": "80374",
    "title": "Poha",
    "description": "Dive into a plate of delicious, rich and flavourful Poha.",
    "imageId": "v1674029952/PC_Creative%20refresh/3D_bau/collections_new/Poha.png",
    "aspectRatio": "3.44",
    "cta": {
    "link": "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha,poha,layout_BAU_Contextual",
    "type": "collectionv2"
    },
    "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
    "count": "131 restaurants"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance (Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "Delivery Time"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost: Low to High"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost: High to Low"
    }
    ],
    "restaurantCount": 131,
    "facetList": [
    {
    "label": "Veg/Non-veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Pure veg",
    "id": "isVegfacetquery2",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Non Veg",
    "id": "isVegfacetquery3",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filter by"
    },
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "Less than 30 mins",
    "id": "deliveryTimefacetquery2",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Less than 45 mins",
    "id": "deliveryTimefacetquery3",
    "analytics": {}
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filter by"
    },
    {
    "label": "Cost for two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Rs. 300-Rs. 600",
    "id": "costForTwofacetquery3",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery4",
    "analytics": {}
    },
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery5",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filter by"
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "rows": 1,
    "widgetPadding": {
    "left": 16,
    "top": 20,
    "right": 16,
    "bottom": 16
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "restaurantCountWidget",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
    "text": "131 restaurants to explore",
    "headerStyling": {
    "textSize": 15,
    "textColor": "text_color_highest_emphasis",
    "textFontName": "FONT_NAME_HEADER_H5",
    "maxLines": 1
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "748700",
    "name": "Ayodhya veg",
    "cloudinaryImageId": "acfa5e1aeaded184b28b6d7fcc59856c",
    "locality": "Vakil Nagar",
    "areaName": "Kothrud",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Indian",
    "Tandoor",
    "South Indian",
    "Chinese",
    "Beverages",
    "Fast Food",
    "Street Food",
    "Snacks"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "748700",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 5800
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 5800
    },
    "parentId": "443678",
    "avgRatingString": "4.0",
    "totalRatingsString": "5",
    "promoted": true,
    "adTrackingId": "cid=8352426~p=1~eid=0000018a-9248-acdc-40e8-c1df00ee016b~srvts=1694671351004~80374",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 15:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=748700&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "507940",
    "name": "EatFit",
    "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
    "locality": "Ghole Road",
    "areaName": "Shivajinagar",
    "costForTwo": "₹270 for two",
    "cuisines": [
    "Chinese",
    "Healthy Food",
    "Tandoor",
    "Pizzas",
    "North Indian",
    "Thalis",
    "Biryani"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "507940",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3300
    },
    "parentId": "76139",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "promoted": true,
    "adTrackingId": "cid=8209207~p=2~eid=0000018a-9248-acdc-40e8-c1e000ee0248~srvts=1694671351004~80374",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "23 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 23:30:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "description": "",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=507940&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "594722",
    "name": "Chaayos Chai+Snacks=Relax",
    "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
    "locality": "MG Road",
    "areaName": "Camp Area",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Beverages",
    "Chaat",
    "Desserts",
    "Home Food",
    "Italian",
    "Maharashtrian",
    "Snacks",
    "Street Food",
    "Sweets"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "594722",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3300
    },
    "parentId": "281782",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "promoted": true,
    "adTrackingId": "cid=8038847~p=4~eid=0000018a-9248-acdc-40e8-c1e200ee0419~srvts=1694671351004~80374",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-15 00:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "description": "",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=594722&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "518514",
    "name": "Great Indian Khichdi by EatFit",
    "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
    "locality": "Paud Road",
    "areaName": "Kothrud",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Indian",
    "Home Food",
    "Healthy Food",
    "Snacks"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "518514",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 6600
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 6600
    },
    "parentId": "319582",
    "avgRatingString": "4.2",
    "totalRatingsString": "500+",
    "promoted": true,
    "adTrackingId": "cid=8189790~p=5~eid=0000018a-9248-acdc-40e8-c1e300ee055a~srvts=1694671351004~80374",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 6.5,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "6.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 23:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "description": "",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=518514&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "43820",
    "name": "Puneri Katta",
    "cloudinaryImageId": "8b3d03d1e8a08529ea6d777ca98f1c7d",
    "locality": "Vikas Nagar",
    "areaName": "Wanowrie",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Snacks",
    "Fast Food",
    "Maharashtrian"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "43820",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 8900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 8900
    },
    "parentId": "161874",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "promoted": true,
    "adTrackingId": "cid=8163770~p=6~eid=0000018a-9248-acdc-40e8-c1e400ee0609~srvts=1694671351004~80374",
    "sla": {
    "deliveryTime": 42,
    "lastMileTravel": 8.1,
    "serviceability": "SERVICEABLE",
    "slaString": "42 mins",
    "lastMileTravelString": "8.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=43820&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "678891",
    "name": "Upwas Uphargruha",
    "cloudinaryImageId": "e5a946376df93f8244ec80d1d0109fa2",
    "locality": "Jayda Apartments",
    "areaName": "Swargate",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Indian",
    "Street Food",
    "Snacks"
    ],
    "avgRating": 3.6,
    "feeDetails": {
    "restaurantId": "678891",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3300
    },
    "parentId": "239073",
    "avgRatingString": "3.6",
    "totalRatingsString": "50+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 0.4,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "0.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 15:15:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=678891&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "7887",
    "name": "Priya",
    "cloudinaryImageId": "pawz87ibiatpceg5uvpa",
    "locality": "MG Road",
    "areaName": "Camp",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "South Indian",
    "Beverages"
    ],
    "avgRating": 4.4,
    "feeDetails": {
    "restaurantId": "7887",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4300
    },
    "parentId": "161324",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 22:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=7887&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "434066",
    "name": "Roopali Restaurant - FC Road",
    "cloudinaryImageId": "ngmsdg7jvwbbg1rmxze7",
    "locality": "FC Road",
    "areaName": "Shivajinagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "South Indian",
    "North Indian",
    "Beverages"
    ],
    "avgRating": 4.6,
    "feeDetails": {
    "restaurantId": "434066",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3300
    },
    "parentId": "261543",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=434066&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "438162",
    "name": "Gokhales Kitchen",
    "cloudinaryImageId": "nj3sozcmrz4sifvqh3dv",
    "locality": "Major Kg Pawar Road",
    "areaName": "Karve Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Thalis",
    "Street Food",
    "South Indian",
    "Maharashtrian"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "438162",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4300
    },
    "parentId": "264293",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=438162&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "55232",
    "name": "Bhadait Misal",
    "cloudinaryImageId": "rfhkcmrcorbndprakihs",
    "locality": "Prabhat Road",
    "areaName": "Erandwane",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Maharashtrian",
    "Snacks"
    ],
    "avgRating": 4.5,
    "feeDetails": {
    "restaurantId": "55232",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4300
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4300
    },
    "parentId": "43905",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-14 15:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=55232&source=collection&query=Poha",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
    },
    "tid": "294c0d60-8a8f-4640-ae1a-4dc56c4be3bc",
    "sid": "9bmf3856-8d2f-4e73-8e4c-897cdf101732",
    "deviceId": "5c6a54a2-0058-428d-75df-10211f2d8bb4",
    "csrfToken": "9vlhDkfCiEdX-ZkH9FPCP47X-FpcQ6S5_end3lBA"
    }
 const LOGO_URL = "https://cdn2.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.jpg";
 const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

 app.get('/hotels', (req, res) => {
    res.json(listOfRestaurant);
  });

  // app.get('/v1',async (req,res)=>{
  //   const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=80374&tags=layout_CCS_Poha&sortBy=&filters=&type=rcv2&offset=0&page_type=null')
  //   const data = await response.json()
  //   console.log(data);

  // })
  

  
  const PORT =  3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });