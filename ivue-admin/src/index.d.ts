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
