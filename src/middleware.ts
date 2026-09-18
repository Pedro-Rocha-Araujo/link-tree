import { NextRequest, NextResponse } from "next/server"

export default function middleware(request:NextRequest) {
  const token = request.cookies.get("token")?.value
  const urlAdmin = request.nextUrl.pathname.startsWith("/admin")
  const nomeRota = request.nextUrl.pathname
  if(nomeRota === "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  if(!token && urlAdmin) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  NextResponse.next()
}