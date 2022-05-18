import {IUser} from "./user.interface";
import {ICompany} from "./company.interface";

export interface IUserDetails extends IUser {
  phone: string;
  website: string;
  company: ICompany;
}
