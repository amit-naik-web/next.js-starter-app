import { chain } from "@/src/middlewares/chain";
import { withAuthMiddleware } from "@/src/middlewares/auth-middleware";
import { withI18nMiddleware } from "@/src/middlewares/locale-middleware";

export default chain([withAuthMiddleware, withI18nMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
