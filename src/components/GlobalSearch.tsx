import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  FileText,
  Settings,
  User,
  CreditCard,
  Laptop,
  Cloud,
  Home,
  Briefcase,
  Calculator,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 text-muted-foreground bg-muted/50"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => runCommand(() => navigate("/"))}>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/about"))}>
              <User className="mr-2 h-4 w-4" />
              <span>About Us</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/careers"))}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Careers</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/contact"))}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/resources"))}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Resources</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Solutions">
            <CommandItem
              onSelect={() => runCommand(() => navigate("/products"))}
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>Hardware Catalog</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/services"))}
            >
              <Cloud className="mr-2 h-4 w-4" />
              <span>Services & Consulting</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/pricing"))}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Resources">
            <CommandItem
              onSelect={() =>
                runCommand(() => navigate("/resources/roi-calculator"))
              }
            >
              <Calculator className="mr-2 h-4 w-4" />
              <span>ROI Calculator</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate("/docs"))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Documentation</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => navigate("/case-studies"))}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Case Studies</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
