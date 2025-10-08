export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="text-muted-foreground max-w-prose">
        Welcome back! View, edit, or create resumes quickly. Your recent projects and saved drafts appear below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-medium mb-2">Resume {id}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A modern resume built for tech roles.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition">
              Edit Resume
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
