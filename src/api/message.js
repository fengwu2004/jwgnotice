import request from '@/utils/request'

export function queryMsgList(query) {
  return request({
    url: '/jsestate-service/msg/msg_list',
    method: 'post',
    data: query
  })
}

export function queryMsgDetail(query) {
  return request({
    url: '/jsestate-service/msg/msg_detail',
    method: 'post',
    data: query
  })
}
