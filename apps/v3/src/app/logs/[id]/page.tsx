import { Laila } from "next/font/google";
import HeaderLinks from "../../../components/links/header";
import Footer from "../../../components/footer";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <HeaderLinks />
        <div className="max-w-[65ch]">
          <div
            className={`${laila.className} dark:text-white text-3xl font-bold pb-9`}
          >
            Local Storage vs Cookies
          </div>

          <div className="pt-10 flex flex-col space-y-5 leading-7">
            <p>
              One of the popular questions I’ve seen in developer forums is,
              where do I store the JWT token to manage sessions.
            </p>
            <p>
              There are 2 ways you could store JWT or any other auth tokens,
              LocalStorage or cookie. Both have their pros & cons but they are
              vulnerable to XSS attacks.
            </p>
            <p>
              HttpOnly is an additional flag included in a Set-Cookie HTTP
              response header. HttpOnly makes sure that the client can’t read
              the secret via client-side JavaScript.
            </p>
            He didn’t mind me ignoring him and I didn’t mind him splashing my
            every 45 seconds.
            <p>
              Con: HttpOnly is designed to prevent any code running on it from
              access it. That means any javascript framework cannot access it.
            </p>
            <p>
              The secure attribute sets if the cookie should only be read over
              an HTTPS connection
            </p>
            <p>
              SameSite cookies (“First-Party-Only” or “First-Party”) allow
              servers to mitigate the risk of CSRF and information leakage
              attacks by asserting that a particular cookie should only be sent
              with requests initiated from the same registrable domain.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
