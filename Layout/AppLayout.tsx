'use client'
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "next-themes";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (  
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           <Navigation />
            {children}
        </ThemeProvider>
    );
}
 
export default AppLayout;