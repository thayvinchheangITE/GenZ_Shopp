const luxuryClothes = [
  { image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600', name: 'Chanel Tweed Midi Dress', price: 2500.00, discount: 0.15 },
  { image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600', name: 'Gucci Silk Evening Gown', price: 2200.00, discount: 0.20 },
  { image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600', name: 'Louis Vuitton Monogram Coat', price: 2000.00, discount: 0.10 },
  { image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600', name: 'Prada Leather Jacket', price: 1800.00, discount: 0.25 },
  { image: 'https://veronicabeard.com/cdn/shop/files/2026_02.26_Spring_March_Homepage_Mobile_WEBP.webp?v=1771870941&width=2048', name: 'Veronica Beard Cashmere Sweater', price: 1600.00, discount: 0.30 },
  { image: 'https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10239766/data/b826b0d91b6b80b9d2a7b62835dc9745/3x4_four-columns/480/no-search-results-women-new-in.jpeg', name: 'Balenciaga Oversized Blazer', price: 1400.00, discount: 0.05 },
  { image: 'https://www.sheisryan.co/wp-content/uploads/2022/05/fashion-brands-5.jpg', name: 'Dior Sequin Mini Dress', price: 1200.00, discount: 0.40 },
  { image: 'https://content.api.news/v3/images/bin/4231d928427a500ca4a0865367e1999c', name: 'Hermes Birkin Inspired Clutch', price: 1000.00, discount: 0.35 },
  { image: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1485222_alternate10?$plpDeskRF$', name: 'Ralph Lauren Wool Coat', price: 950.00, discount: 0.20 },
  { image: 'https://cdn.shopify.com/s/files/1/0436/0113/3728/products/mididressdramaticsleevessummerdressdubai39_480x480.jpg?v=1642063293', name: 'Valentino Velvet Gown', price: 900.00, discount: 0.15 },
  { image: 'https://negativeapparel.com/cdn/shop/files/fashion-casual-vest-vest-trousers-suit-womens-clothing-negative-apparel-720513.jpg?v=1745984576', name: 'Fendi Fur Trim Jacket', price: 850.00, discount: 0.10 },
  { image: 'https://cdn.platform.next/common/items/default/default/itemimages/3_4Ratio/product/lge/N99135s.jpg', name: 'Burberry Trench Coat', price: 800.00, discount: 0.45 },
  { image: 'https://di2ponv0v5otw.cloudfront.net/posts/2024/04/10/6616ce71fe7e2c3de9720d77/m_wp_6616cf009a76ef9bb69d582c.webp', name: 'Yves Saint Laurent Blouse', price: 750.00, discount: 0.30 },
  { image: 'https://m.media-amazon.com/images/I/71YhdXsmJ+L._AC_UY350_.jpg', name: 'Cartier Inspired Jewelry Set', price: 700.00, discount: 0.25 },
  { image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop', name: 'Tom Ford Sunglasses', price: 650.00, discount: 0.20 },
  { image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop', name: 'Jimmy Choo Heels', price: 600.00, discount: 0.35 },
  { image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop', name: 'Rolex Watch', price: 550.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/736x/3e/96/cf/3e96cf8e9a2a57fb129557616fac6c06.jpg', name: 'Tiffany & Co Necklace', price: 500.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/1200x/3f/93/0c/3f930c66d880b7cfd57645311a9e6fc8.jpg', name: 'Louis Vuitton Belt', price: 450.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/736x/22/ab/ac/22abac696584ef1d4daf0d10bd47efa9.jpg', name: 'Gucci Scarf', price: 400.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/736x/3e/96/cf/3e96cf8e9a2a57fb129557616fac6c06.jpg', name: 'Chanel Perfume', price: 350.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/3f/93/0c/3f930c66d880b7cfd57645311a9e6fc8.jpg', name: 'Dior Lipstick Set', price: 300.00, discount: 0.30 }
];
const urbanShirt = [
  { image: 'https://i.pinimg.com/736x/64/2d/49/642d497da87d12524e10e25d752ec9c5.jpg', name: 'Supreme Box Logo Hoodie', price: 150.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/91/34/a6/9134a66552f661830953c7a4563f92df.jpg', name: 'Stussy Graphic Tee', price: 80.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/b7/36/8c/b7368c5a984692585387362ea446db11.jpg', name: 'BAPE Shark Hoodie', price: 120.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/f5/be/74/f5be74acd2d43f2ce2b34680eba6096a.jpg', name: 'Palace Tracksuit', price: 100.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/75/4f/bb/754fbb0d9a7c313ca94a3706fd661436.jpg', name: 'Nike SB Tee', price: 60.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/a0/f6/54/a0f654a6a55915936296aba3b6b4d8c2.jpg', name: 'Adidas Originals Jacket', price: 90.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/ba/71/17/ba711769903cafd390996b7485ef6f73.jpg', name: 'Off-White Industrial Belt', price: 70.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/18/f2/03/18f2039f4b8f15628dfaed7b8d374b5a.jpg', name: 'Stone Island Ghost Piece', price: 110.00, discount: 0.45 }
];

const boutiqueClothes = [
  { image: 'https://i.pinimg.com/1200x/57/02/e6/5702e6bf375249ce22dd0721d6dce522.jpg', name: 'Handcrafted Embroidered Kimono', price: 120.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/ca/38/90/ca3890fa3738c5864504a17fdaa693c1.jpg', name: 'Vintage Lace Maxi Dress', price: 95.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/1200x/cc/4d/3a/cc4d3a62fb203fe9df71ec3b3a5bd3b0.jpg', name: 'Artisan Crochet Cardigan', price: 85.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/736x/8e/05/ff/8e05ff1dcf6fa43cf480666c846125ea.jpg', name: 'Boho Fringe Scarf Set', price: 70.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/b1/cc/5c/b1cc5c9051351b69da6c62963f81d91d.jpg', name: 'Silk Ribbon Skirt', price: 65.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/736x/69/b3/f5/69b3f5421db32c929daf81c9a6a6d7e0.jpg', name: 'Floral Puff Sleeve Blouse', price: 60.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/1200x/08/f6/91/08f69121c20179fb6743791f276e43a6.jpg', name: 'Eyelet Lace Top', price: 55.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/3e/14/64/3e14642267ba007c1a504df35d60f723.jpg', name: 'Twin Set Sweater', price: 50.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/736x/c9/63/bf/c963bf44c7cdbe87852e05bec6e777dd.jpg', name: 'Corset Lace Camisole', price: 45.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/bc/eb/29/bceb29f1af102ad3deb3a51f9a5c4737.jpg', name: 'Victorian Collar Blouse', price: 40.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/7a/16/44/7a1644904819c2305cb9678bf4327159.jpg', name: 'Sheer Organza Top', price: 35.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/736x/6e/3a/3e/6e3a3e5b7d273d366efb33df6940dffb.jpg', name: 'Ruffle Front Blouse', price: 30.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/c6/66/6a/c6666aef90f78bdb067d5bd48f7e3655.jpg', name: 'Bustier Crop Top', price: 25.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/83/7f/23/837f231aaf23e9a60058bba6ee820851.jpg', name: 'Peter Pan Collar Shirt', price: 20.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/1200x/20/3c/0c/203c0cddfb21767694fe1233305b2fde.jpg', name: 'Oversized Denim Shirt', price: 18.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/736x/b8/bb/59/b8bb5927442cc4fbf25cc80a01266d66.jpg', name: 'Bow Accent Sweater', price: 15.00, discount: 0.45 },
  { image: 'https://i.pinimg.com/1200x/b8/cc/22/b8cc22e9f526300085e387a48340a815.jpg', name: 'Square Neck Tank', price: 12.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/736x/7d/13/b4/7d13b44ffe72615e8c56e1e3b4c6a2dd.jpg', name: 'Polka Dot Kerchief', price: 10.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/90/72/e6/9072e6c9ef8f5dddb5550dac205c6787.jpg', name: 'Gold Locket Accessory', price: 8.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/57/8f/2b/578f2b344ce2c52da3c2d07b6d6ba19b.jpg', name: 'Lettuce Hem Crop', price: 6.00, discount: 0.25 }
];

const outerwearClothes = [
  { image: 'https://i.pinimg.com/736x/6d/c1/73/6dc17325924a7f97111c9a49da86b465.jpg', name: 'Leather Biker Jacket', price: 150.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/6e/3b/6c/6e3b6cff7af0c7e6445103d02f2bef5e.jpg', name: 'Faux Fur Coat', price: 120.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/71/a7/33/71a733d4ba8013677ec082ba42128677.jpg', name: 'Bomber Jacket', price: 90.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/dc/70/ed/dc70ed91153cbe60821dc2d064bc8c91.jpg', name: 'Denim Jacket', price: 70.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/da/7c/63/da7c63ef1a65309bccbb76bda3c33533.jpg', name: 'Wool Overcoat', price: 100.00, discount: 0.35 }
];


const dressesClothes = [
  { image: 'https://i.pinimg.com/736x/cb/f8/99/cbf8999fe1ed485ba7efc3ef7819b9e0.jpg', name: 'Tulle Ball Gown', price: 150.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/ed/c9/0f/edc90ff2471e950400c15e5d7baac7d4.jpg', name: 'Velvet Evening Dress', price: 120.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/b6/a3/cf/b6a3cf345880e6c5f20d3a077d243524.jpg', name: 'Sequin Mini Dress', price: 100.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/3d/bf/9f/3dbf9f342cd4a5249b34f6b8480f346f.jpg', name: 'Chiffon Layered Gown', price: 95.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/c2/d4/b6/c2d4b62a0b23558379bddfa914696446.jpg', name: 'Corset Bodice Midi', price: 90.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/40/f5/50/40f55094d641b1675b7f26ec271c325b.jpg', name: 'Silk Midi Dress', price: 85.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/95/3a/92/953a922a91efed12b1145104d8d920e0.jpg', name: 'Ruffled Maxi Dress', price: 80.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/2e/83/2f/2e832fee407c5252f54434341cdbd98d.jpg', name: 'Velvet Bodysuit Dress', price: 75.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/1200x/ff/ca/73/ffca73ba58ab99292f805c5b919ac67b.jpg', name: 'Tulle Skirt Evening Dress', price: 70.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/4b/fe/9b/4bfe9b58db05885b0ceaef35dd39d47f.jpg', name: 'Sequin Mini Dress', price: 65.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/28/be/8b/28be8b81f50ff04e9a529a3a9a36c07c.jpg', name: 'Lace Trim Midi Dress', price: 60.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/736x/e9/5d/34/e95d3487a58e8edfad32ece5eabc3e87.jpg', name: 'Mesh Dress', price: 55.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/79/dc/a5/79dca568cc244360c49b920e3170fd1d.jpg', name: 'Lace Overlay Dress', price: 50.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/7b/2d/1e/7b2d1ec0dd7f3ba55aaf61a197049e92.jpg', name: 'Pleated A-Line Dress', price: 45.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/1200x/39/ce/e3/39cee35477632db6b86499089345a920.jpg', name: 'Embroidered Boho Dress', price: 40.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/19/8d/ab/198dab7d8a94d291b025b81bb52ade3f.jpg', name: 'Satin Cocktail Dress', price: 35.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/1200x/d6/29/cb/d629cbf69d2bc4250c2743a4e7c2a75e.jpg', name: 'Asymmetrical Hem Dress', price: 30.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/00/ed/13/00ed13fd6d14a1624adf4cc5bd0fc81d.jpg', name: 'Tiered Maxi Dress', price: 25.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/28/65/4c/28654c96a6db3039c6dcaa87d8e31f48.jpg', name: 'Floral Sundress', price: 20.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/736x/6f/b3/34/6fb334d53927b50b0c76777d0aa87fa2.jpg', name: 'Wrap Front Midi', price: 18.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/51/06/47/510647355cf3d23f504b2216e9ae84dc.jpg', name: 'Floral Ruffle Wrap Dress', price: 15.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/54/e2/0d/54e20da7b802a79d21f2744d67a84473.jpg', name: 'Fringe Boho Dress', price: 12.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/73/5d/6a/735d6a093683e9a7fc582a5aab2735e0.jpg', name: 'Print Shift Dress', price: 10.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/736x/50/46/c9/5046c9414ec2fd8cfae80d9a4b854a4d.jpg', name: 'Polka Dot Swing Dress', price: 8.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/736x/ab/23/be/ab23bec189fc4ddf54d41d8c46ed8d8b.jpg', name: 'Ruffle Sleeve Shirt Dress', price: 6.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/e8/5d/48/e85d48fa94bbcbad5f482a41e2e4a629.jpg', name: 'Satin Slip Dress', price: 5.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/3e/96/cf/3e96cf8e9a2a57fb129557616fac6c06.jpg', name: 'Wrap Dress', price: 4.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/3f/93/0c/3f930c66d880b7cfd57645311a9e6fc8.jpg', name: 'Midi Dress', price: 3.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/22/ab/ac/22abac696584ef1d4daf0d10bd47efa9.jpg', name: 'Summer Wrap Dress', price: 2.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/736x/3e/96/cf/3e96cf8e9a2a57fb129557616fac6c06.jpg', name: 'Chiffon Dress', price: 1.00, discount: 0.35 }
];

const topClothes = [
  { image: 'https://i.pinimg.com/736x/99/d3/95/99d395c9505539cc366adb2cfc900482.jpg', name: 'Blue Square Pattern Doll Top', price: 30.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/1b/f1/9c/1bf19cf2b0de41af944b81bdc27d4329.jpg', name: 'White Doll Top', price: 28.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/42/7a/cf/427acfa20a62045eecea568cdd93c9fc.jpg', name: 'Pink Doll Top', price: 25.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/736x/a2/98/80/a29880e6b1da6bc1a8d83b51df18adac.jpg', name: 'Brown Square Pattern Doll Top', price: 22.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/3c/a9/f2/3ca9f26cb540e5f34876d7608c9dd835.jpg', name: 'Blue Polka Dots Doll Top', price: 20.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/736x/18/85/a7/1885a7e701777ae4d542489e7abcc9dc.jpg', name: 'Pink Off Should Top', price: 18.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/85/6e/1b/856e1bc133dc824ed93fcbbb7947af67.jpg', name: 'Cream White Off Should Top', price: 16.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/736x/80/ad/da/80adda5e2ec32f6863c3b58011c41958.jpg', name: 'Red Off Should Top', price: 14.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/736x/85/98/0d/85980ded78be5ccdd45a73b6a596e044.jpg', name: 'Baby Blue Off Should Top', price: 12.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/3f/a4/02/3fa402c9132fabed1dbca826741d35d5.jpg', name: 'Light Purple Off Should Top', price: 10.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/b7/86/36/b786367791bf5218fd254af3fc30f5b0.jpg', name: 'Navy Blue Henley Top', price: 8.00, discount: 0.25 }
];

const denimClothes = [
  { image: 'https://i.pinimg.com/1200x/03/c8/90/03c890701133e25c5a716dffd5e840ff.jpg', name: 'High-Waisted Skinny Jeans', price: 140.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/df/e7/f2/dfe7f240c157e51b9edadcdfd16df7eb.jpg', name: 'Distressed Denim Shorts', price: 85.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/736x/6b/46/71/6b4671961036bac3cf924554196c3850.jpg', name: 'Classic Straight Leg Jeans', price: 120.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/1f/8d/ae/1f8dae38c096a1dae7d989ea9ce23aca.jpg', name: 'Boyfriend Fit Denim Pants', price: 110.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/736x/41/d7/34/41d73492b811efd83abdf4f3d0ea4cb1.jpg', name: 'Ripped Knee Jeans', price: 100.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/43/3f/49/433f499a11c3bdeb6d8ae3109ca4f133.jpg', name: 'Wide Leg Denim Trousers', price: 130.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/56/83/c6/5683c66636001a4d8f8032bf0ce0552b.jpg', name: 'Denim Mini Skirt', price: 75.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/22/ee/6e/22ee6ee7de2ebcf1e63df3dd941b0242.jpg', name: 'Flared Denim Jeans', price: 105.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/1200x/68/65/cd/6865cdd9b5a0a789f57321bb25c2f6e0.jpg', name: 'Denim Jacket with Patches', price: 135.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/736x/2d/bd/e0/2dbde09cf03a5caae80b3df7ed8d128d.jpg', name: 'Slim Fit Denim Leggings', price: 90.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/1200x/e4/27/6d/e4276d0d0aa3aaf3d19028290d979a03.jpg', name: 'Oversized Denim Shirt', price: 80.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/01/79/69/0179690fb4685f5891231005a31f4e7c.jpg', name: 'Denim Overalls', price: 125.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/4e/36/e8/4e36e892318e5182baadd1998d5fd0ca.jpg', name: 'Embroidered Denim Vest', price: 70.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/fd/45/6f/fd456f1093ac42559d058dab1eef76a8.jpg', name: 'Cropped Denim Jacket', price: 115.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/1200x/f2/f6/2c/f2f62c54f4d0c7250e2abf159688c265.jpg', name: 'Denim Cargo Pants', price: 95.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/1200x/f5/f3/78/f5f37880e0f3b7e8485cddcf5f7c1398.jpg', name: 'Vintage Wash Jeans', price: 85.00, discount: 0.05 },
  { image: 'https://i.pinimg.com/1200x/e8/de/49/e8de49cb4c0a3392547b273ac1994f8c.jpg', name: 'Button-Up Denim Dress', price: 105.00, discount: 0.20 },
  { image: 'https://i.pinimg.com/1200x/7b/fa/a3/7bfaa38d63b4bfbee21d15a3a61c0351.jpg', name: 'Denim Romper', price: 95.00, discount: 0.15 },
  { image: 'https://i.pinimg.com/1200x/d5/a8/ae/d5a8ae7494c2a48e5707603e791dcb1f.jpg', name: 'Distressed Denim Jacket', price: 125.00, discount: 0.25 },
  { image: 'https://i.pinimg.com/1200x/38/7a/a4/387aa440dab144580fa7368ea47f6d93.jpg', name: 'High-Rise Denim Shorts', price: 75.00, discount: 0.30 },
  { image: 'https://i.pinimg.com/1200x/e1/d2/8c/e1d28cc913fe5203284432e9a0384f7c.jpg', name: 'Denim Blazer', price: 110.00, discount: 0.10 },
  { image: 'https://i.pinimg.com/1200x/5b/81/7c/5b817cd7e63e14bb59518e30f28b7897.jpg', name: 'Mom Jeans', price: 100.00, discount: 0.35 },
  { image: 'https://i.pinimg.com/736x/62/11/50/6211502f27db63a93694d4e94bb953bd.jpg', name: 'Denim Skirt', price: 80.00, discount: 0.40 },
  { image: 'https://i.pinimg.com/736x/d6/ad/9e/d6ad9e2c5982d878020abddc21dda2ba.jpg', name: 'Baggy Denim Pants', price: 90.00, discount: 0.05 }
];

function renderProduct(dataArray, containerSelector){
    const targetContainer = document.querySelector(containerSelector)

    if(!targetContainer) return;

    dataArray.forEach(item => {
        const finalPrice = item.price * (1 - item.discount)
        const html = `
            <div class = "product-card">
                <img src = "${item.image}" alt = "image">
                <div class = "product-info">
                    <div class = "product-price">
                        <h3>${item.name}</h3>
                        <p>
                            ${finalPrice.toFixed(2)}$
                            ${item.discount > 0 ? `<del>${item.price.toFixed(2)}$</del>` : ''}
                        </p>
                        </div>
                    <button class = "add-cart" id="add-cart"><h1>+</h1></button>
                </div>
            </div>
        `;
    targetContainer.innerHTML += html;
    });
}

renderProduct(urbanShirt, '.urban-container')
renderProduct(boutiqueClothes, '.boutique-container')
renderProduct(luxuryClothes, '.luxury-container')
renderProduct(outerwearClothes, ".outer-container")
renderProduct(dressesClothes, ".dresses-container")
renderProduct(topClothes, ".top-container")
renderProduct(denimClothes, ".denim-container")

// Add event listeners to all add-cart buttons
document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});


