import { useMemo } from "react";

import { range } from "utils";

type PaginationProps = {
  totalCount: number; //Toplam veri sayısı
  pageSize: number; // Sayfada gösterilecek item sayısı
  siblingCount?: number; //Aktif sayfa numarasının sol ve sağında gösterilecek sayfa numarası sayısı
  currentPage: number; //Aktif sayfa
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const DOTS = "...";
    //Toplam Veri sayısı / Sayfada gösterilecek item sayısı'nı bir üst sayıya yuvarlayarak toplam sayfa sayısını bulur.
    const totalPageCount = Math.ceil(totalCount / pageSize);
    //Sayfa sayısı siblingCount + firstPage + lastPage + currentPage + 2*Dots olarak belirleniyor
    const totalPageNumbers = siblingCount + 5;

    // Sayfa sayısı göstermek istediğimiz sayfa sayısından az ise sayfa sayısı kadar dizi oluşturur.
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    //Sol tarafta kaçtane sayfa numarası var
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);

    //Kaçıncı indisteyim
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    //Sol tarafta 2den fazla sayfa numarası varsa sol tarafın noktaları gösterilsin
    const shouldShowLeftDots = leftSiblingIndex > 1;

    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    //İlk sayfanın indexi 1 ile başlasın
    const firstPageIndex = 1;
    //Son sayfanın indexi toplam sayfa sayısı ile başlasın
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 1 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [
        ...leftRange,
        DOTS,
        totalPageCount - 2,
        totalPageCount - 1,
        totalPageCount,
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
export default usePagination;
