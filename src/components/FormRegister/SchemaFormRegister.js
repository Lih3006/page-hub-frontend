import { z } from "zod";

export const formRegisterSchema = z
  .object({
    name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres "),
    email: z.string().min(3, "O email é inválido"),
    password: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 caracteres.")
      .regex(/(?=.*[A-Z])/, "É necessário pelo menos uma letra maiuscula")
      .regex(/(?=.*[a-z])/, "É necessário pelo menos uma letra minuscula")
      .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
    confirm: z.string().min(8, "A confirmação de senha é obrigatória"),
    bio: z.string().min(3, "A bio precisa ter pelo menos 3 caracteres "),
    contact: z
      .string()
      .regex(/^\(\d\d\)\s\d\s\d\d\d\d\-\d\d\d\d$/, "O número de telefone é inválido"),
    course_module: z.string().min(3, "è obrigatório selecionar um módulo"),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "A confirmação de senha precisa ser identica a primeira senha",
    path: ["confirm"],
  });
