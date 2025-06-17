"use client"
import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import Prompt from '@/data/Prompt'
import axios from 'axios'

const AIInputBox = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n" + userInput;
    setLoading(true);
    try {
      const res = await axios.post('/api/ai-email', {
        prompt: PROMPT,
        userEmail: 'test@example.com', // Provide real email if needed
        tId: 123,                      // Provide a valid ID if needed
      });
      console.log("✅ AI Response:", res.data);
    } catch (error) {
      console.error("❌ Axios Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-5'>
      <p className='mb-2'>Provide the prompt for template</p>
      <Textarea
        placeholder="Start writing here"
        rows={5}
        className="text-xl"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        className="w-full mt-7"
        disabled={userInput.length === 0 || loading}
        onClick={OnGenerate}
      >
        {loading ? "Generating..." : "Generate"}
      </Button>
    </div>
  );
};

export default AIInputBox;
