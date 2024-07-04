import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const authenticateUser = async (credentials) => {
  const response = await fetch("/api/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return response.json();
};

const PrivateAreaAccessPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const mutation = useMutation(authenticateUser, {
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/protected-route");
    },
    onError: () => {
      toast.error("Invalid credentials. Please try again.");
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    mutation.mutate(credentials);
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
      <Button onClick={handleLogin} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Logging in..." : "Login"}
      </Button>
      <Button variant="link" className="mt-2">Forgot Password?</Button>
    </div>
  );
};

export default PrivateAreaAccessPage;