/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx80d3e0c81ca7a9a9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '3d956ebea94d5110cfc8458f2433aa9d',

  PROVINCE: '山西',
  CITY: '晋中',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ox2PX5iXhaqJ0gQKryoFBKat-YqA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'YGJhA3cW55d9ytpraMCyjiwr5P3mGsHCRJyb_zGZtTc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '4-8',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '02-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '2002', date: '04-8',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-31',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-9' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'aQn0lH-gpNykh7_WlrRjrvraLr56HEmzrxGJxRQF_4M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ox2PX5mOUk99r0oSevd0Rp6K0lCk',
    }
  ],

}

module.exports = USER_CONFIG

