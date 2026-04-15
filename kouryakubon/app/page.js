"use client";

import { useState } from "react";

const SAMPLE_STORIES = [
  {
    id: 1,
    title: "3回の起業失敗で学んだこと",
    author: "匿名（42歳・男性）",
    category: "仕事・起業",
    excerpt:
      "27歳で最初の会社を立ち上げた。自信満々だった。でも3年で潰れた。2回目も、3回目も。借金は膨れ上がり、妻にも去られた。でも今、4回目の挑戦で...",
    donations: 12400,
    readers: 3420,
    tag: "失敗談",
  },
  {
    id: 2,
    title: "ホームレスから這い上がった2年間",
    author: "田中（仮名・35歳）",
    category: "人生・生活",
    excerpt:
      "会社が倒産して、家賃が払えなくなって、気づいたら公園のベンチで寝てた。最初の夜は怖くて眠れなかった。でもある日、図書館で一冊の本に出会って...",
    donations: 28900,
    readers: 8910,
    tag: "失敗談",
  },
  {
    id: 3,
    title: "うつ病で5年間引きこもった話",
    author: "さくら（29歳・女性）",
    category: "メンタルヘルス",
    excerpt:
      "大学2年の時、急に体が動かなくなった。布団から出られない日が続いた。親は「怠けてる」と言った。友達は離れていった。でも一人だけ...",
    donations: 45200,
    readers: 15200,
    tag: "失敗談",
  },
  {
    id: 4,
    title: "詐欺に遭って全財産を失った日",
    author: "匿名（55歳・男性）",
    category: "お金・投資",
    excerpt:
      "退職金の2000万円を「確実に増える」という投資話に全額突っ込んだ。妻には内緒だった。3ヶ月後、連絡が取れなくなった。頭が真っ白になった...",
    donations: 8700,
    readers: 6340,
    tag: "失敗談",
  },
  {
    id: 5,
    title: "離婚して気づいた本当に大切なもの",
    author: "よしこ（仮名・48歳）",
    category: "家族・人間関係",
    excerpt:
      "20年連れ添った夫から突然「別れたい」と言われた。子供は2人。世界が崩れた気がした。でも1年経って、あの時の自分に言いたいことがある...",
    donations: 19300,
    readers: 11200,
    tag: "経験談",
  },
];

const CATEGORIES = [
  "すべて",
  "仕事・起業",
  "人生・生活",
  "メンタルヘルス",
  "お金・投資",
  "家族・人間関係",
  "学校・教育",
  "健康・病気",
];

