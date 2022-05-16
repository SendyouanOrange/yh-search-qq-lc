/*
 * @Author       : licheng.824@bytedance.com
 * @Date         : 2022-05-16 14:24:12
 * @LastEditors  : licheng.824@bytedance.com
 * @LastEditTime : 2022-05-16 17:05:42
 * @Description  : 搜索qq
 */

import { getData } from './request';

export interface UserInfo {
  code: number; // 1是正常数据
  msg?: string;
  qq?: string;
  name?: string;
  qlogo?: string;
  // 绿钻会员相关
  lvzuan?: {
    code: number;
    subcode: number;
    level: number;
    vip: number;
    score: number;
    payway: number;
    isyear: number;
    vender: number;
  };
}

/**
 * @Author: licheng.824@bytedance.com
 * @LastEditors: licheng.824@bytedance.com
 * @description: 通过qq号获取用户信息
 * @param params qq
 * @return {UserInfo}
 */
export const getUserInfoByQq = (params: { qq: string }) => {
  return getData<UserInfo>('https://api.uomg.com/api/qq.info', params);
};
