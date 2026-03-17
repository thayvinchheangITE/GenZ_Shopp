const shirt = [
    // Manchester United
    {
        image: 'https://i0.wp.com/www.copycatz.in/wp-content/uploads/2024/01/MANCHESTER-UNITED-HOME-1993-94-RETRO-JERSEY.webp?fit=986%2C999&ssl=1',
        name: 'Manchester United Retro 1993-94',
        price: 130,
        discount: 0.15,
        brand: 'Manchester United'
    },
    {
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCRqH-8xUTSFCujnuf4mijJ5luRNjzejwgjYqFVc7id_R3HrvJW1DWI73gqGy4vq_Fa8CzZyN06sTgbSjgU3RrJ1xE5M9h54sb6kj2-_ufC2ztCoFEvJg1JPExct4P-zc8vZLj91i56DC3oS_eDy6t0FXXctTJKpCru9oJu4tLuXnvdGvKOlB22RcJQ88q/s1600/man-utd-red-sponsor%20%284%29.jpg',
        name: 'Manchester United Limited Design',
        price: 120,
        discount: 0.20,
        brand: 'Manchester United'
    },
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_692e17d1-952e-4bbf-b069-78070ef01319.png?v=1753113960&width=990',
        name: 'Manchester United 2025-26 Away Jersey',
        price: 95,
        discount: 0.15,
        brand: 'Manchester United'
    },

    // Barcelona
    {
        image: 'https://championskit.in/cdn/shop/files/IMAGE-EDIT_b6f11367-49b4-4f8b-9668-72ce5c9d5635.png?v=1747670759&width=533',
        name: 'Bacelona x Travis Scott Away Jersey 2025-26',
        price: 125,
        discount: 0.05,
        brand: 'Barcelona'
    },

    // Real Madrid
    {
        image: 'https://championskit.in/cdn/shop/files/buy-real-madrid-2024-third-set-with-shorts-in-india.jpg?v=1730439040&width=533',
        name: 'Real Madrid 2024 Third Set',
        price: 115,
        discount: 0.40,
        brand: 'Real Madrid'
    },
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_0df7cd67-5e13-4593-9c42-82de25410f50.jpg?v=1751668871&width=533',
        name: 'Real Madrid 2025-26 Home Jersey',
        price: 100,
        discount: 0.00,
        brand: 'Real Madrid'
    },

    // Argentina
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_ee44c20b-93e5-448b-a0a0-71157231c21f.jpg?v=1756156317&width=533',
        name: 'Argentina Classic Jersey Set',
        price: 110,
        discount: 0.10,
        brand: 'Argentina'
    },

    // Liverpool
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_0862f274-6000-4418-84dc-f8b2681a30ce.png?v=1765717005&width=533',
        name: 'Liverpool 2025-26 Shirt Set',
        price: 110,
        discount: 0.25,
        brand: 'Liverpool'
    },

    // Inter Miami
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_b2b6724c-29fc-4141-8401-6f3778261c2a.png?v=1753113960&width=533',
        name: 'Inter Miami 2025-26 Jersey',
        price: 100,
        discount: 0.30,
        brand: 'Inter Miami'
    },

    // Manchester City
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_df1cdaa3-6bdf-472b-92a2-a78c931b985b.png?v=1753114317&width=533',
        name: 'Manchester City 2025-26 Away Jersey',
        price: 95,
        discount: 0.10,
        brand: 'Manchester City'
    },

    // FC Bayern Munich
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_3990b63e-9965-42d7-8ae7-06f48033eeee.png?v=1750018696&width=533',
        name: 'FC Bayern Munich 2025-26 Home Jersey',
        price: 95,
        discount: 0.00,
        brand: 'FC Bayern Munich'
    },
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_16b285b7-b88b-4d53-8b67-4ef8f8b04960.jpg?v=1748843702&width=533',
        name: 'FC Bayern Munich 2025-26 Away Jersey',
        price: 85,
        discount: 0.10,
        brand: 'FC Bayern Munich'
    },

    // Chelsea
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_c35f84c8-8935-4c18-8171-4961b96dc736.jpg?v=1769242237&width=533',
        name: 'Chelsea 2025-26 Third Jersey',
        price: 90,
        discount: 0.45,
        brand: 'Chelsea'
    },

    // Paris Saint-Germain
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_cf7cce2d-0cc8-4ba2-a27c-8c43e46f86c1.png?v=1769242737&width=533',
        name: 'Paris Saint-German 2025-26 Third Jersey',
        price: 90,
        discount: 0.50,
        brand: 'Paris Saint-Germain'
    },

    // Inter Milan
    {
        image: 'https://championskit.in/cdn/shop/files/rn-image_picker_lib_temp_f38b5cc8-80f0-4cc6-9105-6bc45e79300c.png?v=1769240068&width=533',
        name: 'Inter Milan 2025-26 Third Jersey',
        price: 85,
        discount: 0.35,
        brand: 'Inter Milan'
    },

    // Santos FC
    {
        image: 'https://championskit.in/cdn/shop/files/Santos_FC_2025_Home_Jersey.jpg?v=1768911741&width=533',
        name: 'Santos FC 2025 Home Jersey',
        price: 80,
        discount: 0.20,
        brand: 'Santos FC'
    }
];

