import Image from "next/image"

const projects = [
  {
    name: "Brand Refresh Campaign",
    description: "A complete brand overhaul for a leading tech company.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Social Media Strategy",
    description: "Increased engagement by 200% for a major retail brand.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Video Ad Series",
    description: "Award-winning video campaign for a non-profit organization.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  // Add more projects as needed
]

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Work</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Check out some of our recent projects and success stories.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="relative h-48">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

