/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// import React from "react";
// import Translate, {translate} from '@docusaurus/Translate';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */



  tutorialSidebar: [
    // {
    //   type: 'category',  //公告中心
    //   label: 'Announcement',
    //   items: [
    //
    //   ],
    // },
    {
      type: 'category',  //新手指南
      label: 'Beginner Guide',
      items: [
        'beginner/register', // 注册账号
        'beginner/TfilPoint', // TFIL积分
        'beginner/IPFS', // IPFS去中心化存储
      ],
    },
    {
      type: 'category', //伯爵矿池
      label: 'Earl Pool',
      items: [
        'business/PointPool',  // 积分宝
        'business/VipNode',  // VIP节点
        'business/FilPower',  // 官方算力
        'business/ZettaPool',  // ZettaPool
        'business/MiningTreasure',  // 挖矿宝
      ],
    },
    {
      type: 'category', // 业务中心
      label: 'Business Center',
      items: [
        'business/PoSPool',  // 存币宝
      ],
    },
    {
      type: 'category', // 常见问题
      label: 'FAQ',
      items: [

      ],
    },
    {
      type: 'category', // 条款说明
      label: 'Term Description',
      items: [
        'TermsDescription/Agreement',
        'TermsDescription/Disclaimer', // 免责声明
      ],
    },
    {
      type: 'category', // 关于我们
      label: 'About',
      items: [
        'about/TbonusPro', // TP介绍
        'about/ContactUs', // TP介绍
      ],
    },
  ],
};

module.exports = sidebars;
