import type { LucideIcon } from "lucide-react"
import { Card } from "@/components/retroui"
import { cn } from "@/lib/utils"

export type StatCardProps = {
  label: string
  value: number
  icon: LucideIcon
  iconClassName: string
}

export function StatCard({
  label,
  value,
  icon: Icon,
  iconClassName,
}: StatCardProps) {
  return (
    <Card className="w-full border-border bg-card py-4 ring-0">
      <Card.Header className="space-y-3 px-4 pb-0 pt-0">
        <div className="flex items-center justify-between gap-2">
          <Card.Description className="text-[0.8125rem] font-medium leading-none text-foreground">
            {label}
          </Card.Description>
          <Icon
            className={cn("size-[1.125rem] shrink-0", iconClassName)}
            aria-hidden
          />
        </div>
        <p className="text-3xl font-semibold tabular-nums tracking-tight text-foreground">
          {value}
        </p>
      </Card.Header>
    </Card>
  )
}
