"use server";

// next.js 가 API 를 만들어서 보내줌
// POST API 로 만들어서 보내주는걸로 network 탭에 보임
export const pingAction = async () => {
  console.log("pingAction income");
  return "pong";
};
