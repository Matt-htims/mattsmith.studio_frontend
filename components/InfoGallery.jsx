import Image from "next/image";

export default function InfoGallery({ title, contentArray }) {
	return (
		<div className="lg:mt-28 mt-24">
			<h2 className="font-spaceGrotesk font-medium md:text-5xl text-4xl text-center mb-16">
				{title}
			</h2>
			<div className="content lg:flex justify-between lg:space-x-10 lg:space-y-0 space-y-9">
				{contentArray &&
					contentArray.map((content) => (
						<div
							key={content.id}
							className="overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-lg"
						>
							<Image
								src={
									process.env.NEXT_PUBLIC_STRAPI_URL +
									content.attributes.image.data.attributes.url
								}
								alt="Triple explainer image"
								height={808}
								width={1060}
							/>
							<div className="text bg-textBlue-dark text-offWhite px-6 pt-8 pb-7 h-full space-y-3">
								<h3 className="font-spaceGrotesk font-medium text-xl">
									{content.attributes.name}
								</h3>
								<p className="text-sm font-light">
									{content.attributes.description}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
