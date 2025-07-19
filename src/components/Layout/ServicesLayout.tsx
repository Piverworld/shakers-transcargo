import { ChevronRight } from "lucide-react"
import { Link, Outlet } from "react-router"

function ServiceLayout() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative bg-gray-800 bg-center bg-cover h-96"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/3905831/pexels-photo-3905831.jpeg")',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="max-w-4xl mb-6 text-4xl font-bold md:text-5xl">
                        Triebfahrzeugführer/in im Güterverkehr
                    </h1>

                    {/* Breadcrumb */}
                    <div className="flex flex-wrap items-center justify-center text-xs md:text-sm opacity-90">
                        <Link to="/" className="hover:underline">
                            STARTSEITE
                        </Link>
                        <ChevronRight className="w-3 h-3 mx-1 md:w-4 md:h-4 md:mx-2" />
                        <span className="hover:underline">
                            LEISTUNG
                        </span>
                        <ChevronRight className="w-3 h-3 mx-1 md:w-4 md:h-4 md:mx-2" />
                        <span className="text-center">
                            TRIEBFAHRZEUGFÜHRER/IN IM GÜTERVERKEHR
                        </span>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}

export default ServiceLayout