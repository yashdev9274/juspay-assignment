import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { topSellingProductsData } from "@/lib/mock-data";

interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

interface TopSellingProductsTableProps {
  data?: Product[];
}

export function TopSellingProductsTable({ data = topSellingProductsData }: TopSellingProductsTableProps) {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell className="text-right">{product.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
