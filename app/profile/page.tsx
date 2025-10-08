export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <p className="text-muted-foreground">
        Update your personal details and contact information.
      </p>

      <form className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-2 border border-border rounded-md bg-input"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full p-2 border border-border rounded-md bg-input"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Location</label>
          <input
            type="text"
            placeholder="San Francisco, CA"
            className="w-full p-2 border border-border rounded-md bg-input"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