const nike = [
  // --- NIKE ---
  {
    image: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/h_300,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/685cdbbd-24db-4ece-b401-f32c48b04392/ZOOMX+VAPORFLY+NEXT%25+4.png',
    name: 'NIKE ZoomX Vaporfly Next% 3',
    price: 300.00,
    discount: 0.1
  },
  {
    image: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/5b1a9ccf-1ec8-4e62-958f-5f301b9e851f/what-are-the-best-nike-basketball-shoes.jpg',
    name: 'Nike Superfly Basketball',
    price: 299.99,
    discount: 0.15
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/6a21b16e-6647-45f3-ae73-bc770ab7a7cf/ZOOM+SUPERFLY+9+ELITE+MR+FG.png',
    name: 'Nike Air Zoom Superfly 9 Elite FG',
    price: 285.00,
    discount: 0.1
  },
  {
    image: 'https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_775,c_limit/7f4c40e7-5982-4fd9-b854-5772394533b6/nike-debuts-revolutionary-technology-with-the-air-zoom-mercurial.jpg',
    name: 'Nike Air Zoom Mercurial Vapor 15 Elite',
    price: 260.00,
    discount: 0.0
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/167831/grandes/1651619217bota-nike-phantom-gt2-elite-df-fg-naranja-0.webp',
    name: 'Nike Phantom GT2 Elite DF FG',
    price: 250.00,
    discount: 0.15
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e4bb49-2024-4112-ae13-d349a0ae19b2/ZM+VAPOR+16+PRO+FG.png',
    name: 'Nike Zoom Mercurial Vapor 16 Pro FG',
    price: 160.00,
    discount: 0.05
  },
  {
    image: 'https://images.prodirectsport.com/ProductImages/Gallery_5/226315_Gallery_5_0733526.jpg',
    name: 'Nike Phantom Venom Elite FG',
    price: 150.00,
    discount: 0.2
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe879bc4-9f66-4789-9773-9983e8461932/W+NIKE+VOMERO+18+NBY.png',
    name: 'Nike Air Zoom Vomero 18',
    price: 130.00,
    discount: 0.0
  },
  {
    image: 'https://www.nike.com.kw/on/demandware.static/-/Library-Sites-NikeSharedLibrary/default/dwb1da31f0/2025%20New/12/PWH/Phantom-Merc-Kids-MB.jpg',
    name: 'Nike Jr. Phantom 6 Academy (Mamba Mentality)',
    price: 95.00,
    discount: 0.0
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a81dbe13-5b6d-41ab-a158-d0f6c9e284b0/NIKE+REAX+8+TR+MESH.png',
    name: 'Nike Reax 8 TR Mesh',
    price: 90.00,
    discount: 0.1
  },
  {
    image: 'https://static.nike.com/a/images/w_960,h_960,c_fill,f_auto/b660382d-41fe-4d1b-93df-086ebe5a902f/image.png',
    name: 'Nike Air Force 1 Low (White/Blue)',
    price: 90.00,
    discount: 0.05
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a3cae43f-8de9-4fcf-af19-46d9b9378971/NIKE+RUN+SWIFT+3.png',
    name: 'Nike Run Swift 3',
    price: 85.00,
    discount: 0.15
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba2ab3da-0d91-4ebf-8dc0-b6e858b3bcd8/NIKE+RUN+DEFY.png',
    name: 'Nike Run Defy All Day',
    price: 80.00,
    discount: 0.1
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77834c35-0dd1-4c48-8c6c-2e53365908d4/W+NIKE+DOWNSHIFTER+14.png',
    name: 'Nike Downshifter 14',
    price: 75.00,
    discount: 0.0
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/114d717f-f86d-4fac-96cd-8e57480f59b5/NIKE+REVOLUTION+8+EASYON.png',
    name: 'Nike Revolution 8 EasyOn',
    price: 70.00,
    discount: 0.05
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d146390-81a2-4060-a684-c8f4cca1610e/AIR+MONARCH+IV.png',
    name: 'Nike Air Monarch IV',
    price: 65.00,
    discount: 0.0
  },
  {
    image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0dd40cf8-07cc-482d-b2c6-61e46b8f19fc/NIKE+FLEX+TRAIN.png',
    name: 'Nike Flex Train',
    price: 60.00,
    discount: 0.1
  },
  {
    image: 'https://img01.ztat.net/article/spp-media-p1/ef4a6d5b37444fe1852cb0dbe6910d55/b936e5da8915435e89ff90ae28239c45.jpg?imwidth=300&filter=packshot',
    name: 'Nike Mercurial Superfly 9 Club TF',
    price: 55.00,
    discount: 0.0
  },
  {
    image: 'https://i.pinimg.com/736x/01/f7/2d/01f72dc33f6575b38e8191a6331210a1.jpg',
    name: 'Nike Mercurial Superfly 8 Elite CR7',
    price: 50.00,
    discount: 0.5
  },
  {
    image: 'https://image.made-in-china.com/202f0j00fFaiDbOJZQRn/New-Football-Boots-Original-Superfly-High-Ankle-Non-Slip-Sports-Football-Shoes.webp',
    name: 'Generic High Ankle Football Boots',
    price: 45.00,
    discount: 0.1
  },
  {
    image: 'https://i.pinimg.com/736x/05/54/d0/0554d008057fa27766fbb658fb3a0423.jpg',
    name: 'Nike Kids Mercurial',
    price: 40.00,
    discount: 0.05
  }
];

