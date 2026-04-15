"use client";

import { useState, useEffect } from "react";

// ⬇️ ここを自分のSupabase情報に書き換えて！
const SUPABASE_URL = "https://supabase.com/dashboard/project/kcrdqjofbwsaqplxwhjg/settings/api-keys";
const SUPABASE_KEY ="sb_publishable_d_GnRzYjjDtNjZMpk3Oe7g_LPpxdHBL";



const CATEGORIES = [
  "すべて","仕事・起業","人生・生活","メンタルヘルス",
  "お金・投資","家族・人間関係","学校・教育","健康・病気",
];

async function fetchStories(category) {
  let url = `${SUPABASE_URL}/rest/v1/stories?select=*&order=created_at.desc`;
  if (category && category !== "すべて") {
    url += `&category=eq.${encodeURIComponent(category)}`;
  }
  const res = await fetch(url, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
  });
  return res.json();
}

async function submitStory(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/stories`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

function Header({ currentPage, setCurrentPage }) {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(250,248,245,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer", display: "flex", alignItems: "baseline", gap: 8 }} onClick={() => setCurrentPage("home")}>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a" }}>攻略本</span>
          <span style={{ fontSize: 11, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", letterSpacing: 1 }}>KOURYAKUBON</span>
        </div>
        <nav style={{ display: "flex", gap: 6 }}>
          {[{ key: "home", label: "読む" }, { key: "write", label: "書く" }, { key: "about", label: "想い" }].map((item) => (
            <button key={item.key} onClick={() => setCurrentPage(item.key)} style={{ background: currentPage === item.key ? "#1a1a1a" : "transparent", color: currentPage === item.key ? "#faf8f5" : "#666", border: "none", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontFamily: "'Noto Sans JP', sans-serif", cursor: "pointer", fontWeight: currentPage === item.key ? 600 : 400 }}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection({ setCurrentPage }) {
  return (
    <section style={{ minHeight: "85vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 60px" }}>
      <div style={{ maxWidth: 640 }}>
        <div style={{ width: 48, height: 2, background: "#c4a882", margin: "0 auto 40px" }} />
        <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(32px, 7vw, 56px)", fontWeight: 900, color: "#1a1a1a", lineHeight: 1.3, margin: 0 }}>
          誰かの失敗は、<br />誰かの攻略本になる。
        </h1>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 15, color: "#888", lineHeight: 2, marginTop: 32 }}>
          成功の裏には、語られない無数の失敗がある。<br />
          あなたの経験は、今まさに同じ壁にぶつかっている<br />
          誰かにとっての道しるべになる。
        </p>
        <div style={{ marginTop: 48, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setCurrentPage("stories")} style={{ background: "#1a1a1a", color: "#faf8f5", border: "none", padding: "14px 36px", borderRadius: 30, fontSize: 14, fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600, cursor: "pointer" }}>攻略本を読む</button>
          <button onClick={() => setCurrentPage("write")} style={{ background: "transparent", color: "#1a1a1a", border: "1.5px solid #1a1a1a", padding: "14px 36px", borderRadius: 30, fontSize: 14, fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600, cursor: "pointer" }}>体験を書く</button>
        </div>
        <div style={{ marginTop: 72, padding: "28px 32px", background: "rgba(196,168,130,0.08)", borderRadius: 12, borderLeft: "3px solid #c4a882" }}>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, color: "#666", lineHeight: 2, margin: 0 }}>
            読む人には、<strong style={{ color: "#1a1a1a" }}>人生の攻略本</strong>を。<br />
            書く人には、<strong style={{ color: "#1a1a1a" }}>「あなたの人生には価値がある」</strong>という証を。
          </p>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }) {
  return (
    <article style={{ background: "#fff", borderRadius: 12, padding: 28, border: "1px solid rgba(0,0,0,0.05)" }}>
      <div style={{ marginBottom: 14 }}>
        <span style={{ fontSize: 10, color: "#c4a882", fontFamily: "'Noto Sans JP', sans-serif", background: "rgba(196,168,130,0.1)", padding: "3px 10px", borderRadius: 10, fontWeight: 600 }}>
          {story.category || "未分類"}
        </span>
      </div>
      <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", margin: "0 0 10px", lineHeight: 1.5 }}>{story.title}</h3>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: "#888", lineHeight: 1.9, margin: "0 0 20px" }}>
        {story.content?.length > 120 ? story.content.slice(0, 120) + "..." : story.content}
      </p>
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: 14 }}>
        <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'Noto Sans JP', sans-serif" }}>
          {story.anonymous ? "匿名" : story.author || "匿名"}
        </span>
      </div>
    </article>
  );
}

function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchStories(selectedCategory).then((data) => {
      setStories(Array.isArray(data) ? data : []);
      setLoading(false);
    });
  }, [selectedCategory]);

  return (
    <section style={{ padding: "100px 20px 60px", maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 28, fontWeight: 700, color: "#1a1a1a", textAlign: "center", marginBottom: 8 }}>みんなの攻略本</h2>
      <p style={{ textAlign: "center", fontSize: 13, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", marginBottom: 36 }}>誰かの経験が、あなたの道しるべになる</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 36 }}>
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)} style={{ background: selectedCategory === cat ? "#1a1a1a" : "rgba(0,0,0,0.03)", color: selectedCategory === cat ? "#faf8f5" : "#777", border: "none", padding: "6px 16px", borderRadius: 16, fontSize: 12, fontFamily: "'Noto Sans JP', sans-serif", cursor: "pointer" }}>{cat}</button>
        ))}
      </div>
      {loading ? (
        <p style={{ textAlign: "center", color: "#aaa", fontFamily: "'Noto Sans JP', sans-serif", padding: 60 }}>読み込み中...</p>
      ) : stories.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 18, color: "#ccc" }}>まだ投稿がありません</p>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, color: "#bbb", marginTop: 8 }}>最初の体験談を書いてみませんか？</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {stories.map((story) => <StoryCard key={story.id} story={story} />)}
        </div>
      )}
    </section>
  );
}

function WritePage() {
  const [formData, setFormData] = useState({ title: "", category: "", content: "", anonymous: true, author: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) {
      alert("タイトルと体験談を入力してください");
      return;
    }
    setLoading(true);
    const ok = await submitStory(formData);
    setLoading(false);
    if (ok) setSubmitted(true);
    else alert("投稿に失敗しました。もう一度試してください。");
  };

  if (submitted) {
    return (
      <section style={{ padding: "160px 24px", maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(196,168,130,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", fontSize: 28 }}>✦</div>
        <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 24, color: "#1a1a1a", marginBottom: 16 }}>ありがとうございます</h2>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, color: "#888", lineHeight: 2 }}>
          あなたの経験は、きっと誰かの力になります。
        </p>
        <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 15, color: "#c4a882", marginTop: 32, fontWeight: 600 }}>
          あなたの人生には、価値がある。
        </p>
      </section>
    );
  }

  return (
    <section style={{ padding: "100px 20px 60px", maxWidth: 640, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 28, fontWeight: 700, color: "#1a1a1a", textAlign: "center", marginBottom: 8 }}>あなたの経験を書く</h2>
      <p style={{ textAlign: "center", fontSize: 13, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", marginBottom: 48, lineHeight: 1.9 }}>
        失敗も成功も、すべての経験には価値がある。<br />匿名でも投稿できます。
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <label style={{ display: "block", fontSize: 12, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", marginBottom: 8, letterSpacing: 1 }}>タイトル</label>
          <input type="text" placeholder="例：「借金1000万円から立ち直った話」" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} style={{ width: "100%", padding: "14px 18px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, fontSize: 15, fontFamily: "'Noto Sans JP', sans-serif", background: "#fff", outline: "none", boxSizing: "border-box" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 12, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", marginBottom: 8, letterSpacing: 1 }}>カテゴリー</label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.filter((c) => c !== "すべて").map((cat) => (
              <button key={cat} onClick={() => setFormData({ ...formData, category: cat })} style={{ background: formData.category === cat ? "#1a1a1a" : "rgba(0,0,0,0.03)", color: formData.category === cat ? "#faf8f5" : "#777", border: "none", padding: "8px 16px", borderRadius: 16, fontSize: 12, fontFamily: "'Noto Sans JP', sans-serif", cursor: "pointer" }}>{cat}</button>
            ))}
          </div>
        </div>
        <div>
          <label style={{ display: "block", fontSize: 12, color: "#999", fontFamily: "'Noto Sans JP', sans-serif", marginBottom: 8, letterSpacing: 1 }}>あなたの体験</label>
          <textarea placeholder="何があったのか、そこから何を学んだのか、今同じ状況にいる人に伝えたいことは何か。自由に書いてください。" value={formData.content} onChange={(e) => setFormData({ ...formData, content: e.target.value })} rows={12} style={{ width: "100%", padding: "16px 18px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, fontSize: 14, fontFamily: "'Noto Sans JP', sans-serif", background: "#fff", outline: "none", resize: "vertical", lineHeight: 2, boxSizing: "border-box" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div onClick={() => setFormData({ ...formData, anonymous: !formData.anonymous })} style={{ width: 44, height: 24, borderRadius: 12, background: formData.anonymous ? "#1a1a1a" : "#ddd", cursor: "pointer", position: "relative", transition: "background 0.2s ease", flexShrink: 0 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: formData.anonymous ? 23 : 3, transition: "left 0.2s ease" }} />
          </div>
          <span style={{ fontSize: 13, color: "#666", fontFamily: "'Noto Sans JP', sans-serif" }}>匿名で投稿する</span>
        </div>
        {!formData.anonymous && (
          <input type="text" placeholder="ペンネーム" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} style={{ width: "100%", padding: "14px 18px", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 10, fontSize: 14, fontFamily: "'Noto Sans JP', sans-serif", background: "#fff", outline: "none", boxSizing: "border-box" }} />
        )}
        <div style={{ background: "rgba(196,168,130,0.08)", borderRadius: 10, padding: "20px 24px", borderLeft: "3px solid #c4a882" }}>
          <p style={{ fontSize: 13, color: "#666", fontFamily: "'Noto Sans JP', sans-serif", lineHeight: 1.9, margin: 0 }}>
            💰 収益還元について：収益の<strong style={{ color: "#1a1a1a" }}>50%があなたに還元</strong>されます。
          </p>
        </div>
        <button onClick={handleSubmit} disabled={loading} style={{ background: "#1a1a1a", color: "#faf8f5", border: "none", padding: "16px", borderRadius: 30, fontSize: 15, fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", letterSpacing: 1, marginTop: 8, opacity: loading ? 0.6 : 1 }}>
          {loading ? "投稿中..." : "投稿する"}
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section style={{ padding: "120px 24px 60px", maxWidth: 600, margin: "0 auto" }}>
      <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 28, fontWeight: 700, color: "#1a1a1a", textAlign: "center", marginBottom: 48 }}>攻略本の想い</h2>
      <div style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, color: "#555", lineHeight: 2.4 }}>
        <p>世の中には成功者の自伝が溢れています。<br />でも本当に価値があるのは、失敗した人たちの話ではないでしょうか。</p>
        <p style={{ marginTop: 28 }}>今まさに苦しんでいる人が必要としているのは<br />「同じ場所から這い上がった人の、具体的な一歩」です。</p>
        <div style={{ margin: "40px 0", padding: "32px", background: "rgba(196,168,130,0.08)", borderRadius: 12, textAlign: "center" }}>
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 18, color: "#1a1a1a", lineHeight: 2, fontWeight: 600, margin: 0 }}>
            ホームレスの人でも携帯を持つ時代。<br />誰もが「書く人」になれる。<br />誰もが「誰かの攻略本」になれる。
          </p>
        </div>
        <p>攻略本は、体験談の収益の<strong style={{ color: "#1a1a1a" }}>50%を筆者に還元</strong>します。</p>
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ width: 48, height: 2, background: "#c4a882", margin: "0 auto 24px" }} />
          <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 16, color: "#c4a882", fontWeight: 600 }}>
            読む人には、攻略本を。<br />書く人には、生きた証を。
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "36px 24px", textAlign: "center", marginTop: 60 }}>
      <p style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, color: "#ccc", letterSpacing: 2 }}>攻略本</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 11, color: "#ddd", marginTop: 8 }}>すべての人生に、価値がある。</p>
    </footer>
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div style={{ minHeight: "100vh", background: "#faf8f5" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && (
        <>
          <HeroSection setCurrentPage={setCurrentPage} />
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px 60px" }}>
            <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 22, fontWeight: 700, color: "#1a1a1a", marginBottom: 24 }}>最近の攻略本</h2>
            <StoriesSection />
          </div>
        </>
      )}
      {currentPage === "stories" && <StoriesPage />}
      {currentPage === "write" && <WritePage />}
      {currentPage === "about" && <AboutPage />}
      <Footer />
    </div>
  );
}

function StoriesSection() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetchStories("すべて").then((data) => {
      setStories(Array.isArray(data) ? data.slice(0, 4) : []);
    });
  }, []);
  if (stories.length === 0) return (
    <p style={{ color: "#bbb", fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14 }}>まだ投稿がありません。最初の体験談を書いてみませんか？</p>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
      {stories.map((story) => <StoryCard key={story.id} story={story} />)}
    </div>
  );
}
