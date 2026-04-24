const MEMBER_COLORS = {
    // 17期〜19期・研究生・現役メンバー
    "秋山由奈": "水色×水色",
    "新井彩永": "黄×黄",
    "伊藤百花": "薄ピンク×薄ピンク",
    "岩立沙穂": "青×白×赤",
    "太田有紀": "水色×紫",
    "大盛真歩": "薄ピンク×白",
    "奥本カイリ": "水色×青",
    "川村結衣": "赤×紫",
    "工藤華純": "赤×緑",
    "久保姫菜乃": "濃ピンク×薄ピンク",
    "黒須遥香": "黄",
    "迫由芽実": "白×水色",
    "佐藤綺星": "赤×白",
    "白鳥沙怜": "濃ピンク×白",
    "鈴木くるみ": "紫×白",
    "田口愛佳": "赤×赤",
    "千葉恵里": "黄×青",
    "長友彩海": "黄×水色",
    "成田香姫奈": "紫×黄",
    "橋本恵理子": "赤×黄",
    "畠山希美": "紫×青",
    "花田藍衣": "黄×白",
    "平田侑希": "白×紫",
    "福岡聖菜": "青×白",
    "布袋百椛": "赤×ピンク",
    "正鋳真優": "白×白",
    "水島美結": "水色×ピンク",
    "向井地美音": "赤×ピンク",
    "武藤小麟": "水色×濃ピンク",
    "八木愛月": "ピンク×黄",
    "山内瑞葵": "ピンク×黄",
    "山口結愛": "赤×オレンジ",
    "山﨑空": "紫×ピンク",
    "山根涼羽": "ピンク×緑",
    "大賀彩姫": "青×黄×緑",
    "近藤沙樹": "オレンジ×緑",
    "丸山ひなた": "濃ピンク×青",
    "髙橋舞桜": "紫×紫",
    "田中沙友利": "水色×黄緑",
    "牧戸愛茉": "濃ピンク×濃ピンク",
    "森川優": "水色×オレンジ",
    "渡邉葵心": "青×青",

    // 旧チーム8・その他
    "髙橋彩音": "水色×赤",
    "小栗有以": "黄×ピンク",
    "橋本陽菜": "ピンク×白",
    "坂川陽香": "赤×オレンジ",
    "永野芹佳": "白×白×白",
    "徳永羚海": "ピンク×青",
    "下尾みう": "白×紫",
    "行天優莉奈": "ピンク×ピンク",
    "倉野尾成美": "赤×緑"
};
const COLOR_CODE_MAP = {
    "水色": "#87CEEB",
    "青": "#0000FF",
    "青色": "#0000FF",
    "赤": "#FF0000",
    "赤色": "#FF0000",
    "黄": "#FFFF00",
    "黄色": "#FFFF00",
    "緑": "#008000",
    "ピンク": "#F172A3",
    "薄ピンク": "#FFB6C1",
    "濃ピンク": "#FF1493",
    "白": "#FFFFFF",
    "白色": "#FFFFFF",
    "紫": "#800080",
    "紫色": "#800080",
    "オレンジ": "#FFA500",
    "黄緑": "#9ACD32",
    "薄紫": "#E6E6FA"
};
const SHOWS = {
    kokokarada: {
        name: "ここからだ公演",
        songs: [
            {
                name: "Lollipop",
                positions: [
                    ["千葉恵里", "橋本陽菜", "奥本カイリ"],
                    ["小栗有以", "橋本恵理子", "髙橋彩音", "長友彩海"],
                    ["山内瑞葵", "花田藍衣", "徳永羚海", "大盛真歩", "下尾みう", "橋本陽菜"]
                ]
            },
            {
                name: "風の待ち伏せ",
                positions: [
                    ["秋山由奈", "正鋳真優", "畠山希美", "山根涼羽"],
                    ["水島美結", "布袋百椛", "白鳥沙怜"],
                    ["佐藤綺星", "長友彩海", "久保姫菜乃"],
                    ["山﨑空", "川村結衣", "丸山ひなた"]
                ]
            },
            {
                name: "クリスマスリング",
                positions: [
                    ["永野芹佳", "坂川陽香", "鈴木くるみ", "平田侑希"],
                    ["下尾みう", "迫由芽実", "佐藤綺星", "近藤沙樹", "黒須遥香"],
                    ["倉野尾成美", "田口愛佳", "正鋳真優"],
                    ["鈴木くるみ", "工藤華純"],
                    ["山口結愛", "武藤小麟"]
                ]
            },
            {
                name: "2月のMermaid",
                positions: [
                    ["八木愛月", "徳永羚海", "新井彩永"]
                ]
            },
            {
                name: "振り向きざまのキッス",
                positions: [
                    ["向井地美音", "太田有紀", "千葉恵里", "岩立沙穂", "鈴木くるみ", "行天優莉奈"],
                    ["伊藤百花", "平田侑希", "大賀彩姫", "永野芹佳"],
                    ["村山彩希", "成田香姫奈", "福岡聖菜", "秋山由奈", "田口愛佳"]
                ]
            }
        ]
    },
    reset: {
        name: "RESET公演",
        songs: [
            {
                name: "制服レジスタンス",
                id: "seifuku",
                positions: [
                    ["坂川陽香", "橋本恵理子", "橋本陽菜", "川村結衣", "秋山由奈", "徳永羚海", "近藤沙樹"],
                    ["大盛真歩", "込山榛香", "髙橋彩音", "倉野尾成美", "長友彩海", "村山彩希", "花田藍衣", "山﨑空", "工藤華純", "山内瑞葵"],
                    ["徳永羚海", "畠山希美", "水島美結", "山口結愛", "橋本陽菜", "長友彩海", "久保姫菜乃", "山内瑞葵"]
                ]
            },
            {
                name: "奇跡は間に合わない",
                id: "kiseki",
                positions: [
                    ["岩立沙穂", "太田有紀", "永野芹佳", "鈴木くるみ", "長友彩海", "成田香姫奈"],
                    ["正鋳真優", "平田侑希", "鈴木くるみ", "新井彩永", "岩立沙穂", "福岡聖菜"],
                    ["田口愛佳", "福岡聖菜", "久保姫菜乃", "下尾みう", "工藤華純", "正鋳真優", "坂川陽香"]
                ]
            },
            {
                name: "逆転王子様",
                id: "gyakuten",
                positions: [
                    ["武藤小麟", "布袋百椛", "倉野尾成美", "八木愛月", "橋本陽菜", "福岡聖菜", "近藤沙樹", "水島美結"],

                    // 👉 制服レジスタンス ポジ2
                    "ref:seifuku:1",

                    ["長友彩海", "橋本陽菜", "向井地美音", "佐藤綺星", "迫由芽実", "徳永羚海"]
                ]
            },
            {
                name: "明日のためにキスを",
                positions: [
                    // 制服レジスタンス ポジ3
                    "ref:seifuku:2",

                    // 制服レジスタンス ポジ1
                    "ref:seifuku:0",

                    // 奇跡は間に合わない ポジ3
                    "ref:kiseki:2",

                    // 奇跡は間に合わない ポジ1
                    "ref:kiseki:0"
                ]
            },
            {
                name: "心の端のソファー",
                positions: [
                    // 逆転王子様 ポジ3
                    "ref:gyakuten:2",

                    // 逆転王子様 ポジ1
                    "ref:gyakuten:0",

                    // 奇跡は間に合わない ポジ2
                    "ref:kiseki:1"
                ]
            }
        ]
    }
};

