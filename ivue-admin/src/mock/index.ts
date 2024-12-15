// src/mock/index.ts
import Mock from 'mockjs';

export default function setupMock() {
  Mock.mock('/api/user', 'get', {
    code: 0,
    data: {
      id: '@id',
      name: '@name',
      email: '@email',
      'age|18-40': 1
    },
    message: '请求成功'
  });
  const randomToken =
    Mock.mock(/[a-z0-9]{32}/).toString() +
    '.' +
    Mock.mock(/[a-z0-9]{32}/).toString() +
    '.' +
    Mock.mock(/[a-z0-9]{32}/).toString();
  Mock.mock('/api/sys/login', 'post', {
    code: 0,
    data: {
      token: randomToken
    },
    message: '登录成功'
  });

  // 可以根据需要添加更多的Mock接口
}
