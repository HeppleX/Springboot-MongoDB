import ajax from './ajax'

const BASE = 'http://localhost:8080/'

export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')

export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax(BASE + '/manage/product/search', {
  pageNum,
  pageSize,
  [searchType]: searchName,
})

export const reqDeleteImg = (name) => ajax(BASE + '/manage/img/delete', {name}, 'POST')

export const reqProducts = () => ajax(BASE + 'listallgoods')

export const reqAddOrUpdateProduct = (product) => ajax(BASE + (product.id ? 'updategoods' : 'newgoods'), product, 'POST')

export const reqDeleteProduct = (id) => ajax(BASE +'deletegoods', {id}, 'POST')

export const reqUsers = () => ajax(BASE + 'listallusers')

export const reqAddOrUpdateUser = (user) => ajax(BASE + (user.id ? 'updateuser' : 'newuser'), user, 'POST')

export const reqDeleteUser = (id) => ajax(BASE +'deleteuser', {id}, 'DELETE')

export const reqOrders = () => ajax(BASE + 'listallorders')

export const reqAddOrUpdateOrder = (order) => ajax(BASE + (order.id ? 'updateorder' : 'neworder'), order, 'POST')

export const reqDeleteOrder = (id) => ajax(BASE +'deleteorder', {id}, 'DELETE')

export const reqClicks = () => ajax(BASE + 'listallclicks')

export const reqAddOrUpdateClick = (click) => ajax(BASE + (click.id ? 'updateclick' : 'newclick'), click, 'POST')

export const reqDeleteClick = (id) => ajax(BASE +'deleteclick', {id}, 'DELETE')

export const reqLogs = () => ajax(BASE + 'listalllogs')

export const reqAddOrUpdateLog = (log) => ajax(BASE + (log.id ? 'updatelog' : 'newlog'), log, 'POST')

export const reqDeleteLog = (id) => ajax(BASE +'deletelog', {id}, 'DELETE')

export const reqComments = () => ajax(BASE + 'listallcomments')

export const reqAddOrUpdateComment = (comment) => ajax(BASE + (comment.id ? 'updatecomment' : 'newcomment'), comment, 'POST')

export const reqDeleteComment = (id) => ajax(BASE +'deletecomment', {id}, 'DELETE')

export const reqClickNums = () => ajax(BASE + 'listallclicks')

export const reqAddOrUpdateClickNum = (comment) => ajax(BASE + (comment.id ? 'updateclick' : 'newclick'), comment, 'POST')

export const reqDeleteClickNum = (id) => ajax(BASE +'deleteclick', {id}, 'DELETE')

export const reqGoods = () => ajax(BASE + 'listallgoods')

export const reqAddOrUpdateGoods = (goods) => ajax(BASE + (goods.id ? 'updateclick' : 'newclick'), goods, 'POST')

export const reqDeleteClickGoods = (id) => ajax(BASE +'deleteclick', {id}, 'DELETE')

