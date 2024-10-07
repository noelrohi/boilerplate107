import { Loader2 } from "lucide-react";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Loader2 className="animate-spin" />
    </main>
  );
}
