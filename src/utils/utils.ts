import { Users, User } from "../constants/Interfaces/UserListInterface";
export const findCurUser = (
  id: string,
  customers: Users,
  start?: number,
  end?: number
): User => {
  let st = start || 0;
  let en = end || customers.length - 1;
  let middle = Math.floor((st + en) / 2);

  if (customers[middle].id === id) {
    return customers[middle];
  } else if (customers[middle].email < id) {
    return findCurUser(id, customers, middle + 1, end);
  } else {
    return findCurUser(id, customers, middle, middle - 1);
  }
};
