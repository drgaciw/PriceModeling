import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PricingProposal() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Pricing Proposal</h1>

      {/* Financial Activity Summary Table */}
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableCell colSpan={5} className="text-center font-bold border border-gray-300 bg-gray-100 p-2">
              Financial Activity Summary
            </TableCell>
          </TableRow>
          <TableRow>
            {["Payment Type", "Total Trans Count", "Total Payment Amount", "Average Payment Amount", "Current Net Rev"].map((header) => (
              <TableCell key={header} className="text-center font-semibold border border-gray-300 bg-gray-50 p-2">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {["Credit", "Debit", "ACH", "Totals"].map((type) => (
            <TableRow key={type}>
              <TableCell className="text-left border border-gray-300 p-2">{type}</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">$0.00</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">$0.00</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">$0.00</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">$0.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Proposed Pricing Summary Table */}
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableCell colSpan={5} className="text-center font-bold border border-gray-300 bg-gray-100 p-2">
              Proposed Pricing Summary
            </TableCell>
          </TableRow>
          <TableRow>
            {["Payment Type", "Pricing Method", "Payment Method", "$ Based Fee", "% Based Fee"].map((header) => (
              <TableCell key={header} className="text-center font-semibold border border-gray-300 bg-gray-50 p-2">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {["Com Credit", "Cons Credit", "Debit", "ACH"].map((type, index) => (
            <TableRow key={type}>
              <TableCell className="text-left border border-gray-300 p-2">{type}</TableCell>
              <TableCell className="text-left border border-gray-300 p-2">
                {index < 2 ? "% of Principal" : "Flat Fee $"}
              </TableCell>
              <TableCell className="text-left border border-gray-300 p-2">CFEE</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">$0.00</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">0.00%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Proposed Profitability Table */}
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableCell colSpan={4} className="text-center font-bold border border-gray-300 bg-gray-100 p-2">
              Proposed Profitability
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border border-gray-300 bg-gray-50 p-2"></TableCell>
            {["Card", "ACH", "Total"].map((header) => (
              <TableCell key={header} className="text-center font-semibold border border-gray-300 bg-gray-50 p-2">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {["Gross Revenue", "Net Revenue", "Margin %", "Uplift/Decrease"].map((label) => (
            <TableRow key={label}>
              <TableCell className="text-left border border-gray-300 p-2 font-medium">{label}</TableCell>
              {[...Array(3)].map((_, i) => (
                <TableCell key={i} className="border border-gray-300 p-2 text-center">
                  {label === "Margin %" ? "0.00%" : "$0.00"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Repricing Triggers Table */}
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableCell colSpan={2} className="text-center font-bold border border-gray-300 bg-gray-100 p-2">
              Repricing Triggers
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { label: "Average Payment >", format: "currency" },
            { label: "Com Credit % >", format: "percentage" },
            { label: "All Credit % >", format: "percentage" },
            { label: "Debit % <", format: "percentage" },
            { label: "Durbin Reg % <", format: "percentage" },
            { label: "Unreg Debit % >", format: "percentage" }
          ].map((trigger, i) => (
            <TableRow key={i}>
              <TableCell className="border border-gray-300 p-2 text-left w-1/2">{trigger.label}</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center w-1/2">
                {trigger.format === "currency" ? "$0.00" : "0.00%"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Financial KPIs Table */}
      <Table className="w-full border-collapse border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableCell colSpan={4} className="text-center font-bold border border-gray-300 bg-gray-100 p-2">
              Financial KPIs
            </TableCell>
          </TableRow>
          <TableRow>
            {["Metrics", "Renewal", "Uplift", "TCV"].map((header) => (
              <TableCell key={header} className="text-center font-semibold border border-gray-300 bg-gray-50 p-2">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {["TCV", "Mo Capacity", "Yr 1 NR", "Yr 1 Margin %", "Yr 2 NR", "Yr 2 Margin %", "ARR"].map((metric) => (
            <TableRow key={metric}>
              <TableCell className="text-left border border-gray-300 p-2 font-medium">{metric}</TableCell>
              {[...Array(3)].map((_, i) => (
                <TableCell key={i} className="border border-gray-300 p-2 text-center">
                  {metric.includes("Margin") ? "0.00%" : "$0.00"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}