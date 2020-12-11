const ProductList = [
    {
      id: 1,
      text: "Cliff Tree", 
      price: 15.00, 
      category: "Acrylic",
      image: "https://www.dhresource.com/0x0/f2/albu/g5/M00/DD/CD/rBVaI1jQzzWALmWDAAMJwBaiTqs418.jpg/cliff-tree-white-clouds-diy-diamond-painting.jpg"
    },
    {
      id: 2,
      text: "Water Ville", 
      price: 18.00, 
      category: "Watercolor",
      image: "https://www.watervillecreates.org/wp-content/uploads/2018/12/IMG_6989.jpg"
    },
    {
      id: 3,
      text: "Gouache Landscape", 
      price: 17.00, 
      category: "Gouache",
      image: "https://i.pinimg.com/originals/9d/05/99/9d059987400e6112a77a6f8ece1ab127.png"
    },
    {
      id: 4,
      text: "Koi Fish", 
      price: 20.00, 
      category: "Oil",
      image: "https://www.artmajeur.com/medias/standard/p/r/prettyarts/artwork/12557915_or000617.jpg"
    },
    {
      id: 5,
      text: "Historic Home", 
      price: 26.00,
      category: "Gouache",
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/historic-home-watercolor-and-gouache-painting-kim-guthrie.jpg"
    },
    {
      id: 6,
      text: "Trolley On The Square", 
      price: 25.00, 
      category: "Oil",
      image: "https://www.artmajeur.com/medias/standard/l/e/leonidafremov/artwork/8638750_evening-trolley-on-the-square-leonid-afremov.jpg"
    },
    {
      id: 7,
      text: "Wavy Art", 
      price: 23.00, 
      category: "Encaustic",
      image: "https://rs.wescover.com/c_limit,f_auto,q_auto,w_500/v1/wescover-user-uploaded/yyjh4z4mzxme9mxxhfcv"
    },
    {
      id: 8,
      text: "Couple of Lovers", 
      price: 20.00, 
      category: "Oil",
      image: "https://previews.123rf.com/images/max5799/max57991802/max5799180200014/95159584-oil-painting-on-canvas-couple-of-lovers-under-an-umbrella-paris-eiffel-tower-modern-art.jpg"
    },
    {
      id: 9,
      text: "Canvas Acrylic", 
      price: 15.00, 
      category: "Acrylic",
      image: "https://cdn.shopclues.com/images/thumbnails/55322/640/1/manu121486460362.jpg"
    },
    {
      id: 10,
      text: "Wall Street", 
      price: 21.00, 
      category: "Watercolor",
      image: "https://i.pinimg.com/originals/6f/94/b3/6f94b3ba8401dd2a057b0a346f67909a.jpg"
    },
    {
      id: 11,
      text: "Moon Light", 
      price: 11.00, 
      category: "Pastel",
      image: "https://i.pinimg.com/564x/83/d9/4a/83d94a5ff2ab1c7c043b0d2ae5c610cb.jpg"
    },
    {
      id: 12,
      text: "Holbein Gouache", 
      price: 13.00, 
      category: "Gouache",
      image: "https://www.jacksonsart.com/blog/wp-content/uploads/2018/01/Holbein-Gouache-Review3.jpg"
    },
    {
      id: 13,
      text: "Melted Tree", 
      price: 12.00, 
      category: "Encaustic",
      image: "https://i.pinimg.com/originals/00/bf/86/00bf86896b883301fe100e9aada001e1.jpg"
    },
    {
      id: 14,
      text: "Bethany Fields", 
      price: 24.00, 
      category: "Pastel",
      image: "https://i.pinimg.com/originals/d1/2f/d9/d12fd9de7f5357fc7496b2183626a6dd.jpg"
    },
    {
      id: 15,
      text: "Nature Village", 
      price: 20.00, 
      category: "Watercolor",
      image: "https://webneel.com/daily/sites/default/files/images/daily/12-2013/2-watercolor-painting-by-vilas%20kulkarni.jpg"
    },
    {
      id: 16,
      text: "Pastel River", 
      price: 17.00, 
      category: "Pastel",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsX_5IisCehL38b7eWKKoshK4UpCp321ySQ&usqp=CAU"
    },
    {
      id: 17,
      text: "Tower Bridge", 
      price: 20.00, 
      category: "Encaustic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvENb_UOcNY4TD_FV4nP7TiLxbm46G9rQnlg&usqp=CAU"
    },
    {
      id: 18,
      text: "Cherry Blossom", 
      price: 22.00, 
      category: "Oil",
      image: "https://i.pinimg.com/originals/c0/b5/35/c0b53570b1b78a1bdc29527fe430ffa0.jpg"
    },
    {
      id: 19,
      text: "Evening Walk", 
      price: 25.00, 
      category: "Acrylic",
      image: "https://imgmedia.lbb.in/media/2020/02/5e4fe5ce51e6da620b6477be_1582294478936.jpg"
    },
    {
      id: 20,
      text: "Acrylic Moon", 
      price: 14.00, 
      category: "Acrylic",
      image: "https://i.pinimg.com/736x/1f/e1/ab/1fe1ab3f8d84a03166c28961c75399b8.jpg"
    },
    {
      id: 21,
      text: "Paper Cut-Out", 
      price: 18.00, 
      category: "Gouache",
      image: "https://i.etsystatic.com/14986314/r/il/597d14/1815436207/il_570xN.1815436207_fswa.jpg"
    },
    {
      id: 22,
      text: "Smoke Wax", 
      price: 15.00, 
      category: "Encaustic",
      image: "https://i.pinimg.com/originals/62/63/a5/6263a5e18f5d648b60ac9ebbbacf864f.jpg"
    },
    {
      id: 23,
      text: "Automne Fall", 
      price: 21.00, 
      category: "Watercolor",
      image: "https://images-na.ssl-images-amazon.com/images/I/61pIy0tu%2BoL._QL70_ML2_.jpg"
    },
    {
      id: 24,
      text: "Venice Ride", 
      price: 19.00, 
      category: "Pastel",
      image: "https://images.fasosites.com/8076_252743w620.jpg?cv=201805121200error"
    }
  ];

export default ProductList;