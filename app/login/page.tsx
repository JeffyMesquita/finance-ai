import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return (
    <main className="grid h-full md:grid-cols-2">
      {/* Left side */}
      <section className="mx-auto flex h-full max-w-[500px] flex-col justify-center gap-8 p-8">
        <Image src="/logo.svg" alt="Finance AI" height={39} width={173} />
        <article className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Bem-vindo</h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento.
          </p>
        </article>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2 h-6 w-6" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </section>

      {/* Right side */}
      <section className="relative hidden h-full w-full md:flex">
        <Image
          src="/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </section>
    </main>
  );
}
