import { CheckCircle2, ClipboardList, ListTodo } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { StatCard } from "@/components/stat-card";
import { useShoppingList } from "@/hooks/use-shopping-list";

function App() {
  const { items } = useShoppingList();

  const total = items.length;
  const boughtCount = items.filter((i) => i.bought).length;
  const openCount = total - boughtCount;

  return (
    <>
      <AppHeader />

      <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="Artikel gesamt"
            value={total}
            footnote="Einträge auf deiner Liste"
            icon={ClipboardList}
            iconClassName="text-muted-foreground"
          />
          <StatCard
            label="Gekauft"
            value={boughtCount}
            footnote="Artikel schon eingekauft"
            icon={CheckCircle2}
            iconClassName="text-muted-foreground"
          />
          <StatCard
            label="Noch offen"
            value={openCount}
            footnote="Stehen noch auf der Liste"
            icon={ListTodo}
            iconClassName="text-muted-foreground"
          />
        </div>
      </main>
    </>
  );
}

export default App;
