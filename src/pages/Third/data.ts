import { nanoid } from "nanoid";

export const thirdData = {
    candidate: {
        items: [
            {
                content: '會員系統<br/>(登入、註冊、權限管理)',
                id: nanoid(),
                priority: "1"
            },
            {
                content: "應徵者的線上履歷編輯器",
                id: nanoid(),
                priority: "2"
            },
            {
                content: '前台職缺列表<br/>(職缺詳情、點擊應徵)',
                id: nanoid(),
                priority: "3"
            },
            {
                content: '後台職缺管理功能<br/>（資訊上架、下架、顯示應徵者資料）',
                id: nanoid(),
                priority: "4"
            }
        ]
    },
    productBacklog: {
        item0: [{
            content: '優先度最高',
            id: nanoid(),
            priority: "1"
        }],
        item1: [{
            content: '優先度高',
            id: nanoid(),
            priority: "2"
        }],
        item2: [{
            content: '優先度中',
            id: nanoid(),
            priority: "3"
        }],
        item3: [{
            content: '優先度低',
            id: nanoid(),
            priority: "4"
        }]
    }
}