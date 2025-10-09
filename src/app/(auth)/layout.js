export default function AuthLayout({ children }) {
  return (
    <main className="lg:grid lg:grid-cols-2 p-8 gap-34 h-screen">
      {children}
    </main>
  );
}
