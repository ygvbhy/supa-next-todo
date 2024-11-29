This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Supabase + Next.js

- Supabase 의 CRUD 의 기능과 사용법을 실습 하기 위한 Next.js 코드
- Next 와 Supabase 를 연동하여 next의 SSR 과 CSR 등을 실습
- Supabase 의 로그인 기능을 활용하여  Google 로그인 기능 실습
- Supabase 의 Auth 안의 profile 을 외래키로 지정한 뒤 작성한 TodoList 를 공유하여 열람 할 수 있는 기능

## 추가 라이브러리

```
yarn add react-spinners@^0.13.8
yarn add react-icons@^5.0.1
yarn add @supabase/supabase-js@^2.42.0
yarn add @supabase/ssr@^0.1.0
yarn add @supabase/auth-ui-react@^0.4.7
yarn add @supabase/auth-ui-shared@^0.1.8
yarn add cookies-next@^4.1.1
```

- react-spinners : 리액트 애니메이션 스피너 모음집
- react-icons : 리액트 아이콘 모음집
- @supabase/supabase-js : 자바스크립트 SDK
- @supabase/ssr : Supabase 를 사용할때 기본적인 함수들을 제공
- @supabase/auth-ui-react : 로그인과 관련된 UI 제공
- @supabase/auth-ui-shared : 로그인 UI 안에 들어가는 디자인 제공
- cookies-next : 쿠키를 다루는데에 도움을 줌
