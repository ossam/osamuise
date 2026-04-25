export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">伊勢修 / イセオサム / Ise Osamu</h1>
          <p className="text-xl md:text-2xl font-sans">Producer · Painter · Tea Practitioner</p>
        </div>
        <div className="mt-8">
          <p className="text-lg">Scroll to explore</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">About</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img src="/portrait.jpg" alt="Portrait" className="w-full h-auto rounded" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg leading-relaxed">
              1983年生まれ。長野県御代田町在住。プレイ株式会社代表取締役。<br />
              大喜利投稿サービス「ボケて」共同運営、画家、茶人として活動。<br />
              過去の経験を物語の伏線として読み直す「伏線思考」を提唱し、執筆・講演も行う。
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 px-8 bg-secondary text-background">
        <h2 className="text-3xl font-serif mb-12 text-center">Three Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product */}
          <div className="bg-background text-foreground p-8 rounded">
            <h3 className="text-2xl font-serif mb-4">Product</h3>
            <ul className="space-y-2">
              <li>ボケて — 共同運営。約800万DL、累計1億ボケ超</li>
              <li>プレイ株式会社 — 代表取締役</li>
              <li>ナビカス株式会社 — 社外取締役</li>
              <li>オモロキ株式会社 — 共同運営</li>
              <li>MUSUBU — 事業設計・アドバイザリー</li>
              <li>本のひとこと — 開発中の書籍推薦サービス</li>
            </ul>
          </div>
          {/* Art */}
          <div className="bg-background text-foreground p-8 rounded">
            <h3 className="text-2xl font-serif mb-4">Art</h3>
            <p>作品: 「孤峰」「対峰」</p>
            <p>ヴェネチア・ビエンナーレ関連活動</p>
          </div>
          {/* Tea */}
          <div className="bg-background text-foreground p-8 rounded">
            <h3 className="text-2xl font-serif mb-4">Tea</h3>
            <p>錦秋茶会、LIFE茶ART、野点</p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-8 text-center">伏線思考 / Fukusen Shiko</h2>
        <p className="text-lg leading-relaxed text-center">
          過去の出来事を「ただの出来事」ではなく、いまここに繋がる物語の伏線として読み直す思考法。<br />
          プロダクト、絵画、茶——一見バラバラに見える活動も、ひとつの線でつながっている。<br />
          サンマーク出版より書籍化予定。
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-accent text-background">
        <h2 className="text-3xl font-serif mb-8 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p>仕事のご依頼、作品・展覧会について、茶会・ワークショップについて、取材・メディア</p>
          <p className="mt-4">Email: example@iseosamu.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-foreground text-background text-center">
        <p>&copy; 2026 伊勢修</p>
      </footer>
    </div>
  );
}
