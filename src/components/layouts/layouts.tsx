import { NavigationComponent } from "../navigation/navigation";
import { FooterComponent } from "../footer/footer";
import { HeaderComponent } from "../header/header";
import { Outlet, useLocation } from "react-router-dom";


export const LayoutComponent = () => {

    const url = useLocation();

    return  <>  
                <HeaderComponent/>
                {url.pathname === "/" && <NavigationComponent/>}
                    <main>
                        <Outlet/> 
                    </main>
                <FooterComponent/>
            </>

}