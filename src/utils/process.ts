interface ItemObjProps {
    [x: string]: {
        title: string;
        items: {
            content: string;
            id: string;
        }[];
    };
}

export const handleFullDrop = (itemObj: ItemObjProps, num: number) => {
    let ans = 0;
    Object.entries(itemObj).forEach(([key, value], idx) => {
        if (idx > num) {
            if (itemObj[key].items.length === 1) {
                ans += 1;
            }
        }
    });
    return ans === 4;
};



export const handleAnswer = (itemObj: ItemObjProps, num: number, answer: string[]) => {
    let arr: string[] = [];
    Object.entries(itemObj).forEach(([key, value], idx) => {
        if (idx > num) {
            if (itemObj[key].items.length === 1) {
                arr.push(itemObj[key].items[0].content)
            }
        }
    });
    if (arr.length !== answer.length) return false
    let count = 0
    arr.forEach((ele, idx) => {
        console.log('===ele===', ele)
        console.log('===answer[idx]===', answer[idx])
        count += ele === answer[idx] ? 1 : 0
    });
    console.log(count)
    return count === 4

}