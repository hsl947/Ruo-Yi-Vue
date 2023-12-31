/*
 * @Author: Shaoli
 * @Date: 2023-09-12 16:05:38
 * @LastEditors: Shaoli
 * @LastEditTime: 2023-09-12 16:41:51
 * @Description: 请填写文件描述
 */
import defaultSettings from '@/settings'
import { useDynamicTitle } from '@/utils/dynamicTitle'

const {
  sideTheme,
  showSettings,
  topNav,
  tagsView,
  fixedHeader,
  sidebarLogo,
  dynamicTitle
} = defaultSettings

const storageSetting = JSON.parse(localStorage.getItem('layout-setting')) || ''

const useSettingsStore = defineStore('settings', {
  state: () => ({
    title: '',
    theme: storageSetting.theme || '#409EFF',
    sideTheme: storageSetting.sideTheme || sideTheme,
    showSettings: showSettings,
    topNav:
      storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
    tagsView:
      storageSetting.tagsView === undefined
        ? tagsView
        : storageSetting.tagsView,
    fixedHeader:
      storageSetting.fixedHeader === undefined
        ? fixedHeader
        : storageSetting.fixedHeader,
    sidebarLogo:
      storageSetting.sidebarLogo === undefined
        ? sidebarLogo
        : storageSetting.sidebarLogo,
    dynamicTitle:
      storageSetting.dynamicTitle === undefined
        ? dynamicTitle
        : storageSetting.dynamicTitle
  }),
  actions: {
    // 修改布局设置
    changeSetting(data) {
      const { key, value } = data
      // eslint-disable-next-line no-prototype-builtins
      if (this.hasOwnProperty(key)) {
        this[key] = value
      }
    },
    // 设置网页标题
    setTitle(title) {
      this.title = title
      useDynamicTitle()
    }
  }
})

export default useSettingsStore
