import { CheckCircle2, ClipboardList, ListTodo } from "lucide-react";
import { AddItemForm } from "@/components/add-item-form";
import { AppHeader } from "@/components/app-header";
import { StatCard } from "@/components/stat-card";
import { useShoppingList } from "@/hooks/use-shopping-list";

function App() {
  const { items, loading, error, addItem } = useShoppingList();

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

        <div className="mt-8 flex flex-col gap-2">
          {error ? (
            <p className="rounded border-2 border-destructive bg-card px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          ) : null}
          <AddItemForm disabled={loading} onSubmit={addItem} />

          <ul>
            {items.map((item) => (
              <li key={item._id}>
                {item.name}
                {item.bought ? " ✓" : ""}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
