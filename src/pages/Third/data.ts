import { nanoid } from "nanoid";

export const thirdData = {
    [nanoid()]: {
        title: 'To-do',
        items: [
            {
                content: '會員系統<br/>(登入、註冊、權限管理)',
                priority: "1"
            },
            {
                content: "應徵者的線上履歷編輯器",
                priority: "2"
            },
            {
                content: '前台職缺列表<br/>(職缺詳情、點擊應徵)',
                priority: "3"
            },
            {
                content: '後台職缺管理功能<br/>（資訊上架、下架、顯示應徵者資料）',
                priority: "4"
            }
        ]
    },
    [nanoid()]: {
        title: '優先度最高',
        items: []
    },
    [nanoid()]: {
        title: '優先度高',
        items: []
    },
    [nanoid()]: {
        title: '優先度中',
        items: []
    },
    [nanoid()]: {
        title: '優先度低',
        items: []
    }
}