import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const routes: string[] =["/", "/appointments", "/auth/login", "/auth/signup"];

export async function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value;
    const path = request.nextUrl.pathname;
    const isLoginRoute = path.startsWith("/auth/login");

    if (!token && path.startsWith("/doctor")) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (token && (isLoginRoute || routes.includes(path))) {
        return NextResponse.redirect(new URL("/doctor/welcome", request.url));
    }

    if (token) {
        try {
            const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
            const { payload } = await jwtVerify(token, secret);

            console.log("Token válido:", payload);

            if (isLoginRoute) {
                return NextResponse.redirect(new URL("/doctor/welcome", request.url));
            }

            return NextResponse.next();


        } catch (error) {
            console.error("Token invalido:", error);
            return NextResponse.redirect(new URL("/auth/login", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/doctor/:path*', 
        '/auth/:path*',
    ]
}