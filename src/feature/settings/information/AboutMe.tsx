import Input from "@/components/common/Input";
import SingleSelect from "@/components/common/SingleSelect";
import { Divider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Noto_Color_Emoji } from "next/font/google";
import React, { useMemo } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormTrigger,
  UseFormWatch,
} from "react-hook-form";

const countryFont = Noto_Color_Emoji({ weight: "400", subsets: ["emoji"] });

type SettingProps = {
  control: Control<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
};

type Country = {
  name: string;
  unicodeFlag: string;
  cities: string[];
};

type CountryResponse = {
  error: boolean;
  msg: string;
  data: Country[];
};

const AboutMe: React.FC<SettingProps> = ({
  control,
  watch,
  errors,
  trigger,
}) => {
  const { isLoading: isCountryLoading, data: countries } =
    useQuery<CountryResponse>({
      queryKey: ["countries"],
      queryFn: () =>
        fetch(
          "https://countriesnow.space/api/v0.1/countries/info?returns=cities,unicodeFlag"
        ).then((res) => res.json()),
    });

  const countryOptions = useMemo(() => {
    return (countries?.data || [])
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((country) => {
        return {
          value: country.name,
          label: (
            <div className="flex gap-2">
              <span className={countryFont.className}>
                {country.unicodeFlag}
              </span>
              {country.name}
            </div>
          ),
        };
      });
  }, [countries]);

  const cityOptions = useMemo(() => {
    const selectedCountry = (countries?.data || []).find(
      (country) => country.name === watch("country")
    );

    if (!selectedCountry || !selectedCountry.cities) return [];

    return selectedCountry.cities.map((city) => {
      return {
        value: city,
        label: city,
      };
    });
  }, [countries, watch("country")]);

  return (
    <div className="w-full">
      <h3 className="my-4">About Me</h3>
      <Divider />
      <div className="w-full py-8 flex flex-col gap-4">
        <Input
          control={control}
          registerName="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number"
          required
          type="number"
          inputProps={{ inputMode: "tel" }}
          errors={errors}
        />
        <SingleSelect
          isLoading={isCountryLoading}
          options={countryOptions}
          control={control}
          registerName="country"
          label="Country"
          placeholder="Select your country"
          required
          errors={errors}
        />
        <SingleSelect
          isDisabled={!watch("country")}
          options={cityOptions}
          control={control}
          registerName="city"
          label="City"
          placeholder="Select your city"
          required
          errors={errors}
        />
        <Input
          isDisabled={!watch("city")}
          control={control}
          registerName="address"
          label="Address"
          placeholder="Enter your address"
        />
        <Input
          control={control}
          registerName="role"
          label="Role"
          placeholder="Enter your work role"
          required
          errors={errors}
        />
        <Input
          control={control}
          registerName="shortDescription"
          label="Short description"
          multiline
          rows={3}
          placeholder="Enter something about you"
        />
        <Input
          control={control}
          registerName="description"
          label="Description"
          multiline
          rows={5}
          placeholder="Enter something about you"
        />
      </div>
    </div>
  );
};

export default AboutMe;
