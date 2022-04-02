import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LayoutComponent } from "./components/layouts/layouts";
import { BookPage } from "./page/book/book";
import { HomePage } from "./page/home/home";
import "./style/global.scss";

export const App = () => {

  return <BrowserRouter>
            <Routes>
              <Route path="/" element={<LayoutComponent />}>
                <Route index element={<HomePage/>} />
                <Route path="book/:name" element={<BookPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>

}
