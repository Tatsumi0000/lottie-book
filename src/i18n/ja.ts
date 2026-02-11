import { ja } from "vuetify/locale";

export default {
  $vuetify: {
    ...ja,
    play: "再生",
    message: {
      notfound: {
        file: "ファイルが見つかりません。",
        content: "コンテンツが見つかりません。",
        currentanimationcheckyourdirector:
          "現在のテーマに対応するアニメーションアセットが見つかりませんでした。ディレクトリの設定を確認してください。",
      },
      error: {
        filetype:
          "ファイルタイプが不正です。jsonファイルをアップロードして下さい。",
        syntax: "jsonの構文エラーが発生しました。",
        readorparse: "読み込みまたは解析に失敗しました。",
      },
    },
  },
};