const adidas = [
  // --- ADIDAS ---
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/266036/750/bota-adidas-f50-messi-elite-fg-ftwr-white-lucid-red-silver-met-0.webp',
    name: 'adidas F50 Messi Elite FG',
    price: 270.00,
    discount: 0.05
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/272979/750/bota-adidas-predator-elite-ft-ag-jb-core-black-ftwr-white-glory-blue-0.webp',
    name: 'adidas Predator Elite Jude Bellingham AG',
    price: 260.00,
    discount: 0.0
  },
  {
    image: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/football_fw24_f50_launch_plp_x_story_snippet_d_6ef9876973.jpg',
    name: 'adidas F50 Elite FG "Advancement"',
    price: 250.00,
    discount: 0.1
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/240258/grandes/bota-adidas-predator-elite-ll-ag-off-white-core-black-pure-ruby-0.webp',
    name: 'adidas Predator Elite Laceless AG',
    price: 245.00,
    discount: 0.15
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/267711/750/bota-adidas-f50-elite-ag-purple-rush-white-lucid-lemon-0.webp',
    name: 'adidas F50 Elite AG (Purple Rush)',
    price: 240.00,
    discount: 0.05
  },
  {
    image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/24f41b83896a4e8984c5d41fa4479a76_9366/predator-league-fold-over-tongue-firm-ground-football-boots.jpg',
    name: 'adidas Predator League Fold-Over Tongue FG',
    price: 100.00,
    discount: 0.2
  },
  {
    image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/181c8d3a9235419fa3ac21c1ec0c05ca_9366/predator-league-fold-over-tongue-firm-multi-ground-boots.jpg',
    name: 'adidas Predator League MG',
    price: 95.00,
    discount: 0.1
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/267638/750/bota-adidas-f50-elite-fg-nino-core-black-iron-met-lucid-lemon-0.webp',
    name: 'adidas Junior F50 Elite FG',
    price: 90.00,
    discount: 0.0
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/291307/750/bota-adidas-f50-messi-league-fgmg-kinder-blanco-0.webp',
    name: 'adidas Kids F50 Messi League FG/MG',
    price: 65.00,
    discount: 0.15
  }
];

