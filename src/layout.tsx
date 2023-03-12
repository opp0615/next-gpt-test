import Header from './Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-[76px]">{children}</div>
    </>
  );
}
