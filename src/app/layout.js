import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500","700", "900" ] ,
variable: '--font-roboto'
});


export const metadata = {
  title: "AnonnoTa",
  description: "Spread your business with AnonnoTa",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
       
        {children}
      
      </body>
    </html>
  );
};

export default RootLayout;
