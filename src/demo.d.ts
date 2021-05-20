// symlink 方式下，拿不到相關的 type
// <reference types="babel-react-demo/types/demo-prop.d.ts" />

/* eslint-disable react/no-typos */
import {} from 'react';
/* eslint-enable react/no-typos */

declare module 'react' {
  interface Attributes {
    demo?: any;
  }
}
