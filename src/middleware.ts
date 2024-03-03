import { chain } from "@/src/middlewares/chain";
import { withAuthMiddleware } from "@/src/middlewares/middleware1";
import { withI18nMiddleware } from "@/src/middlewares/middleware2";

export default chain([withAuthMiddleware, withI18nMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
