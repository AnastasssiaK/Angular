import {IUser} from "./user.interface";
import {ICompany} from "./company.interface";
import {IAddress} from "./address.interface";

export interface IUserDetails extends IUser {
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
