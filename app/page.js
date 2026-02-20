"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
const img1 = "/small.jpg";
const img2 = "/IMG2.jpeg";
const img3 = "/tired.jpg";
const img4 = "/not.webp";

const reviews = [
  { name: "వెంకట్, రాజమండ్రి", text: "నిజం చెప్పాలంటే నాకు ముందు చాలా చిన్నగా ఉండేది, సెక్స్ కూడా 2 నిమిషాల్లోనే అయిపోయేది. KK GOLD వాడాక సైజులో తేడా వచ్చింది, ఇప్పుడు 40-50 నిమిషాలు ఆగకుండా చేస్తున్నాను. నా భార్య చాలా హ్యాపీ!", stars: 5 },
  { name: "మధు, తిరుపతి", text: "చాలా మందులు వాడాను కానీ ఇది నెంబర్ 1. నా అంగం గట్టిదనం పెరిగింది. రాత్రికి 3 సార్లు చేసినా అలసట రావడం లేదు. టైమింగ్ పెంచుకోవాలి అనుకునేవారికి ఇది బెస్ట్.", stars: 5 },
  { name: "నరేష్, విజయవాడ", text: "50 నిమిషాల వరకు టైమింగ్ పెరిగింది. పెనిస్ సైజులో కూడా స్పష్టమైన మార్పు కనిపిస్తోంది. ఇది కేవలం మందు కాదు, ఒక అద్భుతం!", stars: 5 },
  { name: "కిరణ్, గుంటూరు", text: "ముందు సన్నగా, వంకరగా ఉండేది. KK GOLD వాడిన 10 రోజులకే లావు పెరగడం గమనించాను. టైమింగ్ కూడా 2 నిమిషాల నుండి 45 నిమిషాలకు పెరిగింది.", stars: 5 },
  { name: "అజయ్, హైదరాబాద్", text: "ముందు 1 నిమిషం కూడా ఉండేవాడిని కాదు. ఇప్పుడు గంట సేపు చేసినా అస్సలు అలసట రాదు. సైజు మరియు లావు కూడా పెరిగింది.", stars: 5 },
  { name: "శివ, వైజాగ్", text: "నా లైఫ్ లో ఇది బెస్ట్ డెసిషన్. ఎరెక్షన్ చాలా గట్టిగా వస్తుంది. నా భాగస్వామి పూర్తి సంతృప్తిగా ఉంది. ధన్యవాదాలు!", stars: 5 }
];

const processSteps = [
  {
    step: "Step 1",
    day: "Day 1-2",
    text: "నరాలకు బలం & రక్త ప్రసరణ పెరుగుతుంది.",
    media: "/img1.webp",
    fallback: "/sample-1.svg",
  },
  {
    step: "Step 2",
    day: "Day 3-7",
    text: "స్టామినా పెరిగి 20 నిమిషాల వరకు సెక్స్ చేయగలరు.",
    media: "/img4.webp",
    fallback: "/sample-2.svg",
  },
  {
    step: "Step 3",
    day: "Day 15+",
    text: "అంగం పొడవు మరియు లావులో స్పష్టమైన మార్పు.",
    media: "/im6.gif",
    fallback: "/sample-3.svg",
  },
  {
    step: "Step 4",
    day: "Day 30+",
    text: "50 నిమిషాల వరకు పర్మనెంట్ టైమింగ్ & పవర్.",
    media: "/gif4.gif",
    fallback: "/gallery-1.svg",
  },
];

