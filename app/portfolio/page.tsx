import Image from "next/image"

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="space-y-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=400&width=600`}
                alt={`Portfolio item ${item}`}
                width={600}
                height={400}
                className="aspect-[3/2] object-cover hover:scale-105 transition-transform"
              />
            </div>
            <h2 className="text-xl font-bold">Project {item}</h2>
            <p className="text-muted-foreground">A brief description of project {item} and its impact.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

