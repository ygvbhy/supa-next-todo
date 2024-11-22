import { NextRequest, NextResponse } from "next/server";

const COOKIE_COUNTER = "cookie-counter";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.get(COOKIE_COUNTER)?.value) {
    const prev = request.cookies.get(COOKIE_COUNTER)?.value;
    response.cookies.set(COOKIE_COUNTER, `${Number(prev) + 1}`);
  } else {
    response.cookies.set(COOKIE_COUNTER, "1");
  }

  return response;
}

// middleware 가 통과할 링크를 지정
// 마지막 api 의 :path* 은 /api 가 붙은 모든 링크를 검사함
export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"],
};
