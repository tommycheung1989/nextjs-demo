export default function Border({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <div>{children}</div>
    </main>
  );
}
