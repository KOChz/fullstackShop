export interface IType {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITypes {
  count?: number;
  rows?: IType[];
}

export interface IBrand {
  id?: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBrands {
  count?: number;
  rows?: IBrand[];
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  brandId?: number;
  typeId?: number;
  file?: string | Blob;
  brandName?: string;
  typeName?: string;
}

export interface IDevices {
  count?: number;
  rows?: IDevice[];
}

export interface IFiltered {
  typesId: number[];
  brandsId: number[];
}

export interface IFilteredDevices {
  page?: number;
  brandsId?: number[];
  typesId?: number[];
  limit?: number;
}

export interface ISearchedDevices {
  // page: number;
  input: string | number;
  // limit: number;
}

export interface IToolkitActive {
  type: boolean;
  brand: boolean;
}

export interface IAuth {
  email: string;
  password: string;
}

export enum Role {
  user = 'USER',
  admin = 'ADMIN',
}

export interface IAuthResponse {
  email: string;
  id: string;
  role: Role;
}
