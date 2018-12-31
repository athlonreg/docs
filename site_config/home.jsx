import React from 'react';

export default {
  'zh-cn': {
    brand: {
      brandName: '自动化持续集成平台',
      briefIntroduction: '本系统用于项目开发流程，持续化的自动分析代码、执行测试和软件构建！',
      buttons: [
        {
          text: '立即开始',
          link: '/zh-cn/docs/CAS-5-3-4-install-and-deploy.html',
          type: 'primary',
        },
        {
          text: '查看Github',
          link: 'https://github.com/athlonreg',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: '自动化持续集成平台',
      desc: '本系统用于项目开发流程，持续化的自动分析代码、执行测试和软件构建！',
      img: '/img/architecture.png',
    },
    features: {
      title: '特性一览',
      list: [
        {
          img: '/img/feature_transpart.png',
          title: '特性',
          content: '特性1的简单概括',
        },
      ],
    },
    start: {
      title: '快速开始',
      desc: '简单描述',
      img: '/img/quick_start.png',
      button: {
        text: '阅读更多',
        link: '/zh-cn/docs/CAS-5-3-4-install-and-deploy.html',
      },
    },
    users: {
      title: '用户',
      desc: <span>简单描述</span>,
      list: [
        '/img/users_alibaba.png',
      ],
    },
  },
  'en-us': {
    brand: {
      brandName: '自动化持续集成平台',
      briefIntroduction: '本系统用于项目开发流程，持续化的自动分析代码、执行测试和软件构建！',
      buttons: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/CAS-5-3-4-install-and-deploy.html',
          type: 'primary',
        },
        {
          text: 'View on Github',
          link: 'https://github.com/athlonreg',
          type: 'normal',
        },
      ],
    },
    introduction: {
      title: 'introduction title',
      desc: 'some introduction of your product',
      img: '/img/architecture.png',
    },
    features: {
      title: 'Feature List',
      list: [
        {
          img: '/img/feature_maintenance.png',
          title: 'feature',
          content: 'feature description',
        },
      ]
    },
    start: {
      title: 'Quick start',
      desc: 'some description text',
      img: '/img/quick_start.png',
      button: {
        text: 'READ MORE',
        link: '/en-us/docs/CAS-5-3-4-install-and-deploy.html',
      },
    },
    users: {
      title: 'users',
      desc: <span>some description</span>,
      list: [
        '/img/users_alibaba.png',
      ],
    },
  },
};
