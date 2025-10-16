import { title } from "process";
import { z } from "zod";

export const SignInSchema = z.object({
  email: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.email({ error: "Please provide a valid email address." })
  ),

  password: z
    .string()
    .min(6, { error: "Password cannot be less than 6 characters" })
    .max(100, { error: "Password cannot exceed 100 characters" }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { error: "Username must be at least 3 characters long." })
    .max(30, { error: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      error: "Username cannot contain letters, numbers, and underscores.",
    }),
  name: z
    .string()
    .min(1, { error: "Name is required. " })
    .max(50, { error: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      error: "Name can only contain letters and spaces.",
    }),
  email: z.preprocess(
    (val) => (typeof val === "string" ? val.trim() : val),
    z.email({ error: "Please provide a valid email address." })
  ),
  password: z
    .string()
    .min(6, { error: "Password mustbe at least 6 characters" })
    .max(100, { error: "Password cannot exceed 100 characters" })
    .regex(/[A-Z]/, {
      error: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      error: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { error: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      error: "Password must contain at least one special character. ",
    }),
});

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(15, { error: "Title is required" })
    .max(150, { error: "Title cannot exceed 150 characters" }),
  content: z.string().min(1, { error: "Body is required" }),
  tags: z
    .array(
      z
        .string()
        .min(1, { error: "Tag cannot be empty" })
        .max(30, { error: "Tag cannot exceed 30 characters" })
    )
    .min(1, { error: "Please add at least one tag" })
    .max(3, { error: "You can add up to 3 tags only" }),
});
