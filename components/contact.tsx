import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:ml-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-primary">04. What's Next?</p>
        <h2 className="mb-6 text-4xl font-bold text-balance">Get In Touch</h2>
        <p className="mb-8 leading-relaxed text-muted-foreground text-pretty">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>
        <Button size="lg" asChild>
          <a
            href="https://mail.google.com/mail/?view=cm&to=gertrude.kenn.mujar@gmail.com"
            target="_blank"
          >
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
      </div>
      <footer className="mt-20 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kenn. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
