import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  timeout: 10000,
});

instance.interceptors.request.use(
  config => config,
  error => {
    window.alert('服务出小差，请重试～');
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

export interface RequestMethod<Data, Params = any> {
  (p?: Params): Promise<Data>;
}

/** 处理返回数据 */
type DealResponseMethod = <T>(r: AxiosResponse<T>, _o: AxiosRequestConfig, url: string) => T;
export const dealResponse: DealResponseMethod = (res, _options, url) => {
  const { status, data } = res;

  if (+status === 200) {
    return data;
  }

  window.alert('服务出小差，请稍后重试');

  throw new Error(`接口(${url})调用出错，HTTP状态码非200:: ${String(data)}`);
};

/**
 * GET方法
 * @param url
 * @param payload 请求参数
 * @param options axios配置参数覆盖
 */
export async function getData<T, F = any>(url: string, params?: F | { [x: string]: string | number | undefined } | any, options?: AxiosRequestConfig): Promise<T>;
export async function getData<T>(_url, params, options) {
  // eslint-disable-next-line no-useless-escape
  const url = Object.keys(params).reduce((u, key) => u + `${key}=${params[key]}&`, /[^\?^\&]$/.test(_url) ? _url + '?' : _url);

  // 扩展就在这调用公共方法(内部再用axios实例操作)，传递参数处理接口调用
  const res = await instance({
    url,
    method: 'get',
    data: params,
    ...options,
  });

  return dealResponse<T>(res, options, url);
}
