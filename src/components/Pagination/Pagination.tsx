import { usePagination } from "hooks";

import { PaginationProps } from "./types";

import * as S from "./styles";

const Pagination = ({
  totalCount,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const paginate = usePagination({
    totalCount,
    currentPage,
    setCurrentPage,
  });

  const renderPage = (page: any) => {
    if (page === "...") {
      return <S.Dots>...</S.Dots>;
    }
    return (
      <S.Li
        selected={page === currentPage}
        onClick={() => paginate && paginate.changePage(page)}
      >
        {page}
      </S.Li>
    );
  };
  return (
    <S.MultiPageCount>
      <S.Li onClick={() => paginate && paginate.pageBack()}>Previous</S.Li>
      <S.Ul>
        {paginate && paginate.pages.map((page: any) => <>{renderPage(page)}</>)}
      </S.Ul>
      <S.Li onClick={() => paginate && paginate.pageForward()}>Next</S.Li>
    </S.MultiPageCount>
  );
};

export default Pagination;
