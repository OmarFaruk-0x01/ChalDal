export type CategoryType = {
    title: string
    imgUrl?: string
    slug: string
    children?: CategoryType[]
}

const Catagories: CategoryType[] = [
  {
    title: 'Ramadan',
    imgUrl:
      'https://chaldn.com/_mpimage/ramadan?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106021&q=low&v=1&m=40&webp=1&alpha=1',
    slug: '/ramadan',
  },
  {
    title: 'Flash Sales',
    imgUrl:
      'https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&m=40&webp=1&alpha=1',
    slug: '/flash-sales',
  },
  {
    title: 'Food',
    imgUrl:
      'https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&q=low&v=1&m=40&webp=1&alpha=1',
      slug: '/grocery',
      children: [
          {
              title: "Fruits & Vegetables",
              slug: "/fruits-vegetables"
          },
          {
              title: 'Cooking',
              slug: '/cooking'
          },
          {
              title: 'Dairy',
              slug: '/dairy',
              children: [
                  {
                      title: 'Butter & Sour Cream',
                      slug: '/butter-sour-cream'
                  }
              ]
          }
    ]
  },
  {
    title: 'Personal Care',
    imgUrl:
      'https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&m=40&webp=1&alpha=1',
    slug: '/personal-care',
    },
    
];
export default Catagories;