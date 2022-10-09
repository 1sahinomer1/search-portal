import { usePagination } from "hooks";

import { PaginationProps } from "./types";

import * as S from "./styles";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  //Sayfa sayısı 0 veya 1den küçükse null dön
  if (currentPage === 0 || (paginationRange && paginationRange.length < 1))
    return null;

  //Aktif olan sayfa sayısını 1 artır
  const onNext = () => onPageChange(currentPage + 1);

  //Aktif olan sayfa sayısını 1 azalt
  const onPrevious = () => onPageChange(currentPage - 1);

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <S.Ul>
      <S.Li
        onClick={() => {
          if (currentPage > 1) onPrevious();
        }}
        disabled={currentPage === 1}
        data-testid="paginatePrevious"
      >
        Previous
      </S.Li>
      {paginationRange &&
        paginationRange.length > 0 &&
        paginationRange.map((pageNumber: any, i: number) => {
          if (pageNumber === "...") {
            return <S.Dots key={i}>&#8230;</S.Dots>;
          } else {
            return (
              <S.Li
                key={i}
                selected={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
                data-testid={`paginateNumber`}
              >
                {pageNumber}
              </S.Li>
            );
          }
        })}
      <S.Li
        disabled={currentPage === lastPage}
        onClick={() => {
          if (currentPage !== lastPage) onNext();
        }}
        data-testid="paginateNext"
      >
        Next
      </S.Li>
    </S.Ul>
  );
};

export default Pagination;
