import { NavigationComponent } from "../navigation/navigation";
import { FooterComponent } from "../footer/footer";
import { HeaderComponent } from "../header/header";
import { Outlet } from "react-router-dom";


export const LayoutComponent = () => {

    return  <>  
                <HeaderComponent/>
                <NavigationComponent/>
                    <main>
                        <Outlet/> 
                    </main>
                <FooterComponent/>
            </>

}