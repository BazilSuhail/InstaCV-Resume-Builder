export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Templates</h2>
      <p className="text-muted-foreground">
        Explore professional resume templates designed for different roles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Modern", "Minimal", "Classic"].map((template) => (
          <div
            key={template}
            className="p-4 border border-border rounded-lg bg-card hover:shadow-md transition"
          >
            <div className="h-40 bg-muted rounded-md mb-3"></div>
            <h3 className="font-medium">{template} Template</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Clean and optimized layout for professional profiles.
            </p>
            <button className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
