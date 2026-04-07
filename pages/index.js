import React, { useState } from 'react';

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
      <div style={{ minHeight: '100vh', backgroundColor: '#F8F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px', color: '#1c1917' }}>당신의 성향은?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button onClick={() => { setMbti('E'); setStep('result'); }} style={{ padding: '15px', backgroundColor: '#1c1917', color: 'white', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>야외 활동이 좋다</button>
            <button onClick={() => { setMbti('I'); setStep('result'); }} style={{ padding: '15px', border: '2px solid #1c1917', backgroundColor: 'transparent', color: '#1c1917', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>집에서 쉬는 게 좋다</button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const resultDog = mbti === 'E' ? dogs[4] : dogs[0];
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F8F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <div>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: '#1c1917' }}>당신은 {resultDog.name} 타입!</h2>
          <div style={{ width: '250px', height: '250px', margin: '0 auto 20px', borderRadius: '50%', border: '8px solid white', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
            <img src={resultDog.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={resultDog.name} />
          </div>
          <p style={{ color: '#78716c', marginBottom: '30px' }}>{resultDog.desc}</p>
          <button onClick={() => setStep('home')} style={{ backgroundColor: 'transparent', border: 'none', color: '#a8a29e', textDecoration: 'underline', cursor: 'pointer' }}>처음으로</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F4F0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ height: '40vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
        <div style={{ relative: 'absolute', textAlign: 'center', color: 'white', zIndex: 1 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>THE DOG ARCHIVE</h1>
          <button onClick={startQuiz} style={{ padding: '12px 35px', backgroundColor: 'white', color: 'black', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>MBTI TEST START</button>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {dogs.map(dog => (
            <div key={dog.id} style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #f5f5f4' }}>
              <div style={{ height: '300px' }}>
                <img src={dog.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={dog.name} />
              </div>
              <div style={{ padding: '25px' }}>
                <span style={{ fontSize: '10px', color: '#ea580c', fontWeight: 'bold', letterSpacing: '2px' }}>{dog.category}</span>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '5px' }}>{dog.name}</h3>
                <p style={{ fontSize: '14px', color: '#78716c', marginTop: '10px' }}>{dog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
