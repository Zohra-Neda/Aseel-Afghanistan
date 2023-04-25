const navbarNav = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');
const closeNav = document.getElementById('closeNav');

navbarToggler.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
  closeNav.classList.toggle('fa-bars');
  closeNav.classList.toggle('fa-times');
});

closeNav.addEventListener('click', () => {
  navbarNav.classList.toggle('show');
});

const Shopping = document.getElementById('shopping');
const ShoppingData = [
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg1.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Lapis Gold Plated Earings Brass Dangle Earrings',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Zarin Jewelry offers a unique blend of modern and traditional Afghan styles, featuring handmade bracelets, rings, lockets, and earrings adorned with natural gemstones from Afghanistan. Indulge in the beauty of these exquisite ornaments.',
  },
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg2.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Ethic choker Necklace',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Afghan Jawaher sells traditional and modern jewelry, such as rings, earrings, necklaces, and bracelets. These captivating jewelry pieces are embellished with alluring gemstones such as emeralds, tourmalines, aquamarines, topazes, and lapis lazuli, giving them a charming and lustrous appearance. Shine like a diamond by wearing Afghan Jawaher jewelry.',
  },
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg3.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Ethic choker Necklace',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Banowani Shams creates handmade attire for children and traditional Afghan womens wear appropriate for parties, engagements, weddings, and evening events. The brand embodies the intricate beauty of ancient styles into its designs on natural fabrics such as silk, cotton, georgette, woolen, velvet, and linen, creating the most authentic and quality outfits. Get your style done by wearing Banowani Shams clothes.',
  },
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg4.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Lapis Gold Plated Earings Brass Cubic Drop Dangle Earrings',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Zarin Jewelry offers a unique blend of modern and traditional Afghan styles, featuring handmade bracelets, rings, lockets, and earrings adorned with natural gemstones from Afghanistan. Indulge in the beauty of these exquisite ornaments.',
  },
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg5.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Lapis lazuli Hook Earrings Silver Dangle Earrings',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Noqra Brand designs, creates and produces jewelry items like rings, earrings, necklaces, and bracelets using the most ancient classic jewelry designs with a modern touch. Each piece of jewelry is painstakingly handcrafted using natural gemstones such as lapis, quartz, amethyst, turquoise, and ruby. Adding Noqra Brand jewelry to your wardrobe can improve your look.',
  },
  {
    BorderImage: 'images/image-border.png',
    ImageBorderAlt: 'image-border',
    AseelImage: 'images/aseelimg6.jpg',
    AseelImageAlt: 'aseel-image',
    ItemName: 'Lapis lazuli Ring Square Flat Silver Ring',
    ItemParagraph: 'Made with love in Afghanistan',
    ItemDescription: 'Noqra Brand designs, creates and produces jewelry items like rings, earrings, necklaces, and bracelets using the most ancient classic jewelry designs with a modern touch. Each piece of jewelry is painstakingly handcrafted using natural gemstones such as lapis, quartz, amethyst, turquoise, and ruby. Adding Noqra Brand jewelry to your wardrobe can improve your look.',
  },
];

for (let i = 0; i < ShoppingData.length; i++) {
  const shoppingData = ShoppingData[i];

  const shoppingDiv = document.createElement('div');
  shoppingDiv.classList.add('col-md-6', 'd-flex', 'mt-5', 'shopping-items');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
  shoppingDiv.appendChild(imageContainer);

  const aseelImages = document.createElement('div');
  aseelImages.classList.add('aseel-images');
  imageContainer.appendChild(aseelImages);

  const imageBorder = document.createElement('img');
  imageBorder.classList.add('img-border');
  imageBorder.src = shoppingData.BorderImage;
  imageBorder.alt = shoppingData.AseelImageAlt;
  aseelImages.appendChild(imageBorder);

  const aseelImageContainer = document.createElement('div');
  aseelImageContainer.classList.add('aseel-img-container');
  aseelImages.appendChild(aseelImageContainer);

  const aseelImage = document.createElement('img');
  aseelImage.classList.add('aseel-img');
  aseelImage.src = shoppingData.AseelImage;
  aseelImage.alt = shoppingData.AseelImageAlt;
  aseelImageContainer.appendChild(aseelImage);

  const imageContent = document.createElement('div');
  imageContent.classList.add('img-content', 'd-flex', 'flex-column');
  shoppingDiv.appendChild(imageContent);

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-contaniner', 'd-flex', 'flex-column');
  imageContent.appendChild(textContainer);

  const itemNameDiv = document.createElement('div');
  itemNameDiv.classList.add('item-name');
  textContainer.appendChild(itemNameDiv);

  const h3 = document.createElement('h3');
  h3.textContent = shoppingData.ItemName;
  itemNameDiv.appendChild(h3);

  const itemParagraph = document.createElement('div');
  itemParagraph.classList.add('item-p', 'first-color');
  textContainer.appendChild(itemParagraph);

  const p1 = document.createElement('p');
  p1.textContent = shoppingData.ItemParagraph;
  itemParagraph.appendChild(p1);

  const itemDescriptionDiv = document.createElement('div');
  itemDescriptionDiv.classList.add('item-description');
  textContainer.appendChild(itemDescriptionDiv);

  const p2 = document.createElement('p');
  p2.textContent = shoppingData.ItemDescription;
  itemDescriptionDiv.appendChild(p2);

  Shopping.appendChild(shoppingDiv);
}

const readMoreBtn = document.querySelector('.ReadMoreBtn');
const more = document.querySelector('.more');
const less = document.querySelector('.less');
const shoppingItems = document.querySelectorAll('.shopping-items');

const toggleShoppingItems = () => {
  for (let i = 2; i < shoppingItems.length; i += 1) {
    shoppingItems[i].classList.toggle('d-none');
    shoppingItems[i].classList.toggle('d-flex');
  }
  more.classList.toggle('d-none');
  less.classList.toggle('d-none');
};

if (readMoreBtn) {
  readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleShoppingItems();
  });
}

const showMore = () => {
  const isSmallScreen = window.innerWidth < 786;
  shoppingItems.forEach((item, index) => {
    if (index >= 2) {
      item.classList.toggle('d-none', isSmallScreen);
      item.classList.toggle('d-flex', !isSmallScreen);
    }
  });
  readMoreBtn.classList.remove('d-none');
};

if (readMoreBtn) {
  showMore();
  window.addEventListener('resize', showMore);
}