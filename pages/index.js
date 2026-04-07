import React, { useState } from 'react';

const dogs = [
  { id: 1, category: 'Small', name: '말티즈', desc: '활발하고 사랑받길 원함', img: 'https://images.unsplash.com/photo-1533238616458-2fe33e210e7c?w=600' },
  { id: 2, category: 'Small', name: '푸들', desc: '영리하고 털 안 빠짐', img: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?w=600' },
  { id: 6, category: 'Medium', name: '시바견', desc: '독립적이고 깔끔함', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600' },
  { id: 7, category: 'Medium', name: '웰시코기', desc: '지능적이고 사교적임', img: 'https://images.unsplash.com/photo-1519098901907-287ddde30e13?w=600' },
  { id: 11, category: 'Large', name: '골든 리트리버', desc: '천사견 인내심 최강', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600' },
  { id: 12, category: 'Large', name: '사모예드', desc: '미소천사 활동가', img: 'https://images.unsplash.com/photo-1529429617329-8a79b0579756?w=600' },
  { id: 13, category: 'Large', name: '시베리안 허스키', desc: '강한 지구력의 소유자', img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600' },
  { id: 14, category: 'Large', name: '저먼 셰퍼드', desc: '용맹하고 영리한 수호자', img: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600' },
  { id: 15, category: 'Large', name: '달마시안', desc: '강직한 러닝 파트너', img: 'https://images.unsplash.com/photo-1563883494774-007323d3271a?w=600' }
];

const questions = [
  { id: 1, q: "주말에는 주로 무엇을 하시나요?", a: "밖으로 나간다", b: "집에서 쉰다", type: "EI" },
  { id: 2, q: "새로운 일을 시작할 때 당신은?", a: "일단 해본다", b: "철저히 계획한다", type: "SN" },
  { id: 3, q: "친구의 고민을 들었을 때 당신은?", a: "현실적인 조언", b: "깊은 감정 공감", type: "TF" },
  { id: 4, q: "약속 장소에 도착하는 스타일은?", a: "딱 맞춰 가거나 일찍", b: "유동적으로 도착", type: "JP" }
];

export default function DogArchive() {
  const [step, setStep] = useState('home');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });

  const handleAnswer = (choice) => {
    const type = questions[currentQ].type;
    const answerType = choice === 'a' ? type[0] : type[1];
    setScores({ ...scores, [answerType]: scores[answerType] + 1 });

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStep('result');
    }
  };

  const getResult = () => {
    return scores.E >= scores.I ? dogs[4] : dogs[0];
  };

  if (step === 'quiz') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F8F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', color: '#ea580c', fontWeight: 'bold' }}>QUESTION {currentQ + 1}/4</span>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0 30px', color: '#1c1917' }}>{questions[currentQ].q}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button onClick={() => handleAnswer('a')} style={{ padding: '18px', backgroundColor: '#1c1917', color: 'white', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>{questions[currentQ].a}</button>
            <button onClick={() => handleAnswer('b')} style={{ padding: '18px', border: '2px solid #1c1917', backgroundColor: 'transparent', color: '#1c1917', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold' }}>{questions[currentQ].b}</button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'result') {
    const resultDog = getResult();
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#F8F4F0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <div>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: '#1c1917' }}>당신의 운명은 {resultDog.name}!</h2>
          <div style={{ width: '250px', height: '250px', margin: '0 auto 20px', borderRadius: '50%', border: '8px solid white', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
            <img src={resultDog.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={resultDog.name} />
          </div>
          <p style={{ color: '#78716c', marginBottom: '30px', maxWidth: '300px', margin: '0 auto 30px' }}>{resultDog.desc}</p>
          <button onClick={() => {setStep('home'); setCurrentQ(0); setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });}} style={{ backgroundColor: 'transparent', border: 'none', color: '#a8a29e', textDecoration: 'underline', cursor: 'pointer' }}>처음으로 돌아가기</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F4F0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ height: '45vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)' }}></div>
        <div style={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>
          <h1 style={{ fontSize: '56px', fontWeight: 'bold', letterSpacing: '-2px', marginBottom: '15px' }}>THE DOG ARCHIVE</h1>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px' }}>나와 꼭 닮은 강아지는 누구일까요?</p>
          <button onClick={() => setStep('quiz')} style={{ padding: '15px 45px', backgroundColor: '#ea580c', color: 'white', borderRadius: '40px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>MBTI TEST START</button>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '40px', color: '#1c1917', textAlign: 'center' }}>DOG COLLECTION</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
          {dogs.map(dog => (
            <div key={dog.id} style={{ backgroundColor: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #e5e5e0' }}>
              <div style={{ height: '320px', width: '100%' }}>
                <img src={dog.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={dog.name} />
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'inline-block', padding: '6px 14px', backgroundColor: '#ea580c', borderRadius: '20px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', color: 'white', fontWeight: 'bold', letterSpacing: '0.5px' }}>{dog.category}</span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1c1917' }}>{dog.name}</h3>
                <p style={{ fontSize: '15px', color: '#78716c', marginTop: '12px', lineHeight: '1.6' }}>{dog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
