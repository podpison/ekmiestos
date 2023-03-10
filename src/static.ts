export const foundationYear = 1993;
export const currentYear = new Date().getFullYear();

export const navLinks = [
  {
    name: 'Каталог',
    to: 'catalog',
    hoverItems: [
      {
        name: 'Диваны',
        to: 'sofas'
      },
      {
        name: 'Кресла',
        to: 'armchairs'
      },
      {
        name: 'Стулья',
        to: 'chairs'
      },
      {
        name: 'Кровати',
        to: 'beds'
      },
      {
        name: 'Матрасы',
        to: 'mattresses'
      },
      {
        name: 'Пуфы',
        to: 'poufs'
      },
      {
        name: 'Эксклюзивная мебель',
        to: 'exclusiveFurniture'
      },
      {
        name: '2D-3D модели',
        to: '2D-3DModels'
      },
    ]
  },
  {
    name: 'Индивидуальная мебель',
    to: 'individualFurniture',
  },
  {
    name: 'Контакты',
    to: 'contacts',
  },
  {
    name: 'О компании',
    to: 'aboutCompany',
  },
];
export type NavLinkType = typeof navLinks[0];