import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  restaurants?: RestaurantWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
