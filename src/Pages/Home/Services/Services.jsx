import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-3">
                <h3 className="text-3xl text-orange-500">Services</h3>
                <h2 className="text-5xl">Our service Area</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quod architecto laborum, at cumque! Voluptatibus tempora, laborum unde veniam minus asperiores consectetur sapiente harum nesciunt officiis vero impedit porro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;