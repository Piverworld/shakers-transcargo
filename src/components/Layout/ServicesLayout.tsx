import { ChevronRight } from "lucide-react"
import { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router"
import data from "../../Pages/Services/Services.json"

function ServiceLayout() {
    const params = useParams();
    const service = data.services.find(service => service.name === params.name);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            {/* Hero Section */}
            <section
                className="relative bg-gray-800 bg-center bg-cover h-96"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/pexels-markusspiske-3905831.jpg")',
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="max-w-sm mb-6 text-xl font-bold text-center md:text-4xl">
                        {service?.title}
                    </h1>

                    {/* Breadcrumb */}
                    <div className="flex flex-wrap items-center justify-center text-xs md:text-sm opacity-90">
                        <Link to="/" className="uppercase hover:underline">
                            STARTSEITE
                        </Link>
                        <ChevronRight className="w-3 h-3 mx-1 md:w-4 md:h-4 md:mx-2" />
                        <span className="uppercase">
                            LEISTUNG
                        </span>
                        <ChevronRight className="w-3 h-3 mx-1 md:w-4 md:h-4 md:mx-2" />
                        <span className="text-center uppercase">
                            {service?.title}
                        </span>
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    )
}

export default ServiceLayout