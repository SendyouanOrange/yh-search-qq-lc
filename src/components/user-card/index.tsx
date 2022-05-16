/*
 * @Author       : licheng.824@bytedance.com
 * @Date         : 2022-05-16 16:55:31
 * @LastEditors  : licheng.824@bytedance.com
 * @LastEditTime : 2022-05-16 17:12:59
 * @Description  : 用户信息卡
 */

import { UserInfo } from '@/api/search-qq';
import React from 'react';

import './index.scss';

interface Props {
  user?: UserInfo | null;
}

export const UserCard: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <div className="user-card-placeholder"></div>;
  }

  if (+user?.code !== 1) {
    return (
      <div className="err-msg">
        <span>{user?.msg || '查询出错请重试'}</span>
      </div>
    );
  }

  return (
    <div className="user-card">
      <img className="user-card-head" src={user?.qlogo || ''} alt="" />
      <div className="user-card-content">
        <div className="name">{user?.name || ''}</div>
        <div className="number">{user?.qq || ''}</div>
      </div>
    </div>
  );
};
