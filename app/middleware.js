import { NextResponse } from "next/server";

export function middleware(req) {
  console.error("Middleware triggered"); // Just a test message

  const token = req.cookies.get("token")?.value; // Check for auth token

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized: Please log in to access this page." },
      { status: 401 }
    );
  }

  return NextResponse.next(); // Allow access if token exists
}

export const config = {
  matcher: ["/documentation/:path*"], // Protect specific routes
};
