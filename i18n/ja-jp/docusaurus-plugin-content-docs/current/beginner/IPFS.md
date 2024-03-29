---
title: IPFS
hide_table_of_contents: true
---

IPFS（InterPlanetary Filing System）は、あらゆる種類のファイルを、分散型、ピアツーピア（P2P）、かつ信頼性の高い方法で保存するためのブロックチェーンネットワークです。IPFSは、インターネット上で主流のリクエスト・レスポンスプロトコルであるHTTP（Hypertext Transfer Protocol）に取って代わることを目指しています。IPFSは、インターネット上の主要なリクエスト/レスポンスプロトコルであるHTTP（Hypertext Transfer Protocol）に代わるもので、ウェブ上の情報の検索、保存、転送に革命を起こすことを目指しています。2014年に発表されたIPFSは、帯域幅の節約、情報の保存、ウェブの分散化を実現するさまざまな手法を導入し、スピード、効率、セキュリティ、オープン性を確保しています。

IPFS（InterPlanetary Filing System）は，インターネットをより速く，より安全で，よりオープンなものにするために設計されたP2P（Peer to Peer）ハイパーメディアプロトコルである．IPFSは、最大100GBの科学データをピア間で転送するために、Juan Benet氏によって開発されました。ベネは、ウェブ上で情報を転送したり保存したりする現在の方法は、時間がかかり、ごく少数の人にしかコントロールされておらず、簡単にハッキングされてしまうことに気づきました。Benet氏は、これらの問題点を解決するために、IPFSのシステムを以下のように改善しました。

 - **スピード：** 現在、クライアント・サーバー・コンピューティング・モデル（Web）のリクエスト・レスポンス・プロトコルとしては、HTTP（Hypertext Transfer Protocol）が主流となっています。しかし、HTTPでは1つのサーバーからしかダウンロードできませんが、P2P IPFSでは複数のノード（ユーザー）から同時にデータを取得するため、帯域幅を大幅に節約できます。

 - **効率性：** IPFSの分散型構造は、BitTorrentと同様の仕組みになっています。IPFSの分散型構造は、BitTorrentと似たような仕組みになっています。ノードは、データ（ファイル、動画、写真など）のコピーを保持し、シードと同様に、ハッシュ（ファイルのユニークなロケータコード）の要求に応じてユーザーにデータを送信します。IPFSにデータをアップロードする際には、1つのハッシュで1つのコピーしか作成されないため、処理する情報が少なくて済み、ストレージへの負荷も少なくて済みます。さらに、このことは、IPFSが現行のシステムのようにインターネット接続に強く依存しないことを意味し、それによって情報がより広くアクセス可能になります。

 - **安全性：** セキュリティデータが変更されたり改ざんされたりしないように、IPFSでは2つのシステムを採用しています。まず、システムにアップロードされたすべてのデータは不変であり、すなわち変更できません。第二に、各ファイルには固有のフィンガープリント（ハッシュ）が与えられます。ユーザーは、検索したハッシュコードと受信したハッシュコードを比較することができます。同じであれば、中に入っている情報も同じです。

 - **非中央集権：** IPFSのP2Pシステムは、検閲の有無にかかわらず、情報の可用性を保証します。現在、ウェブは高度に中央集権化されており、Amazon Web ServicesやGoogle Cloudなどの単一企業が巨大なサーバーファームを所有し、オンラインで公開されているすべてのデータを保持しています。中国や北朝鮮などのように、政府や大企業が検閲を行い、私たちがアクセスできる情報を消してしまう可能性もあります。IPFSは、分散型で信頼性の高いP2Pシステムを採用することで、誰もがデータにアクセスできることを保証しています。


### IPFSの仕組みは？

