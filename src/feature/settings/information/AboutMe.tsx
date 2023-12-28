import Input from "@/components/common/Input";
import SingleSelect from "@/components/common/SingleSelect";
import { Divider } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Noto_Color_Emoji } from "next/font/google";
import React, { useMemo } from "react";
import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

const countryFont = Noto_Color_Emoji({ weight: "400", subsets: ["emoji"] });

type SettingProps = {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  watch: UseFormWatch<FieldValues>;
};

type Country = {
  name: string;
  unicodeFlag: string;
  cities: string[];
};

type CountryWithFlagResponse = {
  error: boolean;
  msg: string;
  data: Country[];
};

const AboutMe: React.FC<SettingProps> = ({ register, control, watch }) => {
  const { isLoading: isCountryLoading, data: countries } =
    useQuery<CountryWithFlagResponse>({
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
    return countries?.data
      .find((country) => country.name === watch("country"))
      ?.cities.map((city) => {
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
          register={register("phoneNumber")}
          label="Phone Number"
          placeholder="Enter your phone number"
          required
          type="number"
          inputProps={{ inputMode: "tel" }}
        />
        <SingleSelect
          isLoading={isCountryLoading}
          options={countryOptions}
          control={control}
          registerName="country"
          label="Country"
          placeholder="Select your country"
          required
        />
        <SingleSelect
          isDisabled={!watch("country")}
          options={cityOptions || []}
          control={control}
          registerName="city"
          label="City"
          placeholder="Select your city"
          required
        />
        <Input
          isDisabled={!watch("city")}
          register={register("address")}
          label="Address"
          placeholder="Enter your address"
          required
        />
        <Input
          register={register("role")}
          label="Role"
          placeholder="Enter your work role"
          required
        />
        <Input
          register={register("shortDescription")}
          label="Short description"
          multiline
          rows={3}
          placeholder="Enter something about you"
        />
        <Input
          register={register("description")}
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
