import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RestaurantUpdateInput = {
  ownerId?: UserWhereUniqueInput | null;
};
