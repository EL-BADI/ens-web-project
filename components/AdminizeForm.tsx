"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function InputOTPForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const { data: res } = await axios.post("/api/adminize", { data });

      if (res?.success) {
        toast("You are Admin now!");
        router.replace("/write");
      } else toast("Wrong Pass Word!");
    } catch (error) {
      toast("Wrong Pass Word!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className=" w-full flex items-center flex-col mt-7">
              <FormLabel>Enter Password</FormLabel>
              <FormControl>
                <InputOTP className="" maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the right password to be Able to Write Posts
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" flex justify-end">
          <Button className="" variant={"main"} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

const AdminizeForm = () => {
  return (
    <div className="bg-slate-900 max-w-fit mx-auto p-8 rounded-xl mt-32">
      <h1 className=" text-balance font-semibold text-indigo-500 text-2xl">
        Only professors has access to write posts
      </h1>
      <InputOTPForm />
    </div>
  );
};

export default AdminizeForm;
