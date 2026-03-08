'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  body: string;
}

export function Accordion({ title, body }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button onClick={() => setOpen((prev) => !prev)} style={{ all: 'unset', cursor: 'pointer', fontWeight: 600 }}>
        {title}
      </button>
      {open ? <p className="muted" style={{ marginBottom: 0 }}>{body}</p> : null}
    </div>
  );
}
