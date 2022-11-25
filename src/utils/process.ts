export interface QuesProps {
    q1: null | number;
    q2: null | number;
    [key: string]: null | number;
}

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
        count += ele === answer[idx] ? 1 : -1
    });
    return count === answer.length

}

export const arrCompare = (arr: QuesProps, answer: QuesProps) => {
    let count = 0
    Object.keys(arr).forEach((ele) => {
        count += arr[ele] === answer[ele] ? 1 : 0
    })

    return count === Object.keys(arr).length
}