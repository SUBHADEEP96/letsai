"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./button";

export function ChatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="rounded-full shadow-lg"
        onClick={() =>
          (window.location.href = "mailto:contact@letsprinkleai.com")
        }
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2">Chat with us</span>
      </Button>
    </div>
  );
}
