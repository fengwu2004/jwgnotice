import request from '@/utils/request'

export function queryMsgList(query) {
  return request({
    url: '/jsestate-service/msg/msg_list',
    method: 'POST',
    data: query
  })
}

export function queryMsgDetail(query) {
  return request({
    url: '/jsestate-service/msg/msg_detail',
    method: 'POST',
    data: query
  })
}