let currentShow = SHOWS.kokokarada;
function selectShow(key) {
    currentShow = SHOWS[key];

    document.getElementById("result").innerHTML =
        `<p>選択中：${currentShow.name}</p><hr>`;
}

// スロット構築：refはそのままで、実体のあるポジション（配列）だけを対象にする
function buildAllSlots(show) {
    const slots = [];
    for (const song of show.songs) {
        song.positions.forEach((pos, i) => {
            slots.push({
                song: song.name,
                songKey: song.id || song.name, // 参照用のキー
                index: i,
                options: pos // 文字列(ref)か配列
            });
        });
    }
    return slots;
}

function solve(show, members) {
    const slots = buildAllSlots(show);
    if (!slots.length) return null;

    let bestResult = null;
    let maxUsedCount = -1;

    function backtrack(i, currentResult, usedSet) {
        // 全ポジションを検討し終わった場合
        if (i === slots.length) {
            const usedCount = usedSet.size;
            // これまでの結果より「使っている人数」が多い場合、結果を更新
            if (usedCount > maxUsedCount) {
                maxUsedCount = usedCount;
                bestResult = [...currentResult];
            }
            return;
        }

        const slot = slots[i];

        // 参照ポジション（ref）の処理
        if (typeof slot.options === "string" && slot.options.startsWith("ref:")) {
            const [, id, tidx] = slot.options.split(":");
            const targetIdx = slots.findIndex(s => s.songKey === id && s.index === Number(tidx));
            currentResult[i] = currentResult[targetIdx];
            backtrack(i + 1, currentResult, usedSet);
            return;
        }

        // そのポジションに入れる候補メンバーを抽出
        const options = slot.options.filter(m => members.includes(m));

        // 候補がいない場合
        if (options.length === 0) {
            currentResult[i] = null;
            backtrack(i + 1, currentResult, usedSet);
            return;
        }

        // 各候補メンバーを試す
        for (const name of options) {
            const alreadyUsed = usedSet.has(name);
            currentResult[i] = name;

            // 新しいメンバーを使う場合はカウントが増える
            if (!alreadyUsed) usedSet.add(name);

            backtrack(i + 1, currentResult, usedSet);

            if (!alreadyUsed) usedSet.delete(name);
        }

        // 「誰も配置しない（空席にする）」という選択肢も試す（より多くの人数を他で使うため）
        currentResult[i] = null;
        backtrack(i + 1, currentResult, usedSet);
    }

    // 計算開始
    backtrack(0, Array(slots.length).fill(null), new Set());
    return bestResult;
}
function getSingleColorStyle(colorName) {
    const colorCode = COLOR_CODE_MAP[colorName.trim()] || "#ccc";

    const baseStyle = [
        `background-color: ${colorCode}`,
        "color: #000",
        "text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
        "border: 1px solid #999",
        "padding: 2px 6px",
        "font-weight: bold",
        "display: inline-block",
        "min-width: 40px", // ボックスの幅を揃える
        "text-align: center",
        "line-height: 1.2",
        "vertical-align: middle",
        "font-size: 0.85em"
    ].join("; ");

    return `style="${baseStyle}"`;
}

