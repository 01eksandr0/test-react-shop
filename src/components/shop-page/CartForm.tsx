import { useState } from "react";
import styled from "styled-components";
import { FaApplePay } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { useForm, Controller } from "react-hook-form";
import { TextField, MenuItem, Snackbar, Alert } from "@mui/material";
import InputMask from "react-input-mask";
import { useShopStore } from "../../stores/products";

const FormContainer = styled.div`
  padding: 15px 20px;
  background-color: #004832;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  @media screen and (min-width: 1440px) {
    width: 400px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 30px;
    padding: 60px;
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
`;

const Spliter = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 1px;
  margin-top: 26px;
  margin-bottom: 24px;
`;

const FormSubtitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

const FormIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

const CustomInput = styled(TextField)`
  & > div {
    border-radius: 30px;
    border: 1px solid #fff !important;
    height: 48px;
  }

  & input::placeholder {
    color: #fff !important;
  }
  & svg {
    fill: #fff;
  }
`;

const StyledButton = styled.button`
  display: block;
  padding: 14px 20px;
  width: 100%;
  margin-top: 38px;
  background-color: #ffd012;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms linear;
  &:hover {
    background-color: #ffffff;
  }
`;

const CartForm = () => {
  const cleareCart = useShopStore((s) => s.removeAllCart);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      expirationMonth: "Month",
      expirationYear: "Year",
      securityCode: "",
    },
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = () => {
    cleareCart();
    setOpenSnackbar(true);
  };

  return (
    <FormContainer>
      <FormTitle>Card details</FormTitle>
      <Spliter></Spliter>
      <FormSubtitle>Select payment method</FormSubtitle>
      <FormIconsContainer>
        <img src="/assets/icons/mastercard.svg" width={64} height={39} />
        <FaApplePay size={64} />
        <RiVisaLine size={64} />
      </FormIconsContainer>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInputContainer>
          <StyledLabel htmlFor="nameOnCard">Name on card</StyledLabel>
          <Controller
            name="nameOnCard"
            control={control}
            rules={{ required: "Name on card is required" }}
            render={({ field, fieldState }) => (
              <CustomInput
                {...field}
                placeholder="Enter name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  style: { backgroundColor: "transparent", color: "white" },
                }}
              />
            )}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor="cardNumber">Card number</StyledLabel>
          <Controller
            name="cardNumber"
            control={control}
            rules={{
              required: "Card number is required",
            }}
            render={({ field, fieldState }) => (
              <InputMask
                mask="9999 9999 9999 9999"
                value={field.value}
                onChange={field.onChange}
              >
                {(inputProps: any) => (
                  <CustomInput
                    {...inputProps}
                    placeholder="0000 0000 0000 0000"
                    variant="outlined"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      style: { backgroundColor: "transparent", color: "white" },
                    }}
                  />
                )}
              </InputMask>
            )}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel>Card expiration</StyledLabel>
          <div style={{ display: "flex", gap: "10px" }}>
            <Controller
              name="expirationMonth"
              control={control}
              rules={{ required: "Month is required" }}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  select
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputProps={{
                    style: { backgroundColor: "transparent", color: "white" },
                  }}
                >
                  <MenuItem value="Month" disabled>
                    Month
                  </MenuItem>
                  {[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ].map((month) => (
                    <MenuItem key={month} value={month}>
                      {month}
                    </MenuItem>
                  ))}
                </CustomInput>
              )}
            />

            <Controller
              name="expirationYear"
              control={control}
              rules={{ required: "Year is required" }}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  select
                  variant="outlined"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputProps={{
                    style: { backgroundColor: "transparent", color: "white" },
                  }}
                >
                  {" "}
                  <MenuItem value="Year" disabled>
                    Year
                  </MenuItem>
                  {Array.from(
                    { length: 10 },
                    (_, i) => new Date().getFullYear() + i
                  ).map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </CustomInput>
              )}
            />
          </div>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledLabel htmlFor="securityCode">Card Security Code</StyledLabel>
          <Controller
            name="securityCode"
            control={control}
            rules={{
              required: "Security code is required",
              pattern: {
                value: /^\d{3,4}$/,
                message: "Security code must be 3 or 4 digits",
              },
            }}
            render={({ field, fieldState }) => (
              <CustomInput
                {...field}
                placeholder="Code"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                  style: { backgroundColor: "transparent", color: "white" },
                }}
              />
            )}
          />
        </StyledInputContainer>

        <StyledButton type="submit">Continue</StyledButton>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Order successfully placed!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

export default CartForm;
