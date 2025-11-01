import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  mode?: "single" | "multiple" | "range";
  selected?: Date | Date[];
  onSelect?: (date: Date | Date[] | undefined) => void;
  disabled?: (date: Date) => boolean;
};

function Calendar({
  className = "",
  ...props
}: CalendarProps) {
  return (
    <div
      data-slot="calendar"
      className={`p-3 ${className}`}
      {...props}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="font-medium">January 2025</div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <table className="w-full border-collapse space-y-1">
          <thead>
            <tr>
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                <th key={day} className="text-muted-foreground w-8 p-0">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <td key={day} className="p-0 text-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md h-8 w-8 p-0 hover:bg-accent"
                  >
                    {day}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
