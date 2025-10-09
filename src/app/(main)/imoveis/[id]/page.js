'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Bed, Bath, Square, Phone, Mail, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useProperty } from '@/hooks/useProperty'

export default function PropertyDetails() {
    const params = useParams()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showImageModal, setShowImageModal] = useState(false)

    const { data: property, isLoading, error } = useProperty(params.id)

    const formatPrice = (price) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === property.images.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? property.images.length - 1 : prev - 1
        )
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        )
    }

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Propriedade não encontrada</h1>
                    <p className="text-gray-600">A propriedade que você está procurando não existe.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            {/* <div className='h-28 bg-[#88B9D6]'> */}

            {/* </div> */}

            {/* Image Gallery Section */}
            <div className="relative h-96 lg:h-[600px] overflow-hidden">
                <Image
                    src={`http://localhost:3333${property.images[currentImageIndex]}`}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* View All Images Button */}
                <button
                    onClick={() => setShowImageModal(true)}
                    className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
                >
                    Ver todas as fotos
                </button>
            </div>

            {/* Property Details Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Price and Title */}
                        <div className="mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-0">
                                    {property.title}
                                </h1>
                                <div className="text-3xl lg:text-4xl font-bold text-green-600">
                                    {formatPrice(property.price)}
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-2 text-gray-600 mb-4">
                                <MapPin size={20} />
                                <span className="text-lg">
                                    {property.location.address ? `${property.location.address}, ` : ''}
                                    {property.location.neighborhood}, {property.location.city} - {property.location.region}
                                </span>
                            </div>
                        </div>

                        {/* Property Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <Bed size={24} className="mx-auto mb-2 text-gray-600" />
                                <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                                <div className="text-sm text-gray-600">Quartos</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <Bath size={24} className="mx-auto mb-2 text-gray-600" />
                                <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                                <div className="text-sm text-gray-600">Banheiros</div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <Square size={24} className="mx-auto mb-2 text-gray-600" />
                                <div className="text-2xl font-bold text-gray-900">{property.squareMeters}</div>
                                <div className="text-sm text-gray-600">m²</div>
                            </div>
                            {property.yearBuilt && (
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <Calendar size={24} className="mx-auto mb-2 text-gray-600" />
                                    <div className="text-2xl font-bold text-gray-900">{property.yearBuilt}</div>
                                    <div className="text-sm text-gray-600">Ano</div>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {property.description}
                            </p>
                        </div>

                        {/* Amenities */}
                        {property.amenities && property.amenities.length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Comodidades</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {property.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-gray-700">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar - Contact Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Interessado?</h3>
                            <p className="text-gray-600 mb-6">
                                Entre em contato conosco para mais informações sobre esta propriedade.
                            </p>

                            <div className="space-y-3">
                                <button className="btn btn-primary w-full bg-black text-white border-none hover:bg-gray-800">
                                    <Phone size={20} />
                                    Ligar Agora
                                </button>
                                <button className="btn btn-outline w-full">
                                    <Mail size={20} />
                                    Enviar Email
                                </button>
                                <button className="btn btn-outline w-full">
                                    <Calendar size={20} />
                                    Agendar Visita
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-2">Corretor Responsável</h4>
                                <p className="text-gray-700">João Silva</p>
                                <p className="text-gray-600 text-sm">CRECI: 12345-F</p>
                                <p className="text-gray-600 text-sm">(21) 99999-9999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {
                showImageModal && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                        <div className="relative max-w-4xl w-full">
                            <button
                                onClick={() => setShowImageModal(false)}
                                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-96 lg:h-[600px]">
                                <Image
                                    src={`http://localhost:3333${property.images[currentImageIndex]}`}
                                    alt={property.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Modal Navigation */}
                            {property.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* Image Thumbnails */}
                            <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
                                {property.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 ${index === currentImageIndex ? 'border-white' : 'border-transparent'
                                            }`}
                                    >
                                        <Image
                                            src={`http://localhost:3333${image}`}
                                            alt={`${property.title} - ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
