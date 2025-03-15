"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Slot>
          <input
            placeholder="Title"
            className="px-2 py-1 w-full bg-transparent outline-none"
          />
        </TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
