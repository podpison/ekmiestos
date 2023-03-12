import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api";

export type ProductCategoryItemType = {
  img: string
  category: string
  price: string
  name: string
  id: number
}

export type ProductCategoryType = {
  category: string
  categoryImg: string
  isNew?: boolean
  products: ProductCategoryItemType[]
}

export type MainPageHeroItemType = string;

const initialState = {
  productCategories: [
    {
      category: 'Диваны',
      categoryImg: 'https://i.postimg.cc/RCdFPHLm/sofa.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 0,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          isNew: true,
          id: 1,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 2,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 3,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 4,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          isNew: true,
          id: 5,
        },
      ]
    },
    {
      category: 'Стулья',
      categoryImg: 'https://i.postimg.cc/dVbt7mw2/chair.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 6,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 7,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 8,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 9,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          isNew: true,
          id: 10
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 11,
        },
      ]
    },
    {
      category: 'Кресла',
      categoryImg: 'https://i.postimg.cc/Y0dCj5C0/armchair.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 12,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          isNew: true,
          name: 'Martin',
          id: 13,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 14,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 15,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 16,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 17,
        },
      ]
    },
    {
      category: 'Кровати',
      categoryImg: 'https://i.postimg.cc/j5Q5YwVz/bed.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          isNew: true,
          name: 'ALBA',
          id: 19,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          isNew: true,
          name: 'Martin',
          id: 19,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 20,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 21,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 22,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 23,
        },
      ]
    },
    {
      category: 'Матрасы',
      categoryImg: 'https://i.postimg.cc/Qd9dxnGN/mattress.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 24,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 25,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 26,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 27,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 28,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 29,
        },
      ]
    },
    {
      category: 'Пуфы',
      categoryImg: 'https://i.postimg.cc/c4JJPLFn/pouf.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 0,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 30,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 31,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 32,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 33,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 34,
        },
      ]
    },
    {
      category: 'Эксклюзивная мебель',
      categoryImg: 'https://i.postimg.cc/xTFdQVZF/exclusive-Furniture.webp',
      products: [
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 35,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 36,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 37,
        },
        {
          img: 'https://i.postimg.cc/9fvxWbrv/1.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Martin',
          id: 38,
        },
        {
          img: 'https://i.postimg.cc/MKbgdCvX/2.png',
          category: 'category',
          price: '15200 UAH',
          name: 'Luara',
          id: 39,
        },
        {
          img: 'https://i.postimg.cc/s2B6dqDY/0.png',
          category: 'category',
          price: '15200 UAH',
          name: 'ALBA',
          id: 40,
        },
      ]
    },
  ],
  mainPageHeroitems: [
    'https://i.postimg.cc/D0JD96RR/1.png',
    'https://i.postimg.cc/52SxK9BL/2.png',
    'https://i.postimg.cc/yNf7BfrN/3.png',
  ],
};

export type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}

const setStaticItems = createAction<SetStaticItemsType>('static/setItems');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;

    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});