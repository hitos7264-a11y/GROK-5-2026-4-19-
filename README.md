# GROK 5 大予想 — 2026年4月19日（検証版）

イーロン・マスクの「AGIへの賭け」の全貌を、訂正情報を反映して徹底解説するスマホ特化型の静的ウェブサイト。

## 🎯 プロジェクト概要

元レポート『GROK 5大予想 ─ 2026年4月19日現在の最新情報から読み解く』と、それに対する **第三者検証（訂正レポート）** を統合し、**後者の訂正情報を最優先** して内容を書き直した、全14章＋検証セクションのウェブサイトです。

- **目標**：元レポートの情報をすべて吸収しつつ、17項目の訂正を反映した正確な読み物を、スマホで読みやすい暖かいUIで提供する
- **配色**：白＋茶色系の温かみあるカラーパレット（黒文字・優しい印象）
- **対応**：スマホ完全特化（max-width 480px、タブレット／PCでも中央寄せで読める）

## ✅ 実装済みの機能

### コンテンツ（全18ページ）

| ファイル | 内容 |
|---|---|
| `index.html` | トップページ（ヒーロー、キーナンバー、目次） |
| `chapters/ch01-prologue.html` | プロローグ：Memphisの夜、1.5GWの轟音 |
| `chapters/ch02-delay.html` | 第1章：リリース延期のドラマ |
| `chapters/ch03-colossus.html` | 第2章：Colossus 2という怪物 |
| `chapters/ch04-moe.html` | 第3章：6兆パラメータとMoE |
| `chapters/ch05-multimodal.html` | 第4章：マルチモーダル革命 |
| `chapters/ch06-agents.html` | 第5章：マルチエージェント進化 |
| `chapters/ch07-context.html` | 第6章：文脈窓200万トークン |
| `chapters/ch08-agi.html` | 第7章：AGI 10%の賭け |
| `chapters/ch09-benchmark.html` | 第8章：競合比較（ARC, SWE, HLE） |
| `chapters/ch10-price.html` | 第9章：料金体系の予想 |
| `chapters/ch11-ecosystem.html` | 第10章：Musk帝国のエコシステム |
| `chapters/ch12-yamato.html` | 第11章：「AI界の戦艦大和」批判 |
| `chapters/ch13-ethics.html` | 第12章：倫理・プライバシー・権力集中 |
| `chapters/ch14-scenario.html` | 第13章：リリース・シナリオ大予想 |
| `chapters/ch15-conclusion.html` | 第14章：結論 |
| `corrections.html` | 訂正レポート（17項目） |
| `verified.html` | 検証OK項目（11項目） |
| `sources.html` | 出典・参照リンク一覧（カテゴリ別） |

### UI／インタラクション

- ✅ スティッキーヘッダー（背景ブラー）
- ✅ 右スライド式ドロワーメニュー（全ページへのナビゲーション）
- ✅ 各章の前後ナビゲーション（PREV/NEXT）
- ✅ 「目次に戻る」ボタン
- ✅ スクロールトップボタン
- ✅ 章カード／シナリオカード／ベンチマークバー／タイムライン
- ✅ 訂正ノート（各章で該当箇所に訂正情報をハイライト表示）
- ✅ IntersectionObserverによる軽量フェードイン演出
- ✅ ベンチマークバーの遅延アニメーション

### 反映した17項目の訂正（重要）

1. Colossus 2のGPU換算計算の誤り
2. Colossus 1 GPU数の文脈的不正確
3. **施設名「MACROHARDRR」→ Macrohard**
4. **Optimus「年100万台」→ 実生産50K〜100K／年末ランレート100万**
5. **Neuralink「10人以上」→ 21人**
6. Grok 4.20リリース日（1/28 API, 2/17 ベータ）
7. Grok 4 Fast / 4.1 Fastの言及欠落
8. 文脈窓比較の矛盾（4.1 Fast/4.20で既に2M到達）
9. **Gemini 3 Pro ARC-AGI-2 32.4% → 31.1%**
10. Gemini 3.0 Deep Think 85%への言及不足
11. **Ben Goertzel は造語者ではなく普及者（初出はMark Gubrud, 1997）**
12. Sora閉鎖の真因（ロボティクス集中／$15M/日の損失）
13. HLEスコア追記（Grok 4: 27% / 44.4% / 51%）
14. xAI評価額 $230B の追記
15. 知識カットオフの整合性
16. Baron Capital Group の投資家扱いは要注意
17. Colossus 2 1GW稼働への異論（衛星画像350MW）

