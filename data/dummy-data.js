import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'İtalyan', 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy-768x500.jpg'),
  new Category('c2', 'Aperatif', 'https://cdn.shopify.com/s/files/1/2334/9693/files/Blog_18_XmasApero1_grande.jpg?v=1512563782'),
  new Category('c3', 'Hamburger', 'https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg'),
  new Category('c4', 'Alman', 'https://fintiba.com/wp-content/uploads/2023/04/schnitzel-4081269_640.jpg'),
  new Category('c5', 'Diyet', 'https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg'),
  new Category('c6', 'Egzotik', 'https://static.toiimg.com/thumb/msid-49429225,width-1070,height-580,resizemode-75/49429225,pt-32,y_pad-40/49429225.jpg'),
  new Category('c7', 'Kahvaltı', 'https://www.foodandwine.com/thmb/c-WhjPfciKLd1JJD3IEpCZs846M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kahvalti-turkish-breakfast-1-FT-BLOG0817-a5b7266f35224665b684ddea6a0a9eac.jpg'),
  new Category('c8', 'Hint', 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS'),
  new Category('c9', 'Kahve İçecekleri', 'https://glazedpb.com/wp-content/uploads/2022/02/Top-5-Types-of-Coffees-You-Must-Have.jpg'),
  new Category('c10', 'Meyve Suları', 'https://images.indianexpress.com/2021/02/fruit-juice-1200.jpg'),
  new Category('c11', 'Milkshake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEcWvkFSqStHshcdAPj-xVXzCHB0m2q5vhTizCgjVMA&s'),
  new Category('c12', 'Çay Çeşitleri', 'https://www.treehugger.com/thmb/uWQw8MStw9Zetyqli_5F3qoS9Dc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tea-cup-with-several-dried-tea-leaves-and-flowers-1201496311-55f0a4dfdbc54605966a0a9ec2f40f3c.jpg'),
  new Category('c13', 'Smoothie', 'https://www.diyetkolik.com/site_media/media/customvideo_images/kapak_1_1.jpg')
];



