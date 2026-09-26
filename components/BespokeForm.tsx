'use client';

import { useState } from 'react';
import { site, waLink } from '@/lib/site';

const TYPES = ['Sofa / seating', 'Dining table & chairs', 'Bed / bedroom set', 'Wardrobe / storage', 'Office / study', 'Complete interior'];
const BUDGETS = ['Under Rs 100,000', 'Rs 100,000 – 300,000', 'Rs 300,000 – 700,000', 'Above Rs 700,000', 'Not sure yet'];

export default function BespokeForm() {
  const [form, setForm] = useState({ name: '', phone: '', type: TYPES[0], budget: BUDGETS[0], note: '' });
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const send = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please add your name and phone number.');
      return;
    }
    setError('');
    const msg = `Custom order enquiry — ${site.name}\n\nName: ${form.name}\nPhone: ${form.phone}\nLooking for: ${form.type}\nBudget: ${form.budget}\n\nDetails: ${form.note.trim() || '—'}`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  return (
    <div className="surface border p-9" style={{ borderColor: 'rgb(var(--rule))' }}>
      <div className="mb-4">
        <label className="field-label" htmlFor="bf-name">Your name</label>
        <input id="bf-name" className="input" placeholder="Full name" value={form.name} onChange={set('name')} />
      </div>
      <div className="mb-4">
        <label className="field-label" htmlFor="bf-phone">Phone / WhatsApp</label>
        <input id="bf-phone" className="input" placeholder="03XX XXXXXXX" value={form.phone} onChange={set('phone')} />
      </div>
      <div className="mb-4">
        <label className="field-label" htmlFor="bf-type">What do you need?</label>
        <select id="bf-type" className="input" value={form.type} onChange={set('type')}>
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="field-label" htmlFor="bf-budget">Budget range</label>
        <select id="bf-budget" className="input" value={form.budget} onChange={set('budget')}>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="mb-5">
        <label className="field-label" htmlFor="bf-note">Room size &amp; details</label>
        <textarea id="bf-note" className="input min-h-[104px] resize-y"
          placeholder="Room dimensions, the style you like, when you need it"
          value={form.note} onChange={set('note')} />
      </div>
      {error && <p className="mb-4 text-[12px] text-walnut">{error}</p>}
      <button onClick={send} className="btn w-full"><span>Send enquiry on WhatsApp</span></button>
    </div>
  );
}
