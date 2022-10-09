import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { colors } from "theme";
import { Button, FormInput } from "components";
import { useForm } from "react-hook-form";
import { FormTypes } from "./types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const NewRecord = () => {
  const navigate = useNavigate();

  const [enteredData, setEnteredData] = useState<FormTypes>();

  const validationSchema = yup.object({
    nameSurname: yup.string().required("Required"),
    country: yup.string().required("Required"),
    city: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: FormTypes) => setEnteredData(data);

  return (
    <S.Container>
      <S.TopHeader>
        <img src="smallLogo.png" alt="logo"></img>
        <S.BackShowMore
          onClick={() => navigate("/show-more")}
          data-testid="navigateBack"
        >
          <FiArrowLeft
            size={30}
            color={colors.darkGray}
            style={{ cursor: "pointer" }}
          />
          <p>Return to List Page</p>
        </S.BackShowMore>
      </S.TopHeader>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          data-testid="nameSurname"
          label="Name Surname"
          placeholder="Enter name and surname"
          margin="0 0 37px 0"
          error={errors.nameSurname?.message}
          {...register("nameSurname")}
        />
        <FormInput
          data-testid="country"
          label="Country"
          margin="0 0 37px 0"
          placeholder="Enter a country"
          error={errors.country?.message}
          {...register("country")}
        />
        <FormInput
          data-testid="city"
          label="City"
          margin="0 0 37px 0"
          placeholder="Enter a city"
          error={errors.city?.message}
          {...register("city")}
        />
        <FormInput
          data-testid="email"
          label="Email"
          placeholder="Enter a e-mail (abc@xyz.com)"
          error={errors.email?.message}
          {...register("email")}
        />
        <Button type="submit">Add</Button>
      </S.Form>
      {enteredData && (
        <div>
          <p data-testid="enteredData">Entered Data</p>
          <p>Name Surname: {enteredData.nameSurname}</p>
          <p>Country: {enteredData.country}</p>
          <p>City: {enteredData.city}</p>
          <p>Email: {enteredData.email}</p>
        </div>
      )}
    </S.Container>
  );
};

export default NewRecord;