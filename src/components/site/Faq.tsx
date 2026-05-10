import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl divide-y divide-border">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0 py-2">
          <AccordionTrigger className="text-left font-display text-xl text-secondary hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