function Header({ currentPage, setCurrentPage }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(250, 248, 245, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "baseline",
            gap: 8,
          }}
          onClick={() => setCurrentPage("home")}
        >
          <span
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#1a1a1a",
              letterSpacing: -0.5,
            }}
          >
            攻略本
          </span>
          <span
            style={{
              fontSize: 11,
              color: "#999",
              fontFamily: "'Noto Sans JP', sans-serif",
              letterSpacing: 1,
            }}
          >
            KOURYAKUBON
          </span>
        </div>
        <nav style={{ display: "flex", gap: 6 }}>
          {[
            { key: "home", label: "読む" },
            { key: "write", label: "書く" },
            { key: "about", label: "想い" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              style={{
                background:
                  currentPage === item.key ? "#1a1a1a" : "transparent",
                color: currentPage === item.key ? "#faf8f5" : "#666",
                border: "none",
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontFamily: "'Noto Sans JP', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: currentPage === item.key ? 600 : 400,
              }}
            >
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
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 40px)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
        <div
          style={{
            width: 48,
            height: 2,
            background: "#c4a882",
            margin: "0 auto 40px",
            borderRadius: 1,
          }}
        />
        <h1
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: "clamp(32px, 7vw, 56px)",
            fontWeight: 900,
            color: "#1a1a1a",
            lineHeight: 1.3,
            letterSpacing: -1,
            margin: 0,
          }}
        >
          誰かの失敗は、
          <br />
          誰かの攻略本になる。
        </h1>
        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 15,
            color: "#888",
            lineHeight: 2,
            marginTop: 32,
            letterSpacing: 0.5,
          }}
        >
          成功の裏には、語られない無数の失敗がある。
          <br />
          あなたの経験は、今まさに同じ壁にぶつかっている
          <br />
          誰かにとっての道しるべになる。
        </p>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setCurrentPage("stories")}
            style={{
              background: "#1a1a1a",
              color: "#faf8f5",
              border: "none",
              padding: "14px 36px",
              borderRadius: 30,
              fontSize: 14,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: 1,
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            攻略本を読む
          </button>
          <button
            onClick={() => setCurrentPage("write")}
            style={{
              background: "transparent",
              color: "#1a1a1a",
              border: "1.5px solid #1a1a1a",
              padding: "14px 36px",
              borderRadius: 30,
              fontSize: 14,
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: 1,
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            体験を書く
          </button>
        </div>
        <div
          style={{
            marginTop: 72,
            padding: "28px 32px",
            background: "rgba(196, 168, 130, 0.08)",
            borderRadius: 12,
            borderLeft: "3px solid #c4a882",
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: 14,
              color: "#666",
              lineHeight: 2,
              margin: 0,
            }}
          >
            読む人には、
            <strong style={{ color: "#1a1a1a" }}>人生の攻略本</strong>を。
            <br />
            書く人には、
            <strong style={{ color: "#1a1a1a" }}>
              「あなたの人生には価値がある」
            </strong>
            という証を。
          </p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: 60,
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { num: "1,247", label: "投稿された体験談" },
          { num: "¥2.8M", label: "筆者への還元額" },
          { num: "89,340", label: "人の攻略本になった" },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#c4a882",
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: 11,
                color: "#aaa",
                marginTop: 4,
                letterSpacing: 1,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StoryCard({ story, onClick }) {
  return (
    <article
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 28,
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: "1px solid rgba(0,0,0,0.05)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#c4a882",
            fontFamily: "'Noto Sans JP', sans-serif",
            background: "rgba(196,168,130,0.1)",
            padding: "3px 10px",
            borderRadius: 10,
            fontWeight: 600,
          }}
        >
          {story.category}
        </span>
        <span
          style={{
            fontSize: 10,
            color: story.tag === "失敗談" ? "#c47a6a" : "#6a9c78",
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 600,
          }}
        >
          {story.tag}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 17,
          fontWeight: 700,
          color: "#1a1a1a",
          margin: "0 0 10px",
          lineHeight: 1.5,
        }}
      >
        {story.title}
      </h3>
      <p
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 13,
          color: "#888",
          lineHeight: 1.9,
          margin: "0 0 20px",
        }}
      >
        {story.excerpt}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(0,0,0,0.05)",
          paddingTop: 14,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "#aaa",
            fontFamily: "'Noto Sans JP', sans-serif",
          }}
        >
          {story.author}
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          <span style={{ fontSize: 11, color: "#bbb" }}>
            ♡ ¥{story.donations.toLocaleString()}
          </span>
          <span style={{ fontSize: 11, color: "#bbb" }}>
            👁 {story.readers.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}

function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const filtered =
    selectedCategory === "すべて"
      ? SAMPLE_STORIES
      : SAMPLE_STORIES.filter((s) => s.category === selectedCategory);

  return (
    <section
      style={{ padding: "100px 20px 60px", maxWidth: 900, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        みんなの攻略本
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          color: "#999",
          fontFamily: "'Noto Sans JP', sans-serif",
          marginBottom: 36,
        }}
      >
        誰かの経験が、あなたの道しるべになる
      </p>
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 36,
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              background:
                selectedCategory === cat ? "#1a1a1a" : "rgba(0,0,0,0.03)",
              color: selectedCategory === cat ? "#faf8f5" : "#777",
              border: "none",
              padding: "6px 16px",
              borderRadius: 16,
              fontSize: 12,
              fontFamily: "'Noto Sans JP', sans-serif",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {filtered.map((story) => (
          <StoryCard key={story.id} story={story} onClick={() => {}} />
        ))}
      </div>
    </section>
  );
}