function checkPositions() {
    if (!currentShow) { alert("公演を選択してください"); return; }
    const input = document.getElementById("members").value;
    const rawmembers = input.split(/[\n・、\s]+/).map(m => m.trim()).filter(Boolean);
    const members = Array.from(new Set(rawmembers));
    const slots = buildAllSlots(currentShow);
    const solved = solve(currentShow, members);

    let html = "";
    let used = new Set();

    // --- メインポジションの表示 ---
    slots.forEach((slot, i) => {
        const name = solved?.[i];
        html += `<div style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px;">`;

        if (name) {
            used.add(name);
            const colorStr = MEMBER_COLORS[name] || "";
            let colorBadges = "";
            if (colorStr) {
                const colors = colorStr.split("×");
                colorBadges = colors.map((c, idx, arr) => {
                    const badge = `<span ${getSingleColorStyle(c)}>${c.trim()}</span>`;
                    return idx < arr.length - 1 ? `${badge} × ` : badge;
                }).join("");
            }

            html += `<span style="font-size: 0.85em; color: #666;">${slot.song} ${slot.index + 1}</span><br>`;
            html += `<strong style="font-size: 1.1em;">${name}</strong> <div style="margin-top: 5px;">${colorBadges}</div>`;
        } else {
            html += `<span style="font-size: 0.85em; color: #666;">${slot.song} ${slot.index + 1}</span><br>`;
            html += `<span style="color: #ccc;">⚠️ 未確定</span>`;
        }

        html += `</div>`;
    });

    // --- 未使用メンバーの表示（ここで色が出るように修正） ---
    const unused = members.filter(m => !used.has(m));
    if (unused.length) {
        html += `<hr style="border: 2px solid orange; margin-top: 20px;">`;
        html += `<h3 style="color:orange; margin-bottom: 15px;">未使用メンバー</h3>`;

        unused.forEach(m => {
            const colorStr = MEMBER_COLORS[m] || "";
            let colorBadges = "";
            if (colorStr) {
                const colors = colorStr.split("×");
                colorBadges = colors.map((c, idx, arr) => {
                    const badge = `<span ${getSingleColorStyle(c)}>${c.trim()}</span>`;
                    return idx < arr.length - 1 ? `${badge} × ` : badge;
                }).join("");
            }

            // 未使用メンバーも1人ずつ枠を作って見やすくします
            html += `<div style="margin-bottom: 12px; padding: 8px; background: #fffaf0; border-radius: 5px;">`;
            html += `<strong style="font-size: 1.0em;">${m}</strong><br>`;
            html += `<div style="margin-top: 4px;">${colorBadges || '<span style="color:#999; font-size:0.8em;">カラー未登録</span>'}</div>`;
            html += `</div>`;
        });
    }

    document.getElementById("result").innerHTML = html;
}
function clearAll() {
    // テキストエリアを空にする
    document.getElementById("members").value = "";
    // 結果表示エリアも空にする
    document.getElementById("result").innerHTML = "";
    // 入力欄にカーソルを合わせる（すぐに貼り付けられるように）
    document.getElementById("members").focus();
}
