const categoryLinks = document.querySelectorAll('.product-bar a');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        categoryLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

const clothes = [
    { 
        image: 'https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-WOMENS-WHITE-T-SHIRTS-SUB-2048px-5826.jpg', 
        name: 'Everlane The Organic Cotton Box-Cut Tee', 
        price: 30.00, 
        discount: 0.15 
    },
    { 
        image: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/o/02/11fc2f8f-8098-49d7-9844-4b893b7ab16b.jpg', 
        name: 'Rhude Rheflection Logo Graphic Tee', 
        price: 285.00, 
        discount: 0.22 
    },
    { 
        image: 'https://images.unsplash.com/photo-1713881604560-085594ed2c3d?q=80&w=387&auto=format&fit=crop', 
        name: 'Premium Heavyweight Oversized Blank', 
        price: 45.00, 
        discount: 0.08 
    },
    { 
        image: 'https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?q=80&w=327&auto=format&fit=crop', 
        name: 'Essential Ribbed Slim-Fit Tee', 
        price: 38.50, 
        discount: 0.12 
    }
];

const shoes = [
    { image: 'https://images.ctfassets.net/brzb6u29244a/7IKh33xYZiCP8W0HrXCtdM/5f5a04ba1d5a323b1e5c0e0cffb3c288/HeroCategory-Mobile_A000MD0IC001000_001_Default.png?&fm=jpg&q=50', name: 'Gucci Black', price: 99.98, discount: 0.10 },
    { image: 'https://media.gq.com/photos/5a96f5dfeefd755f1b3035a6/16:9/w_2560%2Cc_limit/nike-airmax-93-01.jpg', name: 'Nike Air', price: 85, discount: 0.10 },
    { 
        image: "https://sneakerjunkiesusa.com/cdn/shop/products/238999d403748c6f586f61c2fec6c7900ff9d5dd_1080x.jpg?v=1618871767", 
        name: "Nike Air Jordan 1 Retro High OG", 
        price: 180, 
        discount: 0.10 
    },
    {
        image:'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4048314-6673-424d-b6ee-866ee9300099/W+NIKE+FLEX+TRAIN+WIDE.png',
        name: 'Nike Flex Train Wide',
        price: 120,
        discount: 0.10
    }

];

const electronics = [
    { image: 'https://images.unsplash.com/photo-1764746250417-2cc103a45a56?q=80&w=870&auto=format&fit=crop', name: 'Iphone 17 Pro-max', price: 2000, discount: 0.05 },
    { image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Balck Headphone', price: 49.99, discount: 0.10 },
    { image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Macbook-2016', price: 699.99, discount: 0.15 },
    { image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'White Airpod', price: 59.99, discount: 0.10 }

];

const sports = [
    { image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/6a47cb7a-6cb1-4dfc-9c0d-62d550e1fb2a/nike-debuts-revolutionary-technology-with-the-air-zoom-mercurial.jpg', name: 'Nike Air-Zoom', price: 300, discount: 0.20 },
    { image: 'https://www.3addedminutes.com/jpim-static/image/2022/11/17/11/GettyImages-451701450-1.jpg?width=1200&enable=upscale', name: 'World Cup Ball 2014', price: 29.99, discount: 0.15 },
    { image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/5b1a9ccf-1ec8-4e62-958f-5f301b9e851f/what-are-the-best-nike-basketball-shoes.jpg', name: 'Nike Superfly', price: 299.99, discount: 0.15 },
    { image: 'https://uicflames.com/images/2025/11/27/Ball_Evergreen.jpg?width=1416&height=797&mode=crop&scale=both&format=jpg&quality=80&anchor=middlecenter', name: 'White Airpod', price: 14.99, discount: 0.15 }

];

const kidToys = [
    {
        image: 'https://i.pinimg.com/736x/f2/84/a6/f284a65489161d5877be6e286fbc9cf1.jpg',
        name: 'KFC', 
        price: 9.99,
        discount: 0
    },
    {
        image: 'https://i.pinimg.com/736x/9a/81/41/9a814146c15c6a6213e4ec94eb08f7f2.jpg',
        name: 'Dominoes', 
        price: 4.99,
        discount: 0
    },
    {
        image: 'https://i.pinimg.com/736x/4f/38/0a/4f380a3ae751817908b000232233cc50.jpg',
        name: 'Crocodile Dentist', 
        price: 5,
        discount: 0
    },
    {
        image: 'https://i.pinimg.com/736x/4a/d1/e6/4ad1e648a43ef131f6b4ad1e67b2921a.jpg',
        name: 'Firefighter Backpack Water Toy', 
        price: 10,
        discount: 0
    }
];

function renderProducts(dataArray, containerSelector) {
    const targetContainer = document.querySelector(containerSelector);
    if (!targetContainer) return;

    dataArray.forEach(item => {
        const finalPrice = item.price * (1 - item.discount);
        const html = `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="product-info">
                    <div class="product-price">
                        <h3>${item.name}</h3>
                        <p>${finalPrice.toFixed(2)}$ <del>${item.price}$</del></p>
                    </div>
                    <button class="add-cart">+</button>
                </div>
            </div>
        `;
        targetContainer.innerHTML += html;
    });
}

renderProducts(clothes, '.clothes-container');
renderProducts(shoes, '.shoes-container');
renderProducts(electronics, '.elec-container');
renderProducts(sports, '.sport-container');
renderProducts(kidToys, '.kidToys-container');


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-cart')) {
        alert('Added to cart!');
    }
});

const element = document.getElementById('signin');

element.addEventListener('click', () => {
  window.location.href = '/Account/signup/index.html';
});

const login = document.getElementById('login');

login.addEventListener('click', () => {
  window.location.href = '/Account/Login/index.html';
});