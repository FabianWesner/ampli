import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RestaurantWhereInput = {
  id?: StringFilter;
  ownerId?: UserWhereUniqueInput;
};