export default function HomePage() {
  const [stock, setStock] = useState(15);
  const [timeLeft, setTimeLeft] = useState(43200); // 12 Hours

  // Stock Reduction Logic
  useEffect(() => {
    const stockTimer = setInterval(() => {
      setStock((prev) => {
        if (prev <= 3) return 15; // Reset to 15 after hitting 3
        return prev - 1;
      });
    }, 60000); // Every 60 seconds
    return () => clearInterval(stockTimer);
  }, []);

  // 12-Hour Timer Logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 43200 : prev - 1));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const message = `వందనం! నేను KK GOLD ఆర్డర్ చేయాలనుకుంటున్నాను.%0A%0A*పేరు:* ${name}%0A*ఫోన్:* ${phone}%0A*చిరునామా:* ${address}%0A*ధర:* 2999 Rs`;
    window.open(`https://wa.me/917842121315?text=${message}`, '_blank');
  };

  return (
    <div className="mobile-container">
      {/* 1. STICKY URGENCY HEADER */}
      <div className="urgency-header-top">
        <div className="stock-counter">⚠️ స్టాక్: కేవలం {stock} ప్యాకెట్లు మాత్రమే ఉన్నాయి!</div>
        <div className="countdown-timer">ఆఫర్ ముగియడానికి: <span>{formatTime(timeLeft)}</span></div>
      </div>
<section className="guarantee-banner-new">
        <h2 className="guarantee-title">హామీ! ఫలితాలు</h2>
        <h3 className="guarantee-subtitle">కేవలం 3 రోజుల్లో</h3>
        <div className="guarantee-price">2999 RS</div>
      </section>
      {/* 2. PRODUCT HERO */}
      <section className="product-hero">
        <div className="product-main-img">
          <Image src="/kkgold.jpeg" alt="KK Gold" width={500} height={500} priority />
        </div>
        <div className="product-info">
          <h1>KK GOLD (Premium)</h1>
          <div className="doctor-badge">🩺 Certified Ayurvedic Formula</div>
          <div className="price-tag">
            <span className="current">₹2999</span>
            <span className="old">₹4999</span>
            <span className="save">OFFER PRICE</span>
          </div>
          <p className="hook-line">🔥 50 నిమిషాల నాన్-స్టాప్ పర్ఫార్మెన్స్ గ్యారెంటీ! 🔥</p>
        </div>
      </section>

      {/* 3. PROBLEM GRID */}

<section className="problem-grid-section">
  <h2 className="section-title">
    స్త్రీల అసంతృప్తికి ప్రధాన కారణాలు:
  </h2>

  <div className="image-grid-4">
    
    <div className="grid-item">
      <div className="img-frame">
        <img src={img1} alt="చిన్న మరియు సన్నని అంగం" />
      </div>
      <p>చిన్న మరియు సన్నని అంగం</p>
    </div>

    <div className="grid-item">
      <div className="img-frame">
        <img src={img2} alt="అకాల స్ఖలనం" />
      </div>
      <p>అకాల స్ఖలనం (1-5 నిమిషాలు)</p>
    </div>

    <div className="grid-item">
      <div className="img-frame">
        <img src={img3} alt="నరాల బలహీనత" />
      </div>
      <p>నరాల బలహీనత & అలసట</p>
    </div>

    <div className="grid-item">
      <div className="img-frame">
        <img src={img4} alt="లైంగిక కోరిక లేకపోవడం" />
      </div>
      <p>లైంగిక కోరిక లేకపోవడం</p>
    </div>

  </div>
</section>

      {/* 5. BIG RESULTS BANNER */}
      <section className="mega-banner">
         <h2>KK GOLD తో అద్భుత ప్రయోజనాలు:</h2>
         <div className="benefits-list">
            <div className="benefit">🚀 50 నిమిషాల వరకు టైమింగ్</div>
            <div className="benefit">📏 సైజు మరియు గట్టిదనం పెరుగుదల</div>
            <div className="benefit">🔋 రోజంతా విపరీతమైన ఎనర్జీ</div>
            <div className="benefit">💯 100% ఆయుర్వేదిక్ - నో సైడ్ ఎఫెక్ట్స్</div>
         </div>
      </section>

      {/* 4. EXPANDED "HOW IT WORKS" */}
      <section className="process-section">
        <h2 className="section-title">ఇది ఎలా పనిచేస్తుంది? (4 దశలు)</h2>
        <div className="process-grid-4">
          {processSteps.map((item) => (
            <div className="process-box" key={item.step}>
              <div className="process-img-frame">
                <img
                  className="process-media"
                  src={item.media}
                  alt={item.day}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = item.fallback;
                  }}
                />
              </div>
              <span className="step-tag">{item.step}</span>
              <h4>{item.day}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

 {/* 5.5 REFINED ORDER FORM SECTION */}
      <section className="order-form-section">
        <div className="form-container">
          <h2 className="form-title">ఆర్డర్ నిర్ధారించడానికి మీ వివరాలను ఇక్కడ పూరించండి</h2>
          <p className="form-price">Special Offer: 2999 Rs !</p>
          <div className="online-promo-card">
      <div className="promo-badge">SUPER SAVER ⚡</div>
      <p className="promo-main-text">ఆన్‌లైన్ పేమెంట్ చేస్తే  **అదనంగా 10% తగ్గింపు!**</p>
      <div className="promo-price-calc">
        <span className="final-price">Final Price: ₹2699 Only</span>
      </div>
      <p className="promo-sub-text">Offer valid on UPI / PhonePe / Google Pay</p>
    </div>
          <form className="medical-form" onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="మీ పేరు" required />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <div className="phone-input">
                <span>+91</span>
                <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="XXXXXXXXXX" required />
              </div>
            </div>

            <div className="input-group">
              <label>Address</label>
              <textarea name="address" rows="3" placeholder="మీ పూర్తి చిరునామా మరియు పిన్ కోడ్" required></textarea>
            </div>

            <button type="submit" className="confirm-btn-slim">
              CONFIRM ORDER NOW
            </button>
          </form>

          {/* NEW CALL SECTION */}
         <div className="expert-consultation-card">
          <div className="expert-badge">👨‍⚕️ EXPERT ADVICE</div>
          <p className="expert-text">కాల్‌లో నిపుణులైన వైద్యుల నుండి ఉచిత సంప్రదింపుల కోసం</p>
          <a href="tel:7842121315" className="stylish-call-btn">
            <span className="phone-icon-vibrate">📞</span> ఇప్పుడే కాల్ చేయండి
          </a>
        </div>
          <div className="form-footer">
            <p>✅ సమస్యలతో బాధపడుతున్న వేలమంది పురుషులకు సరైన పరిష్కారాన్ని అందించి సహాయం చేయడం</p>
            <div className="availability-tag">
               <span className="dot"></span> We Are Available Now
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS */}
      <section className="reviews-section">
        <h2 className="section-title">కస్టమర్ల నిజమైన సక్సెస్ స్టోరీస్</h2>
        {reviews.map((r, i) => (
          <div key={i} className="bold-review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"{r.text}"</p>
            <div className="review-meta">
              <span className="location">📍 {r.name}</span>
              <span className="verified-check">✅ Verified</span>
            </div>
          </div>
        ))}
      </section>

      {/* 8. BRAND & OFFICIAL FOOTER */}
      <section className="brand-footer-section">
        <div className="brand-card">
          
          <h3 className="brand-name">KK Gold</h3>
          <p className="brand-motto">REVITALIZE YOUR LIFE</p>
          <p className="company-official">KK HERBAL MARRIAGE</p>
        </div>

        <div className="footer-contact-info">
          <p className="footer-link">📞 +91 7842121315</p>
          <p className="footer-link">✉️ info@kkherbalmarriage.com</p>
          <div className="secure-badges">
            <span>🔒 100% Secure Payment</span>
            <span>📦 Discreet Packaging</span>
          </div>
        </div>

        <div className="disclaimer-text">
          *గమనిక: ఇది ఒక ఆయుర్వేద వెల్నెస్ ఉత్పత్తి. ఫలితాలు వ్యక్తిని బట్టి మారవచ్చు. 
          తీవ్రమైన ఆరోగ్య సమస్యలు ఉన్నవారు వైద్యుని సంప్రదించాలి.
        </div>
      </section>

      {/* 7. STICKY FOOTER */}
     <div className="sticky-footer-slim">
  <div className="live-stock-ticker">
    🔥 ఇప్పుడే మరొకరు ఆర్డర్ చేశారు! (స్టాక్: <span>{stock} మాత్రమే</span>)
  </div>
  <a 
    href={`https://wa.me/917842121315?text=I%20want%20to%20order%20KK%20GOLD`} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="wa-order-btn-slim"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp" 
      className="wa-icon-small" 
    />
    వాట్సాప్ ద్వారా ఇప్పుడే ఆర్డర్ చేయండి
  </a>
</div>
    </div>
  );
}
