import Sidebar from "./Sidebar";

export const metadata = {
    title: "AnonnoTa | Dashboard",
    description: "Spread your business with AnonnoTa",
  };
  

const DashboardLayout = ({children}) => {
    return (
        <div className="flex container mx-auto">
           <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default DashboardLayout;