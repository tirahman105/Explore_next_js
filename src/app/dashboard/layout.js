export const metadata = {
    title: "AnonnoTa | Dashboard",
    description: "Spread your business with AnonnoTa",
  };
  

const DashboardLayout = ({children}) => {
    return (
        <div>
           <div>Sidebar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;