import request from "@/utils/request.js"

export function getList(params) {
  return request({
    url: '/vue-admin-template/test/list',
    method: 'get',
    params
  })
}
