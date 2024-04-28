"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = async () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating note...",
      success: "Note created!",
      error: "Failed to create note",
    })
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <p>Your schedule is empty</p>
      <h2>Welcome to {user?.firstName}&apos;s Schedulr</h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
