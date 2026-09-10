// このリポジトリ自体をデータ保存先にするための設定です。
// 手順は README.md の「1. GitHubリポジトリを作る」「2. アクセストークンを発行する」を参照してください。
//
// owner / repo … このアプリをアップロードしたGitHubリポジトリの「ユーザー名」と「リポジトリ名」
//   例: https://github.com/tanaka-taro/squad-board なら owner:"tanaka-taro", repo:"squad-board"
// branch … 通常は "main"（リポジトリ作成時のデフォルト）
// token … GitHubで発行した Fine-grained personal access token
//   （このリポジトリだけに絞った「Contents: Read and write」権限を付与したもの）
//
// ⚠️ 注意：token はこのファイルにそのまま書くため、リポジトリを見られる人・
// このアプリの画面ソースを見られる人には中身が見えてしまいます。
// 必ず「このリポジトリ1つだけ」に絞ったFine-grainedトークンを使い、
// 他のリポジトリや個人設定に影響しない権限だけを与えてください。
// （身内利用が前提で、名鑑・ボードのデータ自体もURLを知る人なら誰でも編集できる、という
// 現状の設計と同じ考え方です）

window.GITHUB_CONFIG = {
  owner: "joymoc8831",
  repo: "cleanup",
  branch: "main",
  token: "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",

  // 以下は通常そのままで構いません
  dataDir: "data",       // データJSONを置くフォルダ名
  pollIntervalMs: 12000  // 他の人の変更を反映するための自動更新間隔（ミリ秒）。
                         // 同時に見る人数が多い場合は長め（例: 20000〜30000）にしてください。
};
