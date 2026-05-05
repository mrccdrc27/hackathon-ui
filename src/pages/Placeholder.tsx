export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-[#09090b] p-4 md:p-8 items-center justify-center text-zinc-500 dark:text-zinc-500">
      <h1 className="text-xl md:text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-200">{title}</h1>
      <p className="text-sm text-center">This module is part of the prototype and currently mapped to a placeholder.</p>
    </div>
  );
}
