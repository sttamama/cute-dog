import React, { useState } from 'react';
import { ChevronRight, Dog, Heart, RotateCcw } from 'lucide-react';

const dogs = [
  { id: 1, category: 'Small', name: '말티즈', desc: '활발하고 사랑받길 원함', img: 'https://images.unsplash.com/photo-1533238616458-2fe33e210e7c?w=600' },
  { id: 2, category: 'Small', name: '푸들', desc: '영리하고 털 안 빠짐', img: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?w=600' },
  { id: 6, category: 'Medium', name: '시바견', desc: '독립적이고 깔끔함', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600' },
  { id: 7, category: 'Medium', name: '웰시코기', desc: '지능적이고 사교적임', img: 'https://images.unsplash.com/photo-1519098901907-287ddde30e13?w=600' },
  { id: 11, category: 'Large', name: '골든 리트리버', desc: '천사견 인내심 최강', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600' },
  { id: 12, category: 'Large', name: '사모예드', desc: '미소천사 활동가', img: 'https://images.unsplash.com/photo-1529429617329-8a79b0579756?w=600' },
  { id: 13, category: 'Large', name: '시베리안 허스키', desc: '강한 지구력의 소유자', img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600' },
  { id: 14, category: 'Large', name: '저먼 셰퍼드', desc: '용맹하고 영리한 수호자', img: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600' },
  { id: 15, category: 'Large', name: '달마시안', desc: '강직한 러닝 파트너', img: 'https://images.unsplash.com/photo-1563883494774-007323d3271a?w=600' }
];

export default function DogArchive() {
  const [step, setStep] = useState('home');
  const [mbti, setMbti] = useState('');

  const startQuiz = () => { setStep('quiz'); setMbti(''); };

  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-8">당신의 성향은?</h2>
          <div className="space-y-4">
            <button onClick={() => { setMbti('E'); setStep('result'); }} className="w-full py-4 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition">야외 활동이 좋다</button>
            <button onClick={() => { setMbti('I'); setStep('result'); }} className="w-full py-4 border-2 border-stone-800 text-stone-800 rounded-xl hover:bg-stone-50 transition">집에서 쉬는 게 좋다</button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const resultDog = mbti === 'E' ? dogs[4] : dogs[0];
    return (
      <div className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold italic">당신의 운명은 {resultDog.name}!</h2>
          <img src={resultDog.img} className="w-64 h-64 object-cover mx-auto rounded-full border-8 border-white shadow-2xl" />
          <p className="text-stone-500">{resultDog.desc}</p>
          <button onClick={() => setStep('home')} className="flex items-center mx-auto text-sm text-stone-400 underline"><RotateCcw size={16} className="mr-2" /> 처음으로</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F4F0] min-h-screen">
      <header className="h-[50vh] relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">THE DOG ARCHIVE</h1>
          <button onClick={startQuiz} className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">MBTI 테스트 시작</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {dogs.map(dog => (
            <div key={dog.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src={dog.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <span className="text-[10px] tracking-widest text-stone-400 uppercase font-bold">{dog.category}</span>
              <h3 className="text-xl font-bold mt-1">{dog.name}</h3>
              <p className="text-sm text-stone-500 mt-2">{dog.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
