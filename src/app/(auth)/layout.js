export default function AuthLayout({ children }) {
  return (
    <main className="xl:grid xl:grid-cols-2 md:p-16 p-6 xl:gap-34 h-screen">
      {children}
    </main>
  );
}