export const FOODS = [
  new Food('m1', ['c1', 'c2'], 'Domates soslu Spagetti', 240, '203', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg', ['4 Domates', '1 Çay Kaşığı Zeytinyağı', '2 Soğan', '200g Spaghetti', 'Baharatlar', 'Peynir'], 25),
  new Food('m2', ['c2'], 'Tost', 230, '324', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg', ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin'], 10),
  new Food('m3', ['c3'], 'Hamburger', 320, '324', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['150 gr et', '2 Dilim Domates', '1 Dilim Chedar Peyniri', '1 Dilim Soğan', 'Ketçap', 'Mayonez'], 15),
  new Food('m4', ['c4'], 'Tavuk Sote', 270, '203', 'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg', ['200 gr Tavuk', 'Domates', 'Biber', 'Fesleğen', 'Limon', 'Zeytinyağı', 'Tuz'], 20),
  new Food('m5', ['c2', 'c5'], 'Balıklı Salata', '350', '185', 'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg', ['Somon Balığı', 'Domates', 'Limon', 'Salata Sosu', 'Taze Soğan', 'Hardal', 'Zeytin Yağı', 'Tuz'], 10),
  new Food('m6', ['c6'], 'Portakallı Muhallebi', 320, '324', 'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg', ['Portakal Suyu', '200gr Şeker', '100gr Yoğurt', '200g Krem Şanti', 'Portakal Dilimleri'], 30),
  new Food('m7', ['c7'], 'Pankek', 190, '185', 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg', ['3 yemek kaşığı un', '1 Tatlı Kaşığı Tuz', '1 Tatlı Kaşığı Şeker', '2 bardak süt', '2 Yumurta', '2 Yemek Kaşığı Yağ'], 15),
  new Food('m8', ['c8'], 'Tavuklu Hint Yemeği', 180, '203', 'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg', ['6 Tavuk Butu', '2 Soğan', '4 Diş Sarımsak', '1 Çay Kaşığı Zerdeçal', '1 litre Süt', 'Yarım Litre Krem Şanti', 'Tuz'], 25),
  new Food('m10', ['c2', 'c5'], 'Çilekli Yaz Salatası', 330, '185', 'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg', ['Çilek', 'Domates', 'Salatalık', 'Tuz', 'Salata Sosu', 'Zeytin Yağı'], 10),
  new Food('m11', ['c1', 'c2', 'c5'], 'Mantarlı Tavuk Sote', '280', '203', 'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/02/24152324/Chicken-Breast-with-Sauteed-Mushrooms.960.jpg', ['200 gr Tavuk Göğsü', '150 gr Mantar', '1 Soğan', '2 Diş Sarımsak', 'Tuz', 'Karabiber', 'Kırmızı Biber', 'Zeytinyağı'], 20),
  new Food('m12', ['c3'], 'Izgara Steak', 240, '389', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Bobby-Grilling-013_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539247827.jpeg', ['300 gr Dana Biftek', 'Tuz', 'Karabiber', 'Kekik', '2 Yemek Kaşığı Zeytinyağı'], 15),
  new Food('m13', ['c4'], 'Sebzeli Kuzu Güveç', 220, '203', 'https://mojo.generalmills.com/api/public/content/LZnjv7QNi0Wo2zfvMvBySQ_gmi_hi_res_jpeg.jpeg?v=a5dbca28&t=466b54bb264e48b199fc8e83ef1136b4', ['400 gr Kuzu Eti', 'Patates', 'Havuç', 'Arpacık Soğan', 'Sarımsak', 'Tuz', 'Karabiber', 'Kekik', 'Zeytinyağı'], 30),
  new Food('m14', ['c5'], 'Kinoa Salatası', 330, '185', 'https://www.inspiredtaste.net/wp-content/uploads/2023/01/Quinoa-Salad-Recipe-Video.jpg', ['1 su bardağı Kinoa', 'Salatalık', 'Domates', 'Maydanoz', 'Fesleğen', 'Zeytinyağı', 'Limon Suyu', 'Tuz', 'Karabiber'], 10),
  new Food('m15', ['c6'], 'Çikolatalı Browni', 220, '389', 'https://i.lezzet.com.tr/images-xxlarge-recipe/bogurtlenli_ve_beyaz_cikolatali_brownie-43572d37-effc-4f1c-add2-eaf596124611.jpg', ['200 gr Bitter Çikolata', '150 gr Tereyağı', '3 Yumurta', '1 su bardağı Toz Şeker', '1 su bardağı Un', 'Yarım çay kaşığı Tuz'], 20),
  new Food('m16', ['c7'], 'Krep', 180, 'orta kalorili', 'https://image.hurimg.com/i/hurriyet/75/0x0/5c10b7430f254418d86cee28.jpg', ['2 su bardağı Un', '2 Yumurta', '1 su bardağı Süt', '1 su bardağı Su', '2 yemek kaşığı Sıvı Yağ', '1 çay kaşığı Tuz'], 15),
  new Food('m17', ['c8'], 'Tandoori Tavuk', 190, '203', 'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg', ['4 Tavuk Göğsü', '1 su bardağı Yoğurt', '2 yemek kaşığı Tandoori Baharatı', '2 yemek kaşığı Limon Suyu', '1 yemek kaşığı Zeytinyağı', 'Tuz', 'Karabiber', '2 Diş Sarımsak'], 20),
  new Food('m18', ['c9'], 'Espresso', 30, '5', 'https://cdn.shopify.com/s/files/1/1995/9093/files/iki-bardak-espresso-lungo.jpg?v=1678102312', ['Espresso Kahve Çekirdekleri'], 5),
  new Food('m19', ['c9'], 'Latte', 120, '120', 'https://www.taftcoffee.com/cdn/shop/articles/1.jpg?v=1688549905&width=2048', ['Espresso', 'Süt', 'Krema', 'Vanilya Şurubu'], 10),
  new Food('m20', ['c9'], 'Cappuccino', 110, '80', 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino', ['Espresso', 'Süt Köpüğü', 'Kakao Tozu'], 10),
  new Food('m21', ['c10'], 'Portakal Suyu', 150, '110', 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/06/taze-sikma-portakal-suyu.jpg', ['Taze Sıkılmış Portakal'], 5),
  new Food('m22', ['c10'], 'Elma Suyu', 130, '100', 'https://image.milimaj.com/i/milliyet/75/0x0/5f7775de55427f106c67c0f3.jpg', ['Taze Sıkılmış Elma'], 5),
  new Food('m23', ['c10'], 'Ananas Suyu', 160, '120', 'https://www.ticomachine.com/uploads/allimg/What-kind-of-fruit-matches-pineapple-perfect-while-making-juice.jpg', ['Taze Sıkılmış Ananas'], 5),
  new Food('m24', ['c11'], 'Çikolatalı Milkshake', 280, '220', 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-vegan-chocolate-milkshake-in-jar-1641676525.jpg', ['Süt', 'Çikolata Parçaları', 'Dondurma', 'Vanilya Ekstraktı'], 10),
  new Food('m25', ['c11'], 'Muzlu Milkshake', 250, '200', 'https://icecektarifleri.net/wp-content/uploads/2023/06/muzlu-milkshake-tarifi.jpg', ['Süt', 'Muz Dilimleri', 'Dondurma', 'Bal'], 20),
  new Food('m26', ['c11'], 'Çilekli Milkshake', 270, '210', 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/cilekli-milkshake-tarifi-yepyeni-10.jpg', ['Süt', 'Çilek Dilimleri', 'Dondurma', 'Bal'], 15),
  new Food('m27', ['c12'], 'Siyah Çay', 5, '2', 'https://www.diyetkolik.com/site_media/media/customvideo_images/st_1.jpg', ['Siyah Çay Poşeti', 'Sıcak Su', 'Şeker (isteğe bağlı)'], 5),
  new Food('m28', ['c12'], 'Yeşil Çay', 5, '2', 'https://static.toiimg.com/photo/78092190.cms', ['Yeşil Çay Poşeti', 'Sıcak Su', 'Şeker (isteğe bağlı)'], 5),
  new Food('m29', ['c12'], 'Naneli Çay', 10, '5', 'https://cdn.muhiku.com/blog/wp-content/uploads/2019/09/Zencefil-Bal-ve-Karanfil-%C3%87ay%C4%B1-800x480.jpg', ['Nane Yaprakları', 'Siyah Çay Poşeti', 'Sıcak Su', 'Şeker (isteğe bağlı)'], 10),
  new Food('m30', ['c13'], 'Çilekli Smoothie', 180, '120', 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/blok/d/cilekli-smoothie.webp', ['Taze Çilek', 'Yogurt', 'Bal', 'Buz'], 15),
  new Food('m31', ['c13'], 'Mango-Peynirli Smoothie', 200, '140', 'https://www.beyzayalav.com/wp-content/uploads/2020/11/mago-lassi.jpg', ['Taze Mango', 'Peynir', 'Bal', 'Buz'], 20),
  new Food('m32', ['c13'], 'Avokadolu Smoothie', 220, '150', 'https://i.lezzet.com.tr/images-xxlarge-recipe/avokadolu-smoothie-1b6eea95-7657-42a8-aa41-0b7b5a2e4b08.jpg', ['Taze Avokado', 'Yogurt', 'Bal', 'Buz'], 25)
];

