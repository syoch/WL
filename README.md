# WL converter
WL converterはWii言語（以下WL）とC++とで相互に変換するソフトウェアです

---

## READMEのREADME
ここからは、FileのことをFailとよんだりしますが
絶対的にWLです。　（これもWLです）

---

## 使い方

### CLIツールとして使う場合（コマンドラインから命令を実行したいとき）

#### C++ → WL
input/cpp.cpp にC++ソースを書き込んでコマンドラインで 

```shell
$ node convert reverse
```

と実行すれば `output/wl.txt` に WL が書き込まれます


#### WL → C+
input/wl.txt にC++ソースを書き込んでコマンドラインで 

```shell
$ node convert
```

と実行すれば `output/cpp.cpp` に WL が書き込まれます

### ライブラリとして使う場合

#### C++ → WL
input/cpp.cpp にC++ソースを書き込んでコマンドラインで 

```shell
$ node convert reverse
```

と実行すれば `output/wl.txt` に WL が書き込まれます


#### WL → C+
input/wl.txt にC++ソースを書き込んでコマンドラインで 

```shell
$ node convert
```

と実行すれば `output/cpp.cpp` に WL が書き込まれます

---

## ファイルの説明



<table>
  <tr>
    <td rowspan="5">convert</td>
    <td>convert.js</td>
    <td>WL → C++の変換機です</td>
  </tr>
  <tr>
    <td>reverse.js</td>
    <td>C++ → WLの変換機です</td>
  </tr>
  <tr>
    <td>header</td>
    <td>WL → C++で使う先頭に付ける Fail です</td>
  </tr>
  <tr>
    <td>index.js</td>
    <td>CLIからの使用を可能にするスクリプトです</td>
  </tr>
  <tr>
    <td>table.json</td>
    <td>WLとC++との変換で必要な情報が格納されたJSON Failです</td>
  </tr>
  <tr>
    <td rowspan="2">input</td>
    <td>cpp.cpp</td>
    <td>C++ → WL の変換に使うソースFail</td>
  </tr>
  <tr>
    <td>wl.txt</td>
    <td>WL → C++ の変換に使うソースFail</td>
  </tr>
  <tr>
    <td>output</td>
    <td>inputとほぼ同じでただの出力ディレクトリなので省略</td>
    <td></td>
  </tr>
  <tr>
    <td>/</td>
    <td>run.sh</td>
    <td>WL → C++に当たる操作をしてgccでコンパイルして実行するだけのシェルスクリプトです</td>
  </tr>
</table>