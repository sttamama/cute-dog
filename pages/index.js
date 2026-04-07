import React, { useState } from 'react';

// lucide-react 아이콘을 쓰지 않고 기본 텍스트로 대체하여 빌드 에러 확률을 0%로 만듭니다.
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

  if (step === 'quiz') {
    return (
      <div className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-8 text-stone-800">당신의 성향은?</h2>
          <div className="space-y-4">
            <button onClick={() => { setMbti('E'); setStep('result'); }} className="w-full py-4 bg-stone-800 text-white rounded-xl hover:bg-stone-700 transition font-medium">야외 활동이 좋다</button>
            <button onClick={() => { setMbti('I'); setStep('result'); }} className="w-full py-4 border-2 border-stone-800 text-stone-800 rounded-xl hover:bg-stone-50 transition font-medium">집에서 쉬는 게 좋다</button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const resultDog = mbti === 'E' ? dogs[4] : dogs[0];
    return (
      <div className="min-h-screen bg-[#F8F4F0] flex items-center justify-center p-6 text-center font-sans">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold italic text-stone-800">당신의 운명은 {resultDog.name}!</h2>
          <div className="w-64 h-64 mx-auto rounded-full border-8 border-white shadow-2xl overflow-hidden">
            <img src={resultDog.img} className="w-full h-full object-cover" alt={resultDog.name} />
          </div>
          <p className="text-stone-500 max-w-xs mx-auto">{resultDog.desc}</p>
          <button onClick={() => setStep('home')} className="text-sm text-stone-400 underline decoration-stone-300">처음으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F4F0] min-h-screen font-sans">
      <header className="h-[40vh] relative overflow-hidden flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">THE DOG ARCHIVE</h1>
          <button onClick={() => setStep('quiz')} className="px-10 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition shadow-lg">MBTI TEST START</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {dogs.map(dog => (
            <div key={dog.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="aspect-square overflow-hidden">
                <img src={dog.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={dog.name} />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.2em] text-orange-600 uppercase font-black">{dog.category}</span>
                <h3 className="text-xl font-bold mt-1 text-stone-800">{dog.name}</h3>
                <p className="text-sm text-stone-500 mt-2 leading-relaxed">{dog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
