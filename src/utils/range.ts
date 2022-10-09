//Gönderilen başlangıç ve bitiş değerine göre bir dizi oluşturur. Örn: 1, 5 => [1, 2, 3, 4, 5]

const range = (start: number, end: number) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};
export default range;
