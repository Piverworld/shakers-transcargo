import { Outlet } from 'react-router'
import Footer from '../sections/Footer'
import Header from '../sections/Header'

const PageLayout = () => {
    return (
        <div className="font-dm-sans">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default PageLayout