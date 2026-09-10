// ここに、あなたが作成したFirebaseプロジェクトの設定値を貼り付けてください。
// 手順は README.md の「1. Firebaseプロジェクトを作る」を参照してください。
//
// Firebaseコンソール →（プロジェクトを選択）→ 左上の歯車アイコン →「プロジェクトの設定」
// → 下の方の「マイアプリ」→ ウェブアプリ（</>アイコン）を追加 → 表示される
// firebaseConfig の中身を、そのまま下にコピー＆ペーストします。
//
// これらの値は「公開情報」です（アプリの画面から誰でも見える情報なので、
// ここに書いても秘密は漏れません）。実際のアクセス制限は
// Firestoreのセキュリティルール（firestore.rules）で行います。

window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
