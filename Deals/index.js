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

const khmerNewYear = [
    {
        image:'https://khmersupply.com/cdn/shop/files/unisex-organic-cotton-t-shirt-anthracite-back-67bc70a9b92c8.jpg?v=1740402974&width=1946',
        name:'Unisex Organic Cotton T-Shirt - Anthracite',
        price:25.00,
        discount:0.5
    },
    {
        image:'https://i.etsystatic.com/17125077/r/il/15aad9/6531889805/il_fullxfull.6531889805_cusq.jpg',
        name:'Vintage Oversized Graphic Tee',
        price:30.00,
        discount:0.5
    },
    {
        image:'https://ih1.redbubble.net/image.5722483252.1539/ssrco,oversize_tee,mens,ffffff:affd82b53f,front,product_square,x600.jpg',
        name:'White Oversized Graphic Cotton Tee',
        price:28.00,
        discount:0.5
    },
    {
        image:'https://images-na.ssl-images-amazon.com/images/I/71c7i6YyLOL._AC_UL600_SR600,600_.jpg',
        name:'Essential Crewneck T-Shirt',
        price:18.00,
        discount:0.5
    },
    {
        image:'https://www.fixdermacambodia.com/cdn/shop/files/ShadowSPF50_Cream40g.webp?v=1695201640',
        name:'Fixderma Shadow SPF 50+ Sunscreen Cream 40g',
        price:12.50,
        discount:0.5
    },
    {
        image:'https://joypersonalcare.com/cdn/shop/files/Dry_Touch_SPF50_50ml_1500X1500_08f92e3f-5ea6-41e2-9dc8-09f96646fe52.jpg?v=1747218444',
        name:'Joy Hello Sun Sunscreen SPF 50 Dry Touch',
        price:10.00,
        discount:0.5
    },
    {
        image:'https://www.dotandkey.com/cdn/shop/files/1a_055631d9-8489-46d1-bddf-bd21e2b6e9aa.jpg?v=1771219495&width=700',
        name:'Dot & Key Vitamin C + E Super Bright Sunscreen',
        price:15.00,
        discount:0.5
    },
    {
        image:'https://nikitabeauty.com/cdn/shop/files/ig-square-1080-x-1080-dsc_5383-jpg_custom_resized.jpg?v=1713769923',
        name:'Nikita Beauty Hydrating Face Cream',
        price:35.00,
        discount:0.5
    },
    {
        image:'https://m.media-amazon.com/images/I/710KZym-AcL._AC_UY350_.jpg',
        name:'Women\'s Casual Walking Sneakers',
        price:45.00,
        discount:0.5
    },
    {
        image:'https://i5.walmartimages.com/seo/CAICJ98-Womens-Shoes-Slip-on-Walking-Shoes-for-Women-Arch-Support-Mesh-Comfy-Work-Shoes-Pink_93b848df-2c57-4c50-a3cb-13c685124a34.292574476c313981fd2b32c2ea41cdfe.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        name:'Women\'s Mesh Arch Support Slip-on Shoes - Pink',
        price:40.00,
        discount:0.5
    },
    {
        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0243250e-df03-4cb3-b4cc-23e86df501ad/custom-nike-dunk-high-by-you-shoes.png',
        name:'Nike Dunk High By You Custom Shoes',
        price:130.00,
        discount:0.5
    },
    {   
        image:'https://images.squarespace-cdn.com/content/v1/5ed6e10fb011a123217ba702/1727139534806-K219WNSVFLFTG6QOO2I3/Cosmo+Sourcing+%7C+Where+does+nike+make+shoes%3F.jpg',
        name:'Nike Air Jordan 1 Retro High',
        price:180.00,
        discount:0.5
    }
];

