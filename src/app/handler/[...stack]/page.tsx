import { stackServerApp } from "@/stack";
import { StackHandler } from "@stackframe/stack";

type HandlerProps = Omit<React.ComponentProps<typeof StackHandler>, "app" | "fullPage">;

export default function Handler(props: HandlerProps) {
  return <StackHandler fullPage app={stackServerApp} {...props} />;
}
