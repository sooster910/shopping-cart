export const isDeepEqual = (obj_A: {}, obj_B: {}):boolean => {
    if(!Object.keys(obj_A).length || !Object.keys(obj_B).length) throw new Error( `object should have at least 1 key,value pair`)
    return JSON.stringify(obj_A)=== JSON.stringify(obj_B);
}

export const validateOptions = (options: {}): string[]|string => {
    if (!Object.keys(options).length) throw new Error(`options object should have at least 1 key,value pair` )

   return  Object.entries(options)
      .filter((option) => !option[1])
      .map((option) => option[0]);
  };