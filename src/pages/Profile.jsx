import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <Input
          name="name"
          value={profile.name}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <Input
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <Button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save Profile" : "Edit Profile"}
      </Button>
    </div>
  );
};

export default ProfilePage;