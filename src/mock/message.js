
let datastr = "{\"resultCode\":\"0\",\"message\":\"\",\"obj\":null,\"msgList\":[{\"msgId\":\"04854adf94084910bf0992ab41670376\",\"userId\":\"27ade88dd2e24c269fbf07005bb21337\",\"areaId\":null,\"pushType\":\"P2P\",\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"VEHICLE_AUTHEN_PASS\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆认证成功\",\"msgContent\":\"{\\\"content\\\":\\\"您的粤-C755KG认证成功，感谢使用捷停车APP\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511949705000,\"planPushTime\":null,\"actualPushTime\":null,\"pushStatus\":\"UNPUSH\",\"source\":null,\"summary\":null,\"imageUrl\":null,\"isRead\":\"1\",\"areaIds\":null},{\"msgId\":\"ca7e84010460451896456cd8861b76b5\",\"userId\":null,\"areaId\":null,\"pushType\":\"P2P\",\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"C_DK_OUTPARK_NOT_OPEN\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆出场通知\",\"msgContent\":\"{\\\"content\\\":\\\"尊敬的捷停车会员，一路平安！\\\\n车牌号：粤-B0X1S9\\\\n停车场：jsds_1120\\\\n停车费用：0.01元（支付：0.01元，优惠：0.0元）\\\\n入场时间：2017-11-27 15:34:42\\\\n出场时间：2017-11-27 15:43:15\\\\n开通自动缴费，通行快人一步，出场自动付停车费。\\\",\\\"carId\\\":\\\"6c6055aec8ce4daa93f382f1108e7a60\\\",\\\"channelId\\\":\\\"ZCB,ZFB,\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511768564000,\"planPushTime\":1511768564000,\"actualPushTime\":null,\"pushStatus\":null,\"source\":\"CLOUD\",\"summary\":null,\"imageUrl\":null,\"isRead\":\"1\",\"areaIds\":null},{\"msgId\":\"73bc104c75b342cb91762409c788fa9f\",\"userId\":null,\"areaId\":null,\"pushType\":\"P2P\",\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"C_DK_INPARK_NOT_ALLOW\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆入场通知\",\"msgContent\":\"{\\\"content\\\":\\\"尊敬的捷停车会员，欢迎光临！\\\\n车牌号：粤-C799KG\\\\n停车场：jsds_1120\\\\n入场时间：2017-11-23 11:02:05\\\\n捷停车，让停车场更便捷。\\\",\\\"param\\\":\\\"key=880085202558012,20171120,粤-C799KG,\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511406091000,\"planPushTime\":1511406091000,\"actualPushTime\":null,\"pushStatus\":null,\"source\":\"CLOUD\",\"summary\":null,\"imageUrl\":null,\"isRead\":\"0\",\"areaIds\":null},{\"msgId\":\"c1bc8269f25744bb876c31b89508685a\",\"userId\":null,\"areaId\":null,\"pushType\":null,\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"VEHICLE_AUTHEN_PASS\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆认证成功通知\",\"msgContent\":\"{\\\"content\\\":\\\"车辆认证成功\\\\n11月22日\\\\n\\\\n您的沪-B89898认证成功,感谢使用捷停车APP。\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511334614000,\"planPushTime\":null,\"actualPushTime\":null,\"pushStatus\":null,\"source\":null,\"summary\":null,\"imageUrl\":null,\"isRead\":\"0\",\"areaIds\":null},{\"msgId\":\"99b34f68c7214df0a6ef7eaa459d064b\",\"userId\":\"a819fff488e9496693dbdbf8ae853b01\",\"areaId\":null,\"pushType\":\"P2P\",\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"C_VEHICLE_APPEAL_PASS\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆认证成功\",\"msgContent\":\"{\\\"content\\\":\\\"尊敬的捷停车会员，您的爱车粤-B0X1S9认证成功，您可以安心使用捷停车。\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511330018000,\"planPushTime\":null,\"actualPushTime\":null,\"pushStatus\":null,\"source\":null,\"summary\":null,\"imageUrl\":null,\"isRead\":\"0\",\"areaIds\":null}],\"pageSize\":\"100\",\"pageIndex\":\"1\",\"right\":true}"

let data = JSON.parse(datastr)

// data.msgList = [
//   {
//     msgContent:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
//     imageUrl:'/static/timg.jpeg',
//     createTime:'2018-04-11 19:43',
//     id:'0'
//   },
//   {
//     msgContent:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
//     createTime:'2018-04-11 19:43',
//     id:'1'
//   },
//   {
//     msgContent:'随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步随着社会的进步',
//     imageUrl:'http://cdn.alloyteam.com/assets/img/qq-71f7f2.gif',
//     createTime:'2018-04-11 19:43',
//     id:'2'
//   },
// ]

let msgdetialstr = "{\"resultCode\":\"0\",\"message\":\"\",\"obj\":null,\"msg\":{\"msgId\":\"04854adf94084910bf0992ab41670376\",\"userId\":\"27ade88dd2e24c269fbf07005bb21337\",\"areaId\":null,\"pushType\":\"P2P\",\"msgMainType\":\"NOTIFY\",\"msgSubType\":\"VEHICLE_AUTHEN_PASS\",\"pushChannel\":\"APP\",\"msgSubject\":\"车辆认证成功\",\"msgContent\":\"{\\\"content\\\":\\\"您的粤-C755KG认证成功，感谢使用捷停车APP\\\"}\",\"cardId\":null,\"url\":null,\"createTime\":1511949705000,\"planPushTime\":null,\"actualPushTime\":null,\"pushStatus\":\"UNPUSH\",\"source\":null,\"summary\":null,\"imageUrl\":null,\"isRead\":null,\"areaIds\":null},\"right\":true}"

export default {
  queryMsgList: config => {

    return data
  },
  queryMsgDetail: config => {
  
    return JSON.parse(msgdetialstr)
  }
}
