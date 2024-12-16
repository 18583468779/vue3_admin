// 登录表单类型
export interface FormDataType {
  username: string;
  password: string;
}

// 所有响应类型处理
export interface ResponseType<T> {
  code: number;
  data: T;
  message: string;
}

// 用户信息的类型
export interface UserInfoType {
  age: number;
  avatar: string;
  email: string;
  id: string;
  title: string;
  username: string;
  permission: {
    menus: Array<string>;
    points: Array<string>;
  };
  roles: Array<any>;
}
