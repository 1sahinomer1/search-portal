import { useState } from "react";
import Slider from "react-slick";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { useGetRecords } from "hooks";

import { IRecord } from "hooks/types";

import { Suggestion, SearchInput, Button } from "components";

import { useNavigate } from "react-router-dom";

import { LeftArrow, RightArrow } from "icons";

import * as S from "./styles";
import { searchData } from "utils";
import sliderItems from "constants/sliderItems";

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const { data } = useGetRecords();
  const [filteredData, setFilteredData] = useState<IRecord[]>([]);
  return (
    <S.Container>
      <S.AddNewRecordSection>
        <Button onClick={() => navigate("/new-record")}>Add new record</Button>
      </S.AddNewRecordSection>
      <S.Header>
        <img src="logo.png" alt="logo"></img>
        <p>Search App</p>
      </S.Header>
      <S.SearchSection>
        <S.ContentSearchTitle>Find in records</S.ContentSearchTitle>
        <S.SearchContent>
          <SearchInput
            placeholder="Find in record"
            onChange={({ target: { value } }) => setSearch(value)}
          />
          <Button
            disabled={search.length < 3}
            onClick={() => {
              if (search.length > 2)
                data && setFilteredData(searchData(data, search));
            }}
            margin="0 0 0 12px"
          >
            Search
          </Button>
        </S.SearchContent>
      </S.SearchSection>
      <S.Content>
        <S.ResultContent view={filteredData && filteredData?.length > 0}>
          {filteredData &&
            filteredData?.length > 0 &&
            filteredData.map((record: IRecord, i: number) =>
              i === 3 ? (
                <S.StyledLink to={`show-more/${search}`} key={i} state={search}>
                  Show more...
                </S.StyledLink>
              ) : i < 3 ? (
                <Suggestion record={record} />
              ) : null
            )}
        </S.ResultContent>
      </S.Content>
      <S.CarouselSection isHaveContent={data && data?.length > 0}>
        <S.CarouselTitle>Top News</S.CarouselTitle>
        <S.ArrowLeftContainer>
          <LeftArrow
            onClick={() => {
              console.log(sliderRef);
              sliderRef?.slickPrev();
            }}
            cursor="pointer"
          />
        </S.ArrowLeftContainer>
        <S.ArrowRightContainer>
          <RightArrow onClick={() => sliderRef?.slickNext()} cursor="pointer" />
        </S.ArrowRightContainer>
        <Slider ref={(ref) => setSliderRef(ref)} {...settings}>
          {sliderItems.map((item) => (
            <S.CarouselItem key={item.id}>
              <img src={item.path} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </S.CarouselItem>
          ))}
        </Slider>
      </S.CarouselSection>

      <S.Footer>
        <S.LeftSection>
          <img src="footerImage.png" alt="" />
          <S.InfoSection>
            <>
              <S.ContactTitle>İletişim</S.ContactTitle>
              <S.Adress>
                Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
                Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
                Email: bilgi@tesodev.com
              </S.Adress>
            </>
            <S.Email>Email : bilgi@tesodev.com</S.Email>
          </S.InfoSection>
        </S.LeftSection>
        <S.RightSection>
          <MapContainer
            center={[41.01988155591537, 28.890795291519805]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.01988155591537, 28.890795291519805]}></Marker>
          </MapContainer>
        </S.RightSection>
      </S.Footer>
    </S.Container>
  );
};

export default Home;
