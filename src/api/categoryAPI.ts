export const fetchCategories = async () => {
    const resp = await fetch("https://mock-api.ssomee.com/categories");
    if (!resp.ok) {
        throw new Error(resp.statusText);
      }
    
      return resp.json();
  };