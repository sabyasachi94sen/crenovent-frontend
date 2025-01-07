import { NextResponse } from 'next/server';

export default function middleware(request) {
  // const logged_user = request.cookies.get('logged_user')?.value;

  // Redirect '/' to '/login' if user is not logged in, or to '/dashboard' if logged in
  // if (request.nextUrl.pathname === '/') {
  // }

  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  // }
  // Allow other routes to proceed
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|fonts|logo.svg).*)',
};
