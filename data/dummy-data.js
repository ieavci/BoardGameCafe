import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'İtalyan', 'pink'),
  new Category('c2', 'Aperatif', 'darkpink'),
  new Category('c3', 'Hamburger', 'brown'),
  new Category('c4', 'Alman', 'yellow'),
  new Category('c5', 'Diyet', 'blue'),
  new Category('c6', 'Egzotik', 'green'),
  new Category('c7', 'Kahvaltı', 'lightblue'),
  new Category('c8', 'Hint', 'lightgreen'),
];

export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2'],
    'Domates soslu Spagetti',
    240,
    '203',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    [
      '4 Domates',
      '1 Çay Kaşığı Zeytinyağı',
      '2 Soğan',
      '200g Spaghetti',
      'Baharatlar',
      'Peynir',
    ]
  ),
  new Food(
    'm2',
    ['c2'],
    'Tost',
    230,
    '324',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin']
  ),
  new Food(
    'm3',
    ['c3'],
    'Hamburger',
    320,
    '324',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    [
      '150 gr et',
      '2 Dilim Domates',
      '1 Dilim Chedar Peyniri',
      '1 Dilim Soğan',
      'Ketçap',
      'Mayonez',
    ]
  ),
  new Food(
    'm4',
    ['c4'],
    'Tavuk Sote',
    270,
    '203',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    [
      '200 gr Tavuk',
      'Domates',
      'Biber',
      'Fesleğen',
      'Limon',
      'Zeytinyağı',
      'Tuz',
    ]
  ),
  new Food(
    'm5',
    ['c2', 'c5'],
    'Balıklı Salata',
    '350',
    '185',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    [
      'Somon Balığı',
      'Domates',
      'Limon',
      'Salata Sosu',
      'Taze Soğan',
      'Hardal',
      'Zeytin Yağı',
      'Tuz',
    ]
  ),
  new Food(
    'm6',
    ['c6'],
    'Portakallı Muhallebi',
    320,
    '324',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    [
      'Portakal Suyu',
      '200gr Şeker',
      '100gr Yoğurt',
      '200g Krem Şanti',
      'Portakal Dilimleri',
    ]
  ),
  new Food(
    'm7',
    ['c7'],
    'Pankek',
    190,
    '185',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    [
      '3 yemek kaşığı un',
      '1 Tatlı Kaşığı Tuz',
      '1 Tatlı Kaşığı Şeker',
      '2 bardak süt',
      '2 Yumurta',
      '2 Yemek Kaşığı Yağ',
    ]
  ),
  new Food(
    'm8',
    ['c8'],
    'Tavuklu Hint Yemeği',
    180,
    '203',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    [
      '6 Tavuk Butu',
      '2 Soğan',
      '4 Diş Sarımsak',
      '1 Çay Kaşığı Zerdeçal',
      '1 litre Süt',
      'Yarım Litre Krem Şanti',
      'Tuz',
    ]
  ),

  new Food(
    'm10',
    ['c2', 'c5'],
    'Çilekli Yaz Salatası',
    330,
    '185',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    ['Çilek', 'Domates', 'Salatalık', 'Tuz', 'Salata Sosu', 'Zeytin Yağı']
  ),
  new Food(
    'm11',
    ['c1', 'c2', 'c5'],
    'Mantarlı Tavuk Sote',
    '280',
    '203',
    'https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2015/02/24152324/Chicken-Breast-with-Sauteed-Mushrooms.960.jpg',
    [
      '200 gr Tavuk Göğsü',
      '150 gr Mantar',
      '1 Soğan',
      '2 Diş Sarımsak',
      'Tuz',
      'Karabiber',
      'Kırmızı Biber',
      'Zeytinyağı',
    ]
  ),
  new Food(
    'm12',
    ['c3'],
    'Izgara Steak',
    240,
    '389',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Bobby-Grilling-013_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539247827.jpeg',
    [
      '300 gr Dana Biftek',
      'Tuz',
      'Karabiber',
      'Kekik',
      '2 Yemek Kaşığı Zeytinyağı',
    ]
  ),
  new Food(
    'm13',
    ['c4'],
    'Sebzeli Kuzu Güveç',
    220,
    '203',
    'https://mojo.generalmills.com/api/public/content/LZnjv7QNi0Wo2zfvMvBySQ_gmi_hi_res_jpeg.jpeg?v=a5dbca28&t=466b54bb264e48b199fc8e83ef1136b4',
    [
      '400 gr Kuzu Eti',
      'Patates',
      'Havuç',
      'Arpacık Soğan',
      'Sarımsak',
      'Tuz',
      'Karabiber',
      'Kekik',
      'Zeytinyağı',
    ]
  ),
  new Food(
    'm14',
    ['c5'],
    'Kinoa Salatası',
    330,
    '185',
    'https://www.inspiredtaste.net/wp-content/uploads/2023/01/Quinoa-Salad-Recipe-Video.jpg',
    [
      '1 su bardağı Kinoa',
      'Salatalık',
      'Domates',
      'Maydanoz',
      'Fesleğen',
      'Zeytinyağı',
      'Limon Suyu',
      'Tuz',
      'Karabiber',
    ]
  ),
  new Food(
    'm15',
    ['c6'],
    'Çikolatalı Browni',
    220,
    '389',
    'https://i.lezzet.com.tr/images-xxlarge-recipe/bogurtlenli_ve_beyaz_cikolatali_brownie-43572d37-effc-4f1c-add2-eaf596124611.jpg',
    [
      '200 gr Bitter Çikolata',
      '150 gr Tereyağı',
      '3 Yumurta',
      '1 su bardağı Toz Şeker',
      '1 su bardağı Un',
      'Yarım çay kaşığı Tuz',
    ]
  ),
  new Food(
    'm16',
    ['c7'],
    'Krep',
    180,
    'orta kalorili',
    'https://image.hurimg.com/i/hurriyet/75/0x0/5c10b7430f254418d86cee28.jpg',
    [
      '2 su bardağı Un',
      '2 Yumurta',
      '1 su bardağı Süt',
      '1 su bardağı Su',
      '2 yemek kaşığı Sıvı Yağ',
      '1 çay kaşığı Tuz',
    ]
  ),
  new Food(
    'm17',
    ['c8'],
    'Tandoori Tavuk',
    190,
    '203',
    'https://www.allrecipes.com/thmb/ygY1JXP8_IkDSjPPW5VH2dTiMMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg',
    [
      '4 Tavuk Göğsü',
      '1 su bardağı Yoğurt',
      '2 yemek kaşığı Tandoori Baharatı',
      '2 yemek kaşığı Limon Suyu',
      '1 yemek kaşığı Zeytinyağı',
      'Tuz',
      'Karabiber',
      '2 Diş Sarımsak',
    ]
  )
  
];
