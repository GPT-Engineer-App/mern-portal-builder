import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PrivateAreaAccessPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    // Add login logic here
    console.log("Logging in with", credentials);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Username/Email</label>
        <Input
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Password</label>
        <Input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
      </div>
      <Button onClick={handleLogin}>Login</Button>
      <Button variant="link" className="mt-2">Forgot Password?</Button>
    </div>
  );
};

export default PrivateAreaAccessPage;