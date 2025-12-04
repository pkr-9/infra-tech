import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductSpecsProps {
  specs?: Record<string, string>;
}

export const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  if (!specs) return null;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-heading font-bold mb-4">
          Technical Specifications
        </h3>
        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>Specification</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(specs).map(([key, value]) => (
                <TableRow key={key}>
                  <TableCell className="font-medium text-muted-foreground">
                    {key}
                  </TableCell>
                  <TableCell className="font-mono text-foreground">
                    {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Downloads Section */}
      <div>
        <h3 className="text-xl font-heading font-bold mb-4">Documentation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-secondary/50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-md">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Datasheet.pdf</span>
                <span className="text-xs text-muted-foreground">
                  2.4 MB • Updated Jan 2025
                </span>
              </div>
            </div>
            <Button size="icon" variant="ghost">
              <Download className="w-4 h-4" />
            </Button>
          </div>
          {/* Additional doc... */}
        </div>
      </div>
    </div>
  );
};
