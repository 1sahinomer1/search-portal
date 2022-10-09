import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  SkeletonRecords,
  ListItem,
  Button,
  SearchInput,
  Pagination,
} from "components";

import { OrderIcon } from "icons";

import { useGetRecords } from "hooks";
import { IRecord } from "hooks/types";

import { searchData, orderData } from "utils";

import * as S from "./styles";

let PageSize = 5;

const ShowMore = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(params.search ? params.search : "");
  const [currentPage, setCurrentPage] = useState(1);

  const [sortOrder, setSortOrder] = useState("");
  const [isViewDropdown, setIsViewDropdown] = useState(false);
  const { data, isFetching } = useGetRecords();
  const [filteredData, setFilteredData] = useState<IRecord[] | null>([]);

  useEffect(() => {
    data && setFilteredData(orderData(searchData(data, search), sortOrder));
    setCurrentPage(1);
  }, [sortOrder]);

  useEffect(() => {
    data && setFilteredData(searchData(data, search));
  }, [data]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData && filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  return (
    <div>
      <S.TopHeader>
        <img src="smallLogo.png" alt="logo"></img>

        <S.TopMid>
          <SearchInput
            value={search && search}
            onChange={({ target: { value } }) => setSearch(value)}
          />
          <Button
            disabled={search && (search?.length < 3 || search === "")}
            onClick={() => {
              data && setFilteredData(searchData(data, search));
              setCurrentPage(1);
            }}
            data-testid="searchButton"
          >
            Search
          </Button>
        </S.TopMid>
        <Button
          onClick={() => navigate("/new-record")}
          data-testid="navigateNewRecord"
        >
          Add new record
        </Button>
      </S.TopHeader>
      <S.Content>
        <S.RecordContaner>
          {isFetching ? (
            [0, 1, 2, 3, 4].map((skeleton, i) => <SkeletonRecords key={i} />)
          ) : currentTableData && currentTableData.length > 0 ? (
            currentTableData.map((item: any, i: number) => (
              <div key={i}>
                <ListItem item={item} />
                {i !== 4 && <hr />}
              </div>
            ))
          ) : (
            <p>Sonuç bulunamadı.</p>
          )}
        </S.RecordContaner>
        {currentTableData && currentTableData.length > 0 && (
          <S.OrderContainer>
            <S.OrderButton
              onClick={() => setIsViewDropdown((old) => !old)}
              data-testid="isViewDropdown"
            >
              <OrderIcon />
              <p data-testid="orderText">Order by</p>
            </S.OrderButton>
            {isViewDropdown && (
              <S.OrderContent>
                <S.OrderItem
                  selected={sortOrder === "name-ascending"}
                  onClick={() => {
                    setSortOrder("name-ascending");
                    setIsViewDropdown(false);
                  }}
                  data-testid="orderNameAscending"
                >
                  Name ascending
                </S.OrderItem>
                <S.OrderItem
                  selected={sortOrder === "name-descending"}
                  onClick={() => {
                    setSortOrder("name-descending");
                    setIsViewDropdown(false);
                  }}
                  data-testid="orderNameDescending"
                >
                  Name descending
                </S.OrderItem>
                <S.OrderItem
                  selected={sortOrder === "year-ascending"}
                  onClick={() => {
                    setSortOrder("year-ascending");
                    setIsViewDropdown(false);
                  }}
                  data-testid="orderYearAscending"
                >
                  Year ascending
                </S.OrderItem>
                <S.OrderItem
                  selected={sortOrder === "year-descending"}
                  onClick={() => {
                    setSortOrder("year-descending");
                    setIsViewDropdown(false);
                  }}
                  data-testid="orderYearDescending"
                >
                  Year descending
                </S.OrderItem>
              </S.OrderContent>
            )}
          </S.OrderContainer>
        )}
      </S.Content>
      <S.PaginationContainer>
        <Pagination
          currentPage={currentPage}
          totalCount={
            filteredData && filteredData.length > 0 ? filteredData.length : 0
          }
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </S.PaginationContainer>
    </div>
  );
};

export default ShowMore;
