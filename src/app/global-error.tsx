"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html
      lang="en"
      className="bg-white font-serif text-neutral-800 dark:bg-neutral-950"
    >
      <body>
        <div className="prose mx-auto flex min-h-screen flex-col items-center justify-center text-center dark:prose-invert">
          <h1 className="mr-4 inline-block pr-4 text-4xl font-semibold">
            Sorry, something went wrong.
          </h1>
          <div className="inline-block">
            <p className="text-md">
              <button
                className="font-semibold text-teal-700"
                onClick={() => reset()}
              >
                Try again
              </button>{" "}
              or{" "}
              <a className="tracking-wide text-teal-700" href="/">
                go home
              </a>
              .
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
