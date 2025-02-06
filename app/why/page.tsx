export default function WhyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Experience</h2>
          <p className="text-muted-foreground">Years of industry experience delivering quality solutions.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Innovation</h2>
          <p className="text-muted-foreground">Always staying ahead with the latest technologies and trends.</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Results</h2>
          <p className="text-muted-foreground">Proven track record of delivering successful projects.</p>
        </div>
      </div>
    </div>
  )
}

