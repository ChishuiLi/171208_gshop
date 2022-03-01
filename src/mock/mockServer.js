/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

/*
Mock.mock( rurl, template )
记录数据模板。当拦截到匹配 url 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
 */

Mock.mock('/goods',{code:0,data : data.goods})
Mock.mock('/ratings',{code:0,data : data.ratings})
Mock.mock('/info',{code:0,data : data.info})

//export default ???  不需要向外暴露任何数据，只需要保存能执行即可
