import { User } from "../user/User";

export type Restaurant = {
  createdAt: Date;
  id: string;
  ownerId?: User | null;
  updatedAt: Date;
};
