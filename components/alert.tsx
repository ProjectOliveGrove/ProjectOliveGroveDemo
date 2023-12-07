import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert({}) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": "",
        "bg-accent-1 border-accent-2": "",
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <p className="text-lg">
            The source code for this blog is{" "}
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="underline hover:text-success duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