const puma = [
  // --- PUMA ---
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/307236/750/bota-puma-future-9-ultimate-fg-mint-jelly-puma-black-aquatic-0.webp',
    name: 'Puma Future 7 Ultimate FG (Mint Jelly)',
    price: 230.00,
    discount: 0.1
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/307260/750/bota-puma-ultra-6-ultimate-fg-icy-blue-blue-jewel-0.webp',
    name: 'Puma Ultra 5 Ultimate FG (Icy Blue)',
    price: 220.00,
    discount: 0.05
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/271533/750/bota-puma-future-8-ultimate-fg-heat-fire-black-ravish-0.webp',
    name: 'Puma Future 7 Ultimate FG (Heat Fire)',
    price: 215.00,
    discount: 0.2
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/265077/750/bota-puma-future-8-ultimate-fg-white-black-glowing-red-0.webp',
    name: 'Puma Future 7 Ultimate FG (White/Red)',
    price: 210.00,
    discount: 0.15
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/265078/750/bota-puma-future-8-ultimate-fg-black-fizzy-light-green-terrain-0.webp',
    name: 'Puma Future 7 Ultimate FG (Black/Green)',
    price: 210.00,
    discount: 0.1
  },
  {
    image: 'https://thumblr.uniid.it/images/1769594525-index-puma-creativity-pack.jpegquality-100.png',
    name: 'Puma Future Ultimate (Creativity Pack)',
    price: 140.00,
    discount: 0.1
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/285572/750/bota-puma-future-9-match-fgag-negro-0.webp',
    name: 'Puma Future 7 Match FG/AG (Black)',
    price: 85.00,
    discount: 0.0
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/285607/750/bota-puma-future-9-match-fgag-blanco-0.webp',
    name: 'Puma Future 7 Match FG/AG (White)',
    price: 85.00,
    discount: 0.05
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/265046/750/bota-puma-zukunftige-8-match-spielmacher-fg-ag-rojo-0.webp',
    name: 'Puma Future 7 Match FG/AG (Red)',
    price: 80.00,
    discount: 0.1
  }
];

const newBalance = [
  // --- NEW BALANCE ---
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/309095/750/bota-new-balance-furon-elite-fg-v8-punch-yellow-0.webp',
    name: 'New Balance Furon V7+ Elite FG (Punch Yellow)',
    price: 225.00,
    discount: 0.05
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/280568/750/bota-new-balance-furon-elite-fg-v8-pixel-green-0.webp',
    name: 'New Balance Furon V7+ Elite FG (Pixel Green)',
    price: 225.00,
    discount: 0.1
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/280545/750/bota-new-balance-furon-elite-fg-v8-energy-red-0.webp',
    name: 'New Balance Furon V7+ Elite FG (Energy Red)',
    price: 220.00,
    discount: 0.15
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/309093/750/bota-new-balance-furon-elite-fg-v8-white-0.webp',
    name: 'New Balance Furon V7+ Elite FG (White)',
    price: 215.00,
    discount: 0.0
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/280587/750/bota-new-balance-furon-elite-fg-v8-hot-mango-0.webp',
    name: 'New Balance Furon V7+ Elite FG (Orange)',
    price: 210.00,
    discount: 0.15
  }
];

const ball = [
  {
    image: 'https://www.arlingtontx.gov/files/assets/city/v/1/world-cup/images/articles-fifa-world-cup-trionda-ball.jpg?w=1200',
    name: 'adidas FIFA World Cup 2026 Official Match Ball',
    price: 170,
    discount: 0.12
  },
  {
    image: 'https://media.telanganatoday.com/wp-content/uploads/2022/12/Al-Hilm-the-official-match-ball-of-FIFA-World-Cup-2022-finals.jpg',
    name: 'adidas Al Hilm FIFA World Cup 2022 Official Final Match Ball',
    price: 165,
    discount: 0.45
  },
  {
    image: 'https://www.mmsports.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/c/ucl-omb-23-24-white-blue.jpg',
    name: 'adidas UCL Pro Official Match Ball 2023-24',
    price: 160,
    discount: 0.05
  },
  {
    image: 'https://www.prodirectsport.us/cdn/shop/files/1027144_main.jpg?v=1772649330&width=600',
    name: 'NIKE Premier League Flight Official Match Ball 2025-26',
    price: 160,
    discount: 0.28
  },
  {
    image: 'https://i.ebayimg.com/images/g/OpsAAOSwo4hn2IDk/s-l1200.jpg',
    name: 'NIKE Premier League Flight Official Match Ball 2024-25',
    price: 155,
    discount: 0.33
  },
  {
    image: 'https://thumblr.uniid.it/product/396164/a9ef43692a0e.jpg?width=3840&format=webp&q=75',
    name: 'adidas UCL Finale 2025 Pro Match Ball',
    price: 150,
    discount: 0.18
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/232163/grandes/balon-puma-puma-orbita-laliga-2024-2025-quality-pro-white-multicolor-0.webp',
    name: 'PUMA Orbita LaLiga 2024-25 Official Match Ball',
    price: 145,
    discount: 0.42
  },
  {
    image: 'https://shop.volleyballworld.com/cdn/shop/files/BV550C-FROC-Leftdiagonalup_fd2318cd-00d5-4fd1-ae77-96ddb377e004.png?v=1714065077&width=1080',
    name: 'Mikasa V200W Official FIVB Game Volleyball',
    price: 110,
    discount: 0.09
  },
  {
    image: 'https://www.wilson.com/en-us/media/catalog/product/article_images/WV1000602XB_/WV1000602XB__041b8282cbdd51cce7ede9dd938a8787.png',
    name: 'Wilson OPTX AVP Official Beach Volleyball',
    price: 85,
    discount: 0.21
  },
  {
    image: 'https://www.bernsport.co.nz/media/catalog/product/cache/9aa376b007d1afe3e7155f0832a4b28d/m/o/mo00360_molten_v5m4000_volleyball_5_1.jpg',
    name: 'Molten V5M4000 Competition Volleyball',
    price: 65,
    discount: 0.37
  },
  {
    image: 'https://cdn.shoplightspeed.com/shops/611228/files/68517263/650x750x2/adidas-ucl-24-25-training-foil-ball-green-silver.jpg',
    name: 'adidas UCL 2025-26 Training Foil Ball',
    price: 35,
    discount: 0.14
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/189296/grandes/balon-nike-premier-league-academy-white-bright-crimson-0.webp',
    name: 'NIKE Premier League Academy Ball 2023-24',
    price: 30,
    discount: 0.48
  }
];

