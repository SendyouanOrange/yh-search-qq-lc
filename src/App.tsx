import React, { useCallback, useEffect, useState } from 'react';
import { getUserInfoByQq, UserInfo } from './api/search-qq';
import './App.scss';
import { LoadingBtn } from './components/loading-btn';
import { UserCard } from './components/user-card';

const App: React.FC = () => {
  const [qq, setQq] = useState('');
  const [tip, setTip] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (qq !== String(userInfo?.qq)) {
      setUserInfo(null);
    }

    if (/^0/.test(qq)) {
      setTip('QQ号格式不正确：不可以0开头');
      return;
    }
    if (qq.length < 5) {
      setTip('');
      return;
    }
    if (!/^[1-9][0-9]{4,9}/gi.test(qq)) {
      setTip('QQ号格式不正确');
      return;
    }

    setTip('');
  }, [qq]);

  const searchQq = useCallback(async () => {
    setLoading(true);
    const data = await getUserInfoByQq({ qq });
    console.log(data);
    setUserInfo(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [qq]);

  return (
    <div className="app">
      <div className="app-title">QQ号查询</div>
      <div className="app-field">
        <span className="label">QQ</span>
        <input
          className="field"
          type="tel"
          autoFocus
          value={qq}
          onChange={e => {
            const num = e.target.value.replace(/[^\d]+/g, '');
            setQq(num.slice(0, 10));
          }}
        />
      </div>
      <div className="tip">{tip}</div>
      <LoadingBtn
        loading={loading}
        disabled={qq.length < 5 || Boolean(tip)}
        onClick={() => {
          searchQq();
        }}>
        查询
      </LoadingBtn>
      <UserCard user={userInfo} />
    </div>
  );
};

export default App;
