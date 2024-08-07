# サービス概要

## サービスマニュアル

### 使い方

- 各ユーザのユーザ名とパスワードを使ってログインをすることで利用できます。
  - パスワードは簡単のため、すべて "password" です
- ユーザには下記のいずれかの役割が割り当てられています。
  - 顧客：レッカー車を依頼するユーザ（ユーザ名：client{クライアント内でのインデックス}）
  - ディスパッチャー：レッカー車の配車を行うユーザ（ユーザ名：dispatcher{エリアID}_{同一エリア内のディスパッチャーのインデックス}）
  - ドライバー：レッカー車のドライバー（ユーザ名：drifer{エリアID}_{同一エリア内のドライバーのインデックス}
- ディスパッチャーとして（例えば、ユーザ名：dispatcher1_1、パスワード：password）としてログイン後、「クライアントからのリクエスト一覧ページ」ボタンが表示されます。
- ボタンをクリックすると、担当エリア内の対応待ちの依頼の一覧が依頼日時の古い順番に表示されます。
- ある依頼をクリックすると、その依頼の詳細情報が表示されます。
- 対応待ちの依頼の詳細画面から、「レッカー車を手配」ボタンをクリックすると、その依頼の位置情報から最も近い位置にいる、対応可能なレッカー車が１件表示されます。
- 「手配する」ボタンをクリックすることで、その依頼とレッカー車を割り当てるリクエストが送信されます。

### その他の用語

- ユーザ: サービス利用者の基本単位です。サービス利用者にはそれぞれ 1 アカウントが割り当てられています。
- グラフ：依頼やレッカー車の位置情報は、複数の頂点と無向辺から構成される xy 平面上の無向グラフで表現されます。レッカー車はその辺しか移動できません。
  - 各頂点にはx, y座標が与えられ、2つの頂点を結ぶ形で辺が定義されます。
  - 辺には正の重み(移動にかかる時間)が与えられます。
- エリア：グラフは複数のエリアに分けられ、異なるエリアの間には辺は存在しません。つまり、あるエリアで発生した依頼はそのエリア内にいるレッカー車しか担当できません。
- 距離：いくつかの辺を利用して目標の頂点に到達できるとき、通った辺の重みの合計が距離となります。

---

[トップ](../../README.md)
