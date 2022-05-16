/*
 * @Author       : licheng.824@bytedance.com
 * @Date         : 2022-05-16 16:36:27
 * @LastEditors  : licheng.824@bytedance.com
 * @LastEditTime : 2022-05-16 16:48:01
 * @Description  : loading btn
 */

import classnames from 'classnames';
import React, { CSSProperties } from 'react';
import './index.scss';

interface Props {
  loading?: boolean;
  disabled?: boolean;
  classNames?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

export const LoadingBtn: React.FC<Props> = ({ loading = false, disabled = false, classNames = '', onClick, children }) => {
  return (
    <button
      className={classnames(classNames || '', 'app-option', { 'app-option-disabled': disabled })}
      onClick={e => {
        !disabled && onClick?.(e);
      }}>
      {loading ? <CircleIcon color="#fff" /> : children}
    </button>
  );
};

/** 菊花SVG */
const CircleIcon: React.FC<{ color?: string }> = ({ color = '#1FCDB6' }) => {
  const rotate = new Array(12).fill(0).map((_, index) => index * 30);
  const values = [
    '.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45',
    '.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55',
    '.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65',
    '.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7',
    '.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85',
    '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
    '1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1',
    '0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0',
    '.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1',
    '.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15',
    '.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25',
    '.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35',
  ];
  return (
    <svg className="circle-icon" viewBox="0 0 64 64" stroke={color} xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g strokeWidth="4" strokeLinecap="round">
        {rotate.map((r, index) => {
          const val = values[index];
          return (
            <line key={val + index} y1="12" y2="20" transform={`translate(32,32) rotate(${r})`}>
              <animate attributeName="stroke-opacity" dur="1000ms" values={val} repeatCount="indefinite"></animate>
            </line>
          );
        })}
      </g>
    </svg>
  );
};
