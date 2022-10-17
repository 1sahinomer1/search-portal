type PaginationProps = {
  totalCount: number; //Toplam veri sayısı
  itemsPerPage: number; // Sayfada gösterilecek item sayısı
  currentPage: number; //Aktif sayfa
};

const usePagination = ({
  totalCount = 100,
  itemsPerPage = 5,
  currentPage,
  setCurrentPage,
}: any) => {
  let pages: any[] = [];
  const getLastPage = () => {
    return pages[pages.length - 1];
  };
  const changePage = (page: any) => {
    setCurrentPage(page);
  };
  const pageBack = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const pageForward = () => {
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
    return;
  }
  pages.push(1);
  if (currentPage < 5) {
    //Sayfa sayısı 5'den küçükse daha fazlasını ... ile göster
    pages.push(2, 3, 4, 5, "...");
  } else if (currentPage >= 5 && currentPage <= pageListLength - 4) {
    //aktif olan sayfa sayısı 5 den büyükse ve sayfa sayısının 4 eksiği aktif sayfadan büyükse
    pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
  } else {
    pages.push(
      "...",
      pageListLength - 4,
      pageListLength - 3,
      pageListLength - 2,
      pageListLength - 1
    );
  }
  pages.push(pageListLength);
  return { pages, currentPage, changePage, pageBack, pageForward };
};
export default usePagination;
