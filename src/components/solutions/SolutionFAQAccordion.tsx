import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

export function SolutionFAQAccordion({ faqs }: { faqs?: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our engagement models and
            delivery.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FAQRow key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQRow({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "group rounded-lg border border-transparent transition-all duration-200",
        open
          ? "bg-secondary/20 border-border/50 shadow-sm"
          : "hover:bg-secondary/10",
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-start text-left p-5 cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={cn(
            "font-semibold text-lg pr-8 transition-colors",
            open ? "text-primary" : "text-foreground",
          )}
        >
          {faq.question}
        </span>
        <div
          className={cn(
            "shrink-0 mt-1 w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center text-primary transition-all duration-300",
            open
              ? "bg-primary text-primary-foreground border-primary rotate-180"
              : "bg-transparent",
          )}
        >
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open
            ? "grid-rows-[1fr] opacity-100 pb-5"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden px-5">
          <p className="text-muted-foreground leading-relaxed text-base border-l-2 border-primary/20 pl-4">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