const specialPrice = [
    {
        image:'https://skinfunctional.com/cdn/shop/files/mineral-sunscreen_lifestyle2.jpg?v=1755778501&width=1200',
        name: 'SKINFUNCTIONAL Mineral Matte Sunscreen SPF 30',
        price: 22.00,
        discount: 0.3
    },
    {
        image:'https://altruistsun.com/cdn/shop/files/ALTRUIST_Sunscreen-SPF50-100ml_DUO_Front_1920x1920_b7bbde7a-abf1-4e45-835c-c9e96d678350.png?v=1738160658',
        name: 'Altruist Dermatologist Sunscreen SPF 50 (100ml)',
        price: 14.00,
        discount: 0.3
    },
    {
        image:'https://images.ctfassets.net/mgaihfszrtka/6NsXaZAjtOrGz3T8EMn6v6/4b5129a08059ec5911c36fd4294141bf/suns_rectangle_63_1_3x_copy.webp?fm=webp&w=3840',
        name: 'Supergoop! Play Everyday Lotion SPF 50',
        price: 34.00,
        discount: 0.3
    },
    {
        image:'https://tasweer.com.pk/cdn/shop/files/mustard_Hurricane_T-Shirt_Unisex.jpg?v=1729601769&width=533',
        name: 'Hurricane Unisex Mustard Cotton Tee',
        price: 20.00,
        discount: 0.3
    },
    {
        image:'https://img2.cloudfable.com/styles/735x735/8.front/Black/womens-49-years-old-vintage-1972-august-girl-49th-birthday-t-shirt-20220406081316-304gtyo0.jpg',
        name: 'Vintage 1972 August Birthday Graphic Tee',
        price: 24.00,
        discount: 0.3
    },
    {
        image:'https://i.etsystatic.com/19519143/r/il/1ecb5f/3849329630/il_fullxfull.3849329630_d50r.jpg',
        name: 'Retro Sun and Moon Graphic Oversized Shirt',
        price: 26.00,
        discount: 0.3
    },
    {
        image:'https://rootedcomforts.com/cdn/shop/files/tothebeachblue.png?v=1739387211',
        name: '"To The Beach" Blue Comfort Tee',
        price: 28.00,
        discount: 0.3
    },
    {
        image:'https://wittee.in/wp-content/uploads/2023/08/front-64dcbbe5b6010-Baby_Blue_S_Oversized_T-shirt.jpg',
        name: 'Baby Blue Oversized Essential Tee',
        price: 22.00,
        discount: 0.3
    },
    {
        image:'https://redtape.com/cdn/shop/files/RSL0794A_1.jpg?v=1758879354',
        name: 'RedTape Men\'s Lifestyle Walking Shoes',
        price: 55.00,
        discount: 0.3
    },
    {
        image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1757582394-asics-megablast-1000px-68c29385392ff.jpg?crop=1xw:1xh;center,top&resize=980:*',
        name: 'ASICS Novablast 4 Performance Running Shoes',
        price: 140.00,
        discount: 0.3
    },
    {
        image:'https://rukminim2.flixcart.com/image/480/580/xif0q/shoe/5/c/f/-original-imahd2zchp9gunsn.jpeg?q=90',
        name: 'Campus Men\'s North Plus Running Shoes',
        price: 45.00,
        discount: 0.3
    },
    {
        image:'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/25/KFsuizso_be57df11ee5b4693aa902e5d8215cd69.jpg',
        name: 'Puma Men\'s Softride Rift Sneakers',
        price: 65.00,
        discount: 0.3
    }
];

const fiftyPercentOff = [
    {
        image:'https://m.media-amazon.com/images/I/61swuW3iCvL._AC_UF1000,1000_QL80_.jpg',
        name: 'Electric High-Pressure Water Blaster',
        price: 80.00,
        discount: 0.5
    },
    {
        image:'https://www.cnet.com/a/img/resize/95e16930b4105d5d7eb8c58ca6f6236304bbff5d/hub/2024/05/15/a253d759-a031-46e6-98dd-0c0a48392d52/spyra-two-water-gun.jpg?auto=webp&fit=crop&height=1200&width=1200',
        name: 'SpyraTwo World\'s Strongest Water Gun',
        price: 170.00,
        discount: 0.5
    },
    {
        image:'https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=',
        name: 'Classic Blue Formal Dress Shirt',
        price: 45.00,
        discount: 0.5
    },
    {
        image:'https://m.media-amazon.com/images/I/81dYEkq+25L._AC_UY1100_.jpg',
        name: 'Superdry Vintage Logo Heritage Tee',
        price: 35.00,
        discount: 0.5
    },
    {
        image:'https://m.media-amazon.com/images/I/71w2FiZNZrL._AC_SL1500_.jpg',
        name: 'Marvel Avengers Team Graphic T-Shirt',
        price: 22.00,
        discount: 0.5
    },
    {
        image:'https://www.boerboelwear.co.za/wp-content/uploads/2019/10/Mens-Kalahari-Shirt-Stone-FT-1.webp',
        name: 'Kalahari Men\'s Tactical Safari Shirt',
        price: 60.00,
        discount: 0.5
    },
    {
        image:'https://www.ryka.com/blob/product-images/20022/86/21/4/86214_float_large.jpg',
        name: 'Ryka Women\'s Devotion Plus 2 Walking Shoes',
        price: 100.00,
        discount: 0.5
    },
    {
        image:'https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/18794784/2022/8/4/00591154-3074-41bb-8b6b-40d9485a95391659630896913CampusWomenBlackMeshRunningShoes1.jpg',
        name: 'Campus Women\'s Black Mesh Running Shoes',
        price: 40.00,
        discount: 0.5
    },
    {
        image:'https://assets.myntassets.com/assets/images/2025/NOVEMBER/6/zg1hzJRZ_7b4937006c4047378859174b54bf19df.jpg',
        name: 'Puma Softride Sophia Women\'s Sneakers',
        price: 75.00,
        discount: 0.5
    }
];

renderProducts(khmerNewYear, '.khmer-container');
renderProducts(fiftyPercentOff, '.fifty-container');
renderProducts(specialPrice, '.special-container');

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart');

    if (btn) {
        alert('Successfully! added to cart.');
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