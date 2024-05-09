import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-14 mx-auto  h-screen flex items-center">
      <Loader2 className="animate-spin w-14 h-14 text-indigo-500" />
    </div>
  );
}
