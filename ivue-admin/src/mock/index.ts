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
  // 生成一个随机尺寸的图片地址
  const randomAvatarUrl = `https://placeimg.com/${Mock.mock(
    '@integer(100, 500)'
  )}/${Mock.mock('@integer(100, 500)')}/people`;
  // 可以根据需要添加更多的Mock接口
  Mock.mock('/api/sys/profile', 'get', {
    code: 0,
    data: {
      id: '123sdfsfsdf12321321',
      username: '谢文',
      title: '超级管理员',
      email: '1123.@email.com',
      avatar: randomAvatarUrl,
      'age|18-40': 1,
      role: [
        {
          id: '1',
          title: '超级管理员'
        }
      ],
      permission: {
        menus: [
          'userManage',
          'roleList',
          'permissionList',
          'articleRanking',
          'articleCreate'
        ],
        points: [
          'distributeRole',
          'importUser',
          'removeUser',
          'distributePermission'
        ]
      }
    },
    message: '请求成功'
  });
}
