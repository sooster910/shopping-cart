import { defaultConfig} from '../defaultConfig'

export const fetchProductsByCategory = async (categoryId = 11, page = 1) => {
    const resp =
      await fetch(`${defaultConfig.productUrl}/${categoryId}/${page}?order=date-desc
  `);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return resp.json();
};

export const fetchProductsByPrefix = async (id) => {
    const resp = await fetch(`${defaultConfig.productUrl}/${id}`);
    return resp.json();
  };
  
// export const fetchAllPage = async (categoryId, page) => {
//   const resp = await fetch(`${DefaultConfig.productUrl}/${Number(
//     categoryId
//   )}/${page}?order=date-desc
//   `);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp.json();
// };
  