import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
