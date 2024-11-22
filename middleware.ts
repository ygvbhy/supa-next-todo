import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  console.log("middleware 통과");

  return response;
}

// middleware 가 통과할 링크를 지정
// 마지막 api 의 :path* 은 /api 가 붙은 모든 링크를 검사함
export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"],
};
