type PaginationProps = {
  totalCount: number; //Toplam veri sayısı
  itemsPerPage: number; // Sayfada gösterilecek item sayısı
  currentPage: number; //Aktif sayfa
  setCurrentPage: (page: number) => void; //Sayfa değişimi
};

//İçerisine sayı yada ... gelebilir.
type Pages = number | string;

const usePagination = ({
  totalCount,
  itemsPerPage = 5,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  let pages: Pages[] = [];
  //Son sayfayı alır
  const getLastPage = () => pages[pages.length - 1];

  //Sayfa değiştirme işlemini gerçekleştirir.
  const changePage = (page: any) => setCurrentPage(page);

  const pageBack = () => {
    //Sayfa sayısı 1 ise geri dönme işlemi gerçekleştirilmez.
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const pageForward = () => {
    //Son sayfaya gelindiğinde ileri gitme işlemi gerçekleştirilmez.
    if (currentPage === getLastPage()) return;
    setCurrentPage(currentPage + 1);
  };

  //Math abs her zaman mutlak değer döndürür
  //Math ceil her zaman bir üste değer döndürür
  const pageListLength = Math.ceil(Math.abs(totalCount / itemsPerPage)) || 1;
  //Eğer sayfa sayısı 8den az ise
  if (pageListLength <= 8) {
    //8 e kadar direkt tüm sayfaları oluşturur
    // [1,2,3,4,5,6,7,8]
    pages = Array.from(Array(pageListLength), (_, index) => index + 1);
    return { pages, changePage, pageBack, pageForward };
  }
  pages.push(1);

  if (currentPage < 3) {
    //Sayfa sayısı 3'den küçükse daha fazlasını ... ile göster
    pages.push(2, 3, "...", pageListLength - 2, pageListLength - 1);
  } else if (currentPage === 3) {
    pages.push(2, 3, 4, "...", pageListLength - 2, pageListLength - 1);
  } else if (currentPage >= 4 && currentPage <= pageListLength - 3) {
    pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
  } else {
    pages.push(
      2,
      3,
      "...",
      pageListLength - 3,
      pageListLength - 2,
      pageListLength - 1
    );
  }

  pages.push(pageListLength);
  return { pages, currentPage, changePage, pageBack, pageForward };
};
export default usePagination;
