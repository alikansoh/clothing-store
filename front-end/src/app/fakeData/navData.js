// Import images at the top of the file

const navigationData = [
    {
      name: "Home Appliances",
      subCategories: [
        {
          name: "Small Kitchen Appliances",
          subCategories: [
            { name: "Coffee Makers", image: "menImage" },
            { name: "Blenders", image: "menImage" },
            { name: "Microwaves", image: "menImage" },
            { name: "Toasters", image: "menImage" },
            { name: "Juicers", image: "menImage" },
          ],
        },
        {
          name: "Large Kitchen Appliances",
          subCategories: [
            { name: "Refrigerators", image: "menImage" },
            { name: "Dishwashers", image: "menImage" },
            { name: "Ovens", image: "menImage" },
            { name: "Cooktops", image: "menImage" },
          ],
        },
        {
          name: "Vacuum Cleaners",
          subCategories: [
            { name: "Cordless", image: "menImage" },
            { name: "Robot Vacuums", image: "menImage" },
            { name: "Upright Vacuums", image: "menImage" },
            { name: "Handheld Vacuums", image: "menImage" },
          ],
        },
        {
          name: "Air Conditioners & Fans",
          subCategories: [
            { name: "Portable ACs", image: "menImage" },
            { name: "Window ACs", image: "menImage" },
            { name: "Fans", image: "menImage" },
            { name: "Dehumidifiers", image: "menImage" },
          ],
        },
        {
          name: "Air Purifiers",
          subCategories: [
            { name: "HEPA Air Purifiers", image: "menImage" },
            { name: "UV Air Purifiers", image: "menImage" },
            { name: "Ionizers", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "Home Tech",
      subCategories: [
        {
          name: "Smart Home Devices",
          subCategories: [
            { name: "Smart Thermostats", image: "menImage" },
            { name: "Smart Plugs", image: "menImage" },
            { name: "Smart Lights", image: "menImage" },
            { name: "Smart Locks", image: "menImage" },
          ],
        },
        {
          name: "Security Cameras",
          subCategories: [
            { name: "Indoor Cameras", image: "menImage" },
            { name: "Outdoor Cameras", image: "menImage" },
            { name: "Doorbell Cameras", image: "menImage" },
          ],
        },
        {
          name: "Smart Speakers",
          subCategories: [
            { name: "Amazon Echo", image: "menImage" },
            { name: "Google Nest", image: "menImage" },
            { name: "Apple HomePod", image: "menImage" },
          ],
        },
        {
          name: "Smart Appliances",
          subCategories: [
            { name: "Smart Refrigerators", image: "menImage" },
            { name: "Smart Washers & Dryers", image: "menImage" },
            { name: "Smart Ovens", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "Computers & Laptops",
      subCategories: [
        {
          name: "Laptops",
          subCategories: [
            { name: "Gaming Laptops", image: "menImage" },
            { name: "MacBooks", image: "menImage" },
            { name: "Business Laptops", image: "menImage" },
            { name: "Chromebooks", image: "menImage" },
          ],
        },
        {
          name: "Desktops",
          subCategories: [
            { name: "Gaming Desktops", image: "menImage" },
            { name: "All-in-One Desktops", image: "menImage" },
            { name: "Tower Desktops", image: "menImage" },
          ],
        },
        {
          name: "Computer Accessories",
          subCategories: [
            { name: "Keyboards", image: "menImage" },
            { name: "Mice", image: "menImage" },
            { name: "Monitors", image: "menImage" },
            { name: "Docking Stations", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "TV & Audio",
      subCategories: [
        {
          name: "Smart TVs",
          subCategories: [
            { name: "OLED TVs", image: "menImage" },
            { name: "QLED TVs", image: "menImage" },
            { name: "LED TVs", image: "menImage" },
            { name: "4K TVs", image: "menImage" },
          ],
        },
        {
          name: "Audio Systems",
          subCategories: [
            { name: "Soundbars", image: "menImage" },
            { name: "Speakers", image: "menImage" },
            { name: "Receivers", image: "menImage" },
            { name: "Subwoofers", image: "menImage" },
          ],
        },
        {
          name: "Headphones",
          subCategories: [
            { name: "Noise Cancelling", image: "menImage" },
            { name: "Wireless", image: "menImage" },
            { name: "Sports Headphones", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "Mobile & Gadgets",
      subCategories: [
        {
          name: "Smartphones",
          subCategories: [
            { name: "iPhones", image: "menImage" },
            { name: "Android Phones", image: "menImage" },
            { name: "Gaming Phones", image: "menImage" },
          ],
        },
        {
          name: "Smartwatches",
          subCategories: [
            { name: "Apple Watch", image: "menImage" },
            { name: "Fitbit", image: "menImage" },
            { name: "Samsung Galaxy Watch", image: "menImage" },
          ],
        },
        {
          name: "Tablets",
          subCategories: [
            { name: "iPads", image: "menImage" },
            { name: "Android Tablets", image: "menImage" },
            { name: "Windows Tablets", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "Outdoor & Sports Tech",
      subCategories: [
        {
          name: "Smart Fitness Devices",
          subCategories: [
            { name: "Fitness Trackers", image: "menImage" },
            { name: "Smart Scales", image: "menImage" },
            { name: "Smart Jump Ropes", image: "menImage" },
          ],
        },
        {
          name: "Outdoor Gadgets",
          subCategories: [
            { name: "Smart Glasses", image: "menImage" },
            { name: "Portable Solar Panels", image: "menImage" },
            { name: "Power Banks", image: "menImage" },
          ],
        },
      ],
    },
    {
      name: "Deals",
      subCategories: [
        {
          name: "Discounted Smart Home Devices",
          subCategories: [
            { name: "Smart Plugs", image: "menImage" },
            { name: "Smart Lights", image: "menImage" },
            { name: "Smart Thermostats", image: "menImage" },
          ],
        },
        {
          name: "Weekend Deals",
          subCategories: [
            { name: "Smart TVs", image: "menImage" },
            { name: "Headphones", image: "menImage" },
            { name: "Air Conditioners", image: "menImage" },
          ],
        },
        {
          name: "Clearance Sale",
          subCategories: [
            { name: "Laptops", image: "menImage" },
            { name: "Smartphones", image: "menImage" },
            { name: "Washing Machines", image: "menImage" },
          ],
        },
        {
          name: "Seasonal Promotions",
          subCategories: [
            { name: "Holiday Discounts on Appliances", image: "menImage" },
            { name: "Black Friday Offers", image: "menImage" },
            { name: "End of Year Sales", image: "menImage" },
          ],
        },
      ],
    },
  ];
  
  export default navigationData;