IPFSは、ブロックチェーン技術に基づいて構築されています。つまり、分散型で信頼性がなく、そのノードに依存しています。 ノードに依存して情報を保存・共有します。ネットワーク上で情報を保存・共有するノードに依存しています。イーサリアム（ETH）でノードが情報（暗号通貨の取引など）を検証して保存するのと同じようにETH)やBitcoin(BTCIPFSは、そのノードを使用して、ネットワーク上で情報（ファイル、ビデオなど）を共有し、保存します。それは次のような方法で行われます。

 - **情報の検索：** サーバーは現在、URLに基づいて情報を検索しています。URLは、欲しい情報がどこにあるのかをウェブに伝えるものです（ウェブサイトなど）。これは、サーバーがオフラインになったときやハッキングされたときに問題となります。IPFSは、ユニークなハッシュコードを使用してファイルコンテンツ自体の位置を特定することで、このサーバーを経由する経路を回避します。ハッシュコードは、ファイルの場所ではなく、探しているファイルに直接アクセスします。

 - **情報保存と安全性確保：** ファイルは、ブロックチェーン上のIPFSデータオブジェクトに格納されます。各データオブジェクトは最大256KBのデータを保持しますが、後続のIPFSデータオブジェクトにリンクすることで、より多くのデータを保存することができます。したがって、プロジェクト全体は、ブロックチェーン上にリンクされた様々なIPFSデータオブジェクトに格納され、それによってプロジェクトのハッキングや削除が困難になります。

 - **データの変更履歴を追跡：** IPFSに保存されているデータは変更できませんが、バージョン管理が可能です。これは、ユーザーが作業中にファイルの改良版をアップロードできることを意味しています。各ファイルには独自のハッシュコードが与えられ、コミットオブジェクトとしてアップロードされます。コミットオブジェクトはデータオブジェクトと同じようにリンクされ、アップロードの順番を追跡することで、情報の進行を確認することができます（例えば、論文、小説、研究のバージョンなど）。

### IPFSはどのように使用できますか?

IPFSは、ユーザーがどこでもファイル（ビデオ、ウェブサイト、記事、研究論文など）にアクセスできるようにするもので、中央集権的なパーティーを必要としません。これにより、より速く、より安全で、よりオープンになります。ユーザーは、データがソースから直接アクセスされるため、他の方法では検閲される可能性のある情報にもアクセスできます。さらに、インターネットの接続環境が整っていない地域でもこれらの情報にアクセスすることができ、貧しい国や腐敗した国の人々にさらなる力を与えることができます。

また、IPFSはファイルの各バージョンを最後のバージョンにリンクさせることで、直線的な追跡を可能にするため、特に研究者や企業にとっては、仕事の進行状況を把握するのに役立つ機能です。最後に、InterPlanetaryという名前は、将来的にこれらの情報を惑星間で転送できることを意味しています。現在、良好な環境下では、火星から地球に情報を送るのに4分、送り返すのに4分、さらに数ミリ秒の処理時間がかかります。しかし、火星で一度ダウンロードされたコンテンツであれば、すでにファイルが保存されているため、すぐにダウンロードすることができます。IPFSはまさに未来のウェブなのです。

### IPFSを支えているのは？

Juan Beneは、スタンフォード大学のコンピュータサイエンス学科の卒業生です。Benetは、Napsterがもたらした音楽革命の中で、中央管理を排除することのメリットを実感しました。しかし、P2Pネットワークで何ができるかを知っていた彼は、その成果の多くを法的な観点から阻止することになりました。

Benetは、2013年に科学的なイノベーションに取り組んでいた際、大規模なデータセットの共有やバージョン管理に使われるツールが、中央集権的であるために非効率的でエラーが発生しやすく、停滞していることに気づきました。これを変えようと、彼はGitHubのデータリンク構造とBitTorrentのP2Pシステムを組み合わせてIPFSを作った。これを機に、2014年5月にProtocol Labsを設立し、IPFSとFilecoinの2つを最初のプロジェクトとししました。

### IPFSの限界とは？

IPFSは、データへのアクセスが速く、政府の検閲がない未来への刺激的な展望を提供していますが、現状ではどの程度実現可能で、どのような課題があるのでしょうか。

 - **検索する方法がない：** IPFSでは、コンテンツベースドアドレッシング（ハッシュ化）を採用することで、情報の変更を確実に行い、ウェブサイトのクラッシュを回避しています。しかし、この新しいシステムの情報をどのように閲覧するかはまだ不明です。IPFSは個人が膨大な数のコンテンツを保存する場所なので、ユーザーフレンドリーな検索システムが不可欠です。アクセス可能な検索エンジンがなければ、それはGoogleのないインターネットのようなものです。IPFSはハッシュ検索を念頭に置いて作られていますが、これでは技術に疎い人たちを遠ざけてしまいます。この問題は簡単に解決できるし、独自のフォーラムでも議論されているので、より簡単な検索システムが実装されるのは時間の問題だろう。

 - **規制なし：** 分散型ネットワークであるIPFSは、インターネットを人々の手に取り戻すものですが、これには危険性も伴います。中央管理者がいない大量のデータは、どのように規制されるのかという問題があります。フェイクニュース、ヘイトスピーチ、テロリストグループ、ブラックマーケット、著作権侵害など、有害なコンテンツをどのように抑制することができるのでしょうか。他のブロックチェーンでは、 proof-of-work や proof-of-stakeを使って取引や情報を検証していますが、記事や動画などの複雑な情報を誰が、何が検証し、規制できるのでしょうか。

 - **ファイルの可用性：** 各ユーザーやノードは、自分がダウンロードしたファイルのキャッシュを保存しており、他のユーザーがアクセスできる状態を維持しています。しかし、ある情報を保存しているすべてのノードがシステムの使用をやめてしまうと、シーダーのいないBitTorrentのように、そのデータは失われ、アクセスできなくなります。つまり、ユーザーがコピーを維持する動機付けが最も重要なのです。IPFSでは、この点を考慮してFilecoinを設計し、ユーザーがデータのコピーをできるだけ長くオンラインで保存するようにインセンティブを与えています。

 - **コンテンツ制作者への報酬不足：** すべての情報がユーザーのものであり、中央集権的に利益を得ようとする者がいないのであれば、広告やその他の利益を生み出すツールは存在しません。そこで問題となるのが、コンテンツ制作者への報酬です。報酬が得られないとしたら、コンテンツ制作者にはどのようなインセンティブがあるのでしょうか。

### IPFSでお金を稼ぐには？

前述したように、IPFSの課題の一つは、ファイルの可用性です。これに対抗するために、IPFSの上にストレージの市場を提供するブロックチェーンとしてFilecoinが構築されました。Filecoinを使うと、ユーザーはデータを保存するためのハードディスクの空き容量を売り払い、その見返りとしてFilecoinという資産を得ることができます。これにより、ユーザーはファイルをできるだけ長くオンラインにしておくというインセンティブを得ることができ、IPFSが金儲けの機会となることで、IPFSへのトラフィックが増加します。