const training = [
  {
    image: 'https://thecubeclub.com/cdn/shop/products/1M0A1418.jpg?v=1658821470&width=1500',
    name: 'CubeClub Roller Home Gym Station',
    price: 145,
    discount: 0.22
  },
  {
    image: 'https://www.playgosports.com/cdn/shop/files/FB-TCKLMAN-6-AIR_Main_2.jpg?v=1733871711&width=3000',
    name: 'GoSports Inflatable Tackling Dummy',
    price: 89,
    discount: 0.31
  },
  {
    image: 'https://img001.video2b.com/1961/file_01688539868785.jpg?x-oss-process=image/resize,m_lfit,w_768/format,webp/quality,80',
    name: 'Adjustable Dumbbell Set (20kg)',
    price: 75,
    discount: 0.15
  },
  {
    image: 'https://images.media-arocam.com/7POqAgV_VDsC60A85pRUUtxq0V0=/fit-in/1000x1000/w37526/BLK/Yv8Gc1Bg_4.jpg',
    name: 'Pro-Level Football Rebounder Net',
    price: 65,
    discount: 0.44
  },
  {
    image: 'https://www.quickplaysport.com/cdn/shop/files/SP_REPLAYB4001_305x305.jpg?v=1730808469',
    name: 'QuickPlay Bounds Ball Returner',
    price: 45,
    discount: 0.08
  },
  {
    image: 'https://static.wixstatic.com/media/9eec80_3344fc71208b4acabc45b78ecfed57cd~mv2.jpg/v1/fill/w_980,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9eec80_3344fc71208b4acabc45b78ecfed57cd~mv2.jpg',
    name: 'Compression Hinged Knee Brace',
    price: 35,
    discount: 0.27
  },
  {
    image: 'https://m.media-amazon.com/images/I/61q+pTR-CyL._AC_UF894,1000_QL80_.jpg',
    name: 'Speed & Agility Training Ladder',
    price: 25,
    discount: 0.19
  },
  {
    image: 'https://media.4rgos.it/s/Argos/7845770_R_SET',
    name: 'Multi-Color Football Training Cones (Set)',
    price: 15,
    discount: 0.39
  }
];

function renderProduct(dataArray, containerSelector) {
    const targetContainer = document.querySelector(containerSelector);

    if (!targetContainer) return;

    dataArray.forEach(item => {
        const finalPrice = item.price * (1 - item.discount);
        const html = `
            <div class="product-card">
                <img src="${item.image}" alt="image">
                <div class="product-info">
                    <div class="product-price">
                        <h3>${item.name}</h3>
                        <p>
                            ${finalPrice.toFixed(2)}$
                            ${item.discount > 0 ? `<del>${item.price.toFixed(2)}$</del>` : ''}
                        </p>
                    </div>
                    <button class="add-cart">
                        <h1>+</h1>
                    </button>
                </div>
            </div>
        `;
        targetContainer.innerHTML += html;
    });
}
renderProduct(shirt, '.shirt-container ')
renderProduct(shirt, '.shirt-container ')
renderProduct(nike, '.nike-container')
renderProduct(adidas, '.adidas-container')
renderProduct(puma, '.puma-container')
renderProduct(newBalance, '.new-balance-container')
renderProduct(ball, '.ball-container')
renderProduct(training, '.training-container')

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart');

    if (btn) {
        alert('Successfully! added to cart.');
    }
});