import React, { useState, useEffect } from 'react';

const GetSkills = () => {
  const [texts, setTexts] = useState([]);

  const addRandomText = () => {
    const newText = {
      id: Math.random(),
      text: getRandomWord(),
      style: {
        position: 'absolute',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        // transform: `translate(-50%, -50%) ${Math.random() < 0.5 ? 'rotate(0deg)' : 'rotate(90deg)'}`,
        opacity: Math.random() * 0.5 + 0.5,
        fontSize: `${Math.random() * 30 + 13}px`,
      }
    };
    
    setTexts(prevTexts => [...prevTexts, newText]);

    // removing effects every 5 seconds
    setTimeout(() => {
        setTexts(prevTexts => prevTexts.filter(text => text.id !== newText.id));
      }, 5000);
  };

  const getRandomWord = () => {
    const words = ['ReactJS', 'JavaScript', 'Python', 'C++', 'Pytorch', 'RESTful', 'HuggingFace', 
        'FastAPI', 'AWS', 'MongoDB', 'Redis', 'RabbitMQ', 'Debugging', 'Git', 'Kubernetes', 'Celery', 
        'CI/CD', 'GCP', 'RAGs', 'LLMs', 'CUDA', 'Research', 'Pytorch-Lightning', 'Tensorflow', 'Jenkins',
        'SQL', 'Spring', 'AI', 'ML', 'DL', 'Django', 'MLOps', 'GenAI', 'Finetuning', 'Training Pipelines',
        'Optimization', 'Problem Solving', 'Data Structures', 'Github', 'Airflow', 'Optuna', 'Containerization',
        'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'MLFlow', 'Computer Vision', 'NLP',
        'YOLO', 'Stable-Diffusion'];

    // applying bold or italics
    const isBold = Math.random() < 0.5;
    const isItalic = Math.random() < 0.5; 
    
    const randomWord = words[Math.floor(Math.random() * words.length)];
    let stylishWord = randomWord;

    if (isBold) {
      stylishWord = <b>{stylishWord}</b>;
    }
    if (isItalic) {
      stylishWord = <i>{stylishWord}</i>;
    }
    
    return stylishWord;
  };

  // adding new effects every 2 seconds   
  useEffect(() => {
    const interval = setInterval(addRandomText, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {texts.map(text => (
        <div key={text.id} style={text.style}>
          {text.text}
        </div>
      ))}
    </>
  );
};

export default GetSkills;