## 🌐 主な機能エントリーURI

| パス | 説明 |
|---|---|
| `/` または `/index.html` | トップページ |
| `/chapters/ch01-prologue.html` 〜 `/chapters/ch15-conclusion.html` | 本編各章 |
| `/corrections.html` | 訂正レポート |
| `/verified.html` | 検証OK項目 |
| `/sources.html` | 出典一覧 |

どのページからも右上の☰メニューで全ページへアクセス可能。

## 🎨 デザイン方針

- **ベース**：`#fbf7f1`（温かいオフホワイト）
- **アクセント**：茶系（`#8b5a2b` メイン、`#d99a4e` アンバー、`#c45a2a` テラコッタ）
- **文字**：濃い茶寄りの黒（`#2a1f17`）＋ やさしい茶黒（`#4a3829`）
- **フォント**：Hiragino Sans, Noto Serif JP, Zen Maru Gothic
- **ディスプレイ**：スマホファースト（max-width 480px）、暖かい紙のようなテクスチャ

**ユーザー指定の禁止事項に完全準拠：**
- ❌ 画像は一切使用していない（アイコンはFont AwesomeのWebfontのみ）
- ❌ 進捗バー（スクロールプログレス）は導入していない

## 📁 ファイル構成

```
/
├── index.html                  # トップページ
├── corrections.html            # 訂正レポート
├── verified.html               # 検証OK項目
├── sources.html                # 出典一覧
├── README.md                   # このファイル
├── css/
│   └── style.css               # 共通スタイル
├── js/
│   └── main.js                 # 共通スクリプト（ドロワー・スクロール等）
├── chapters/
│   ├── ch01-prologue.html
│   ├── ch02-delay.html
│   ├── ch03-colossus.html
│   ├── ch04-moe.html
│   ├── ch05-multimodal.html
│   ├── ch06-agents.html
│   ├── ch07-context.html
│   ├── ch08-agi.html
│   ├── ch09-benchmark.html
│   ├── ch10-price.html
│   ├── ch11-ecosystem.html
│   ├── ch12-yamato.html
│   ├── ch13-ethics.html
│   ├── ch14-scenario.html
│   └── ch15-conclusion.html
├── source/
│   ├── grok5_report.txt        # 元レポート（参照用）
│   └── grok5_corrections.txt   # 訂正レポート（参照用）
└── partials/
    └── _layout_info.txt        # 開発メモ
```

## 📦 使用しているライブラリ（CDN）

- **Google Fonts**：Noto Serif JP, Zen Maru Gothic
- **Font Awesome 6**：アイコン表示（`fa-bars`, `fa-compass`, `fa-circle-check` など）

外部JS／CSSフレームワークは最小限に留め、CSSは自前で記述。

## ⏳ 未実装・今後の発展余地

本サイトは静的ウェブサイトとして十分完成していますが、追加拡張としては以下が考えられます：

- 🔎 サイト内検索機能（クライアントサイドで index 構築）
- 🌗 ダークモード切替（茶系カラーを保ちながら）
- 📱 PWA化（オフライン閲覧対応）
- 🗂️ 各章への深いリンク（アンカー＋シェア機能）
- 📊 ベンチマーク比較用のインタラクティブなグラフ（Chart.js）
- 🌐 多言語対応（英語版）

## 🛠️ デプロイ方法

本サイトは静的HTMLで構成されているため、どのホスティングサービスでも公開できます。
**Publishタブ** を利用して、ワンクリックでデプロイ可能です。

## 📝 コンテンツの信頼性について

- 本サイトの記述は **2026年4月19日時点** の情報に基づきます
- xAI公式の未発表事項（6Tパラメータの70%スパース性、16エージェント構成、200万トークン等）は **予測／リーク扱い** です
- 各章内の **訂正ノート（茶色いボックス）** が、元レポートからの修正点を明示しています
- 公式発表や一次情報と整合する項目は `/verified.html` で、逆に訂正が必要だった項目は `/corrections.html` で確認できます

---

**Base**：Opus 4.7によるレポート（2026/04/19作成）
**Revision**：第三者検証による17項目の訂正を反映
**License**：参考閲覧用
