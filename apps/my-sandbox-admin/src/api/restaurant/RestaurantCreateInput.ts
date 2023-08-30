import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RestaurantCreateInput = {
  ownerId?: UserWhereUniqueInput | null;
};
