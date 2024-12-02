"use client"
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CircleCheck } from "lucide-react";

const formSchema = z.object({
    username:
        z.string()
            .min(2, {
                message: "Username must be at least 2 characters.",
            })
            .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), 'Name should contain only alphabets'),
});



export const ClaimLinkForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="pt-4">
                                    <div className="relative">
                                        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-md text-white peer-disabled:opacity-50">
                                            kahete.com/
                                        </span>
                                        <Input className="peer ps-24 text-md" placeholder="your-name" type="text" maxLength={12} {...field} />
                                        {/* Check icon */}
                                        {/* <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                            <CircleCheck color="green" size={16} strokeWidth={2} aria-hidden="true" />
                                        </div> */}
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="absolute bottom-5 right-0 px-4 w-full">
                    <Button type="submit" size={'full'}>Submit</Button>
                </div>
            </form>
        </Form>
    );
};