function WritePage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    anonymous: true,
    penName: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section
        style={{
          padding: "160px 24px",
          maxWidth: 560,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(196,168,130,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            fontSize: 28,
          }}
        >
          ✦
        </div>
        <h2
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: 24,
            color: "#1a1a1a",
            marginBottom: 16,
          }}
        >
          ありがとうございます
        </h2>
        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 14,
            color: "#888",
            lineHeight: 2,
          }}
        >
          あなたの経験は、きっと誰かの力になります。
          <br />
          投稿は審査後に公開されます。
          <br />
          収益の50%はあなたに還元されます。
        </p>
        <p
          style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: 15,
            color: "#c4a882",
            marginTop: 32,
            fontWeight: 600,
          }}
        >
          あなたの人生には、価値がある。
        </p>
      </section>
    );
  }

  return (
    <section
      style={{ padding: "100px 20px 60px", maxWidth: 640, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          marginBottom: 8,
        }}
      >
        あなたの経験を書く
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: 13,
          color: "#999",
          fontFamily: "'Noto Sans JP', sans-serif",
          marginBottom: 48,
          lineHeight: 1.9,
        }}
      >
        失敗も成功も、すべての経験には価値がある。
        <br />
        匿名でも投稿できます。収益の50%はあなたに還元されます。
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 12,
              color: "#999",
              fontFamily: "'Noto Sans JP', sans-serif",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            タイトル
          </label>
          <input
            type="text"
            placeholder="例：「借金1000万円から立ち直った話」"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "'Noto Sans JP', sans-serif",
              background: "#fff",
              outline: "none",
              transition: "border-color 0.2s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(0,0,0,0.08)")
            }
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 12,
              color: "#999",
              fontFamily: "'Noto Sans JP', sans-serif",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            カテゴリー
          </label>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.filter((c) => c !== "すべて").map((cat) => (
              <button
                key={cat}
                onClick={() => setFormData({ ...formData, category: cat })}
                style={{
                  background:
                    formData.category === cat
                      ? "#1a1a1a"
                      : "rgba(0,0,0,0.03)",
                  color: formData.category === cat ? "#faf8f5" : "#777",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: 16,
                  fontSize: 12,
                  fontFamily: "'Noto Sans JP', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 12,
              color: "#999",
              fontFamily: "'Noto Sans JP', sans-serif",
              marginBottom: 8,
              letterSpacing: 1,
            }}
          >
            あなたの体験
          </label>
          <textarea
            placeholder="何があったのか、そこから何を学んだのか、今同じ状況にいる人に伝えたいことは何か。自由に書いてください。"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={12}
            style={{
              width: "100%",
              padding: "16px 18px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 10,
              fontSize: 14,
              fontFamily: "'Noto Sans JP', sans-serif",
              background: "#fff",
              outline: "none",
              resize: "vertical",
              lineHeight: 2,
              transition: "border-color 0.2s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#c4a882")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(0,0,0,0.08)")
            }
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            onClick={() =>
              setFormData({ ...formData, anonymous: !formData.anonymous })
            }
            style={{
              width: 44,
              height: 24,
              borderRadius: 12,
              background: formData.anonymous ? "#1a1a1a" : "#ddd",
              cursor: "pointer",
              position: "relative",
              transition: "background 0.2s ease",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#fff",
                position: "absolute",
                top: 3,
                left: formData.anonymous ? 23 : 3,
                transition: "left 0.2s ease",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 13,
              color: "#666",
              fontFamily: "'Noto Sans JP', sans-serif",
            }}
          >
            匿名で投稿する
          </span>
        </div>
        {!formData.anonymous && (
          <input
            type="text"
            placeholder="ペンネーム"
            value={formData.penName}
            onChange={(e) =>
              setFormData({ ...formData, penName: e.target.value })
            }
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 10,
              fontSize: 14,
              fontFamily: "'Noto Sans JP', sans-serif",
              background: "#fff",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        )}
        <div
          style={{
            background: "rgba(196,168,130,0.08)",
            borderRadius: 10,
            padding: "20px 24px",
            borderLeft: "3px solid #c4a882",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#666",
              fontFamily: "'Noto Sans JP', sans-serif",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            💰 収益還元について：あなたの投稿が読まれると、アフィリエイト収益と
            読者からの募金の
            <strong style={{ color: "#1a1a1a" }}>
              50%があなたに還元
            </strong>
            されます。
          </p>
        </div>
        <button
          onClick={() => setSubmitted(true)}
          style={{
            background: "#1a1a1a",
            color: "#faf8f5",
            border: "none",
            padding: "16px",
            borderRadius: 30,
            fontSize: 15,
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 600,
            cursor: "pointer",
            letterSpacing: 1,
            transition: "transform 0.2s ease",
            marginTop: 8,
          }}
          onMouseEnter={(e) =>
            (e.target.style.transform = "translateY(-2px)")
          }
          onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        >
          投稿する
        </button>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section
      style={{ padding: "120px 24px 60px", maxWidth: 600, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#1a1a1a",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        攻略本の想い
      </h2>
      <div
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 14,
          color: "#555",
          lineHeight: 2.4,
        }}
      >
        <p>
          世の中には成功者の自伝が溢れています。
          <br />
          でも本当に価値があるのは、失敗した人たちの話ではないでしょうか。
        </p>
        <p style={{ marginTop: 28 }}>
          成功者の話は華やかで勇気をもらえる。
          <br />
          でも、今まさに苦しんでいる人が必要としているのは
          <br />
          「同じ場所から這い上がった人の、具体的な一歩」です。
        </p>
        <div
          style={{
            margin: "40px 0",
            padding: "32px",
            background: "rgba(196,168,130,0.08)",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: 18,
              color: "#1a1a1a",
              lineHeight: 2,
              fontWeight: 600,
              margin: 0,
            }}
          >
            ホームレスの人でも携帯を持つ時代。
            <br />
            誰もが「書く人」になれる。
            <br />
            誰もが「誰かの攻略本」になれる。
          </p>
        </div>
        <p>
          攻略本は、体験談の収益（アフィリエイト・読者からの募金）の
          <strong style={{ color: "#1a1a1a" }}>50%を筆者に還元</strong>
          します。
        </p>
        <p style={{ marginTop: 12 }}>
          これは単なるプラットフォームではありません。
          <br />
          「あなたの失敗にも価値がある」
          <br />
          「あなたの人生には意味がある」
          <br />
          そう伝えるための場所です。
        </p>
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <div
            style={{
              width: 48,
              height: 2,
              background: "#c4a882",
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: 16,
              color: "#c4a882",
              fontWeight: 600,
            }}
          >
            読む人には、攻略本を。
            <br />
            書く人には、生きた証を。
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,0,0,0.06)",
        padding: "36px 24px",
        textAlign: "center",
        marginTop: 60,
      }}
    >
      <p
        style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 14,
          color: "#ccc",
          letterSpacing: 2,
        }}
      >
        攻略本
      </p>
      <p
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 11,
          color: "#ddd",
          marginTop: 8,
        }}
      >
        すべての人生に、価値がある。
      </p>
    </footer>
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf8f5",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && (
        <>
          <HeroSection setCurrentPage={setCurrentPage} />
          <div
            style={{
              maxWidth: 900,
              margin: "0 auto",
              padding: "0 20px 20px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#1a1a1a",
                marginBottom: 24,
              }}
            >
              最近の攻略本
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 20,
              }}
            >
              {SAMPLE_STORIES.slice(0, 4).map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onClick={() => setCurrentPage("stories")}
                />
              ))}
            </div>
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
