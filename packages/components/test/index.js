// 对外提供对组件的引用，注意组件必须声明 name
import AwsTest from './src/test.vue'
// 为组件提供 install 安装方法，供按需引入
AwsTest.install = Vue => {
  Vue.component(AwsTest.name, AwsTest)
}
export default AwsTest
