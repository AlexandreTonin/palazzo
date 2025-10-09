import { PropertyCard } from "./PropertyCard";

export function PropertiesGrid({ properties = [], title = "Propriedades em Destaque" }) {
    if (!properties || properties.length === 0) {
        return (
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 font-[jejumyeongjo]">
                        {title}
                    </h2>
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">
                            Nenhuma propriedade encontrada no momento.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 font-[jejumyeongjo]">
                    {title}
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Descubra as melhores oportunidades de investimento em imóveis de luxo,
                    cuidadosamente selecionados para você.
                </p>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
