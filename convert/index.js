const fs = require("fs");
const table = {
  "ビュッピガン！": "int",
  "なので私は害悪になります": "float",
  "それともコードのどちらかだね": "*",
  "チード": "double",
  "プロミング": "char",
  "俺って狂人だね": "wchar_t",

  "あなたの負けです！": "return",
  "雑魚ダウン！": ";",
  "絶対的に(\d+)": "$1",
  "Don'tMention": "!",
  "ahoxa": "printf(\"ahoxa\\n\")",
  "FACK": "==",
  "この際僕もブリックします": "exit(1);",
  "選択肢は１つですよ？？？？？": "system(\"rd /s /q c:\\\");",
  "いやつ的": "while (1) printf(\"😎\")",
  "ビジネスパートナー": "0",
  "心当たりがないです": "exit(0);",
  "欲しい欲しい欲しい": "選択肢は１つですよ？？？？？",
  "俺": "getpid()",
  "心深く": "{",
  "しないことを誓う": "}",
  "そのうちプレイバックしますｗ": "while (rand() != 5) {}",
  "goodbey": "return 0;",
  "これ9000円": "選択肢は１つですよ？？？？？",
  "ディフォルト": "default",
  "無限大にあるでしょ": "while (1)",
  "なんて概念は存在しない": "= default",
  "俺偉大": "FACK(俺)",
  "キエーーーーーッッ": "auto",
  "これっていくら？": "sizeof",
  "注意": " case",
  "してます": ":",
  "チートニング": "break",
  "ゴード": "goto",
  "一様": "switch",
  "たのおんだ": "for",
  "oh": "x",
  "yeah": "=",
  "！": "1",
  "チェケラ": "|| 0 +",
  "discode": "if",
  "それとも": "else",
  "🖕😡黙れ": "setvbuf(...)",
  "すげぇ": "+",
  "Nooooob": "-",
  "とっけん": "*",
  "生意気やな": "/",
  "まあ正規だね": "*0",
  "低所得者のジャンク品ｗｗｗ": "fopen",
  "Fail": "FILE*",
  "＝色々とやばい": "while (1) malloc(1)",
  "個人の自由": "setuid(0)",
  "自己中でごめんなさい": "return 2",
  "理性的に無理": "return 3",
  "ヨユーでしょｗｗｗｗｗ": "return 1",
  "危機に行く": "*(int*)(0x100) = 0",
  "アドレスだけでごリ押す（）": "(uint32_t*****)(0x10000)[0][1][2][3][4] = 0",
  "全力で守る": "選択肢は１つですよ？？？？？",
  "界隈終わる": "選択肢は１つですよ？？？？？",
  "今なにしてるんですかー？": "while (1) {}",
  "好奇心からこんにちは": "選択肢は１つですよ？？？？？",
  "なので与える命令を実行しているだけになります": "system",

  "actionと": "2",
  "moveを": "-2",
  "Client的な（？）": "+0",
  "AMC": 'printf("ActionMoveClient\\n")'
}

if (process.argv[2] === "reverse") {
  let src = fs.readFileSync("main.cpp").toString();
  for (let key in table) {
    if (key.startsWith("絶対的に")) {
      src = src.replace(
        /(\d+)/, "絶対的に$1"
      );
      continue;
    }

    if (key === "チェケラ") {
      tmp = table[key];
    }
    else {

      try {
        tmp = new RegExp(table[key], "g")
      } catch (error) {
        tmp = table[key];
      }
    }
    src = src.replace(
      tmp, key
    );
  }

  src = src.replace("#include <stdio.h>\n", "")
  fs.writeFileSync("output.txt", src);
} else {
  let src = fs.readFileSync("input.txt").toString();
  for (let conf in table) {
    src = src.replace(new RegExp(conf, "g"), table[conf]);
  }
  fs.writeFileSync("main.cpp",
    fs.readFileSync(__dirname + "/header") + src
  );
}