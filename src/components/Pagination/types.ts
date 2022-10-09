export type PaginationProps = {
  totalCount: number; //Toplam veri sayısı
  pageSize: number; // Sayfada gösterilecek item sayısı
  siblingCount?: number; //Aktif sayfa numarasının sol ve sağında gösterilecek sayfa numarası sayısı
  currentPage: number; //Aktif sayfa
  onPageChange: (page: number) => void;
};
