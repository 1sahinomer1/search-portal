export type PaginationProps = {
  totalCount: number; //Toplam veri sayısı
  currentPage: number; // Sayfada gösterilecek item sayısı
  setCurrentPage: (page: number) => void;
};
