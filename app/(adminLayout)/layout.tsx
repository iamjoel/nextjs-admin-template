import { AppContextProvider } from '@/context/app-context'
import Header from "@/components/layout/header";
import Menu from "@/components/layout/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContextProvider>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="grow h-0 flex">
          <Menu />
          <div className="grow w-0 px-8 pt-4">
            {children}
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
}
