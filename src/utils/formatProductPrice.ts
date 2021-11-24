export const formatProductPrice = (price:number) => {
 return new Intl.NumberFormat('ko-KR', {style: 'currency',currency: 'KRW', minimumFractionDigits: 0}).format(price);
}