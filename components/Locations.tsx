"use client";

import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MapPin, Globe } from "lucide-react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Button } from "@/components/ui/button";

// Extended interface to include testimonials
export interface LocationData {
	id: string;
	name: string;
	description: string;
	details: string[];
	// coordinates: [number, number];
	// testimonials: {
	// 	author: string;
	// 	text: string;
	// }[];
}

export interface WhereWeAreProps {
	title?: string;
	subtitle?: string;
	locations: LocationData[];
	className?: string;
}

export default function Locations({
	title = "Where We Are",
	subtitle = "Explore our global impact across multiple regions",
	locations,
	className = "",
}: WhereWeAreProps) {
	const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

	const scrollToLocation = (locationId: string) => {
		const element = document.getElementById(locationId);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className={`bg-gradient-to-b from-white to-[#e5ead3] py-16 px-4 sm:px-6 lg:px-8 lg:pt-8 space-y-8 ${className}`}>
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
					<Globe className="w-10 h-10 text-primary" />
					{title}
				</h1>
				<p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
			</div>

			{/* Interactive Map */}
			<div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7905831745843!2d36.751709073959624!3d-1.3005031986871387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a46a8d61f75%3A0xd55717310205d288!2sShalom%20House!5e0!3m2!1sen!2ske!4v1730897024747!5m2!1sen!2ske"
					className="w-full h-full border-0"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Shalom House map"
					aria-label="Shalom House map"
					allowFullScreen
				></iframe>
			</div>

			<div className="flex justify-center mb-8">
				<Select
					onValueChange={(value) => {
						setSelectedLocation(value);
						scrollToLocation(value);
					}}
				>
					<SelectTrigger className="w-[280px]">
						<SelectValue placeholder="Select a Location" />
					</SelectTrigger>
					<SelectContent>
						{locations.map((location) => (
							<SelectItem key={location.id} value={location.id}>
								{location.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<div className="space-y-12">
				{locations.map((location) => (
					<section
						key={location.id}
						id={location.id}
						className={`bg-white shadow-lg rounded-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow ${
							selectedLocation === location.id ? "ring-2 ring-primary" : ""
						}`}
					>
						<div className="flex items-center mb-4">
							<MapPin className="w-6 h-6 mr-3 text-primary" />
							<h2 className="text-2xl font-semibold">{location.name}</h2>
						</div>
						<p className="text-muted-foreground mb-4">{location.description}</p>
						<ul className="list-disc list-inside text-sm space-y-2 mb-6">
							{location.details.map((detail, index) => (
								<li key={index} className="text-gray-600">
									{detail}
								</li>
							))}
						</ul>

						{/* Testimonials Section */}
						{/* {location.testimonials?.length > 0 && (
							<div className="mb-6 bg-gray-50 p-4 rounded-lg">
								<h3 className="text-lg font-semibold mb-3">Success Stories</h3>
								{location.testimonials?.map((testimonial, index) => (
									<blockquote
										key={index}
										className="border-l-4 border-primary pl-4 mb-4"
									>
										<p className="italic text-gray-600">{testimonial.text}</p>
										<footer className="text-sm font-medium mt-2">
											— {testimonial.author}
										</footer>
									</blockquote>
								))}
							</div>
						)} */}

						{/* Call to Action */}
						<div className="flex gap-4">
							<Button variant="default">Learn More</Button>
							<Button variant="outline">Get Involved</Button>
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
