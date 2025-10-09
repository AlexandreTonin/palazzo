import Image from "next/image";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import Link from "next/link";

export function PropertyCard({ property }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const formatSquareMeters = (sqm) => {
        return `${sqm}m²`;
    };

    const primaryImage = property.images?.[0];

    return (
        <div className="card bg-gray-50 border border-gray-200 shadow-md duration-300 rounded-xl overflow-hidden group">
            {/* Property Image */}
            <figure className="relative h-64 overflow-hidden">
                <Image
                    src={`http://localhost:3333${primaryImage}`}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    draggable={false}
                />
            </figure>

            {/* Property Details */}
            <div className="card-body p-6">
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={16} />
                    <span className="text-sm">
                        {property.location.neighborhood}, {property.location.city} - {property.location.region}
                    </span>
                </div>

                {/* Title */}
                <h3 className="card-title text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {property.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                </p>

                {/* Property Features */}
                <div className="flex justify-between items-center text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                        <Bed size={16} />
                        <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath size={16} />
                        <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Square size={16} />
                        <span className="text-sm">{formatSquareMeters(property.squareMeters)}</span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="card-actions justify-between items-center">
                    <div className="font-bold text-black">
                        {formatPrice(property.price)}
                    </div>

                    <Link href={`/imoveis/${property.id}`}>
                        <button className="btn btn-sm bg-white hover:bg-gray-100 text-black transition-colors">
                            Ver Detalhes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
