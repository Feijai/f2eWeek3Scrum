import { nanoid } from "nanoid";

export const sevenData = {
    [nanoid()]: {
        title: 'Todo1',
        items: [
            {
                content: '短衝自省會議',
                id: nanoid(),
            },
        ]
    },
    [nanoid()]: {
        title: 'Todo2',
        items: [
            {
                content: '每日短衝會議',
                id: nanoid(),
            },
        ]
    },
    [nanoid()]: {
        title: 'Todo3',
        items: [
            {
                content: '短衝規劃會議',
                id: nanoid(),
            },
        ]
    },
    [nanoid()]: {
        title: 'Todo4',
        items: [
            {
                content: '短衝檢視會議',
                id: nanoid(),
            },
        ]
    },
    [nanoid()]: {
        title: '填入會議',
        items: []
    },
    [nanoid()]: {
        title: '填入會議',
        items: []
    },
    [nanoid()]: {
        title: '填入會議',
        items: []
    },
    [nanoid()]: {
        title: '填入會議',
        items: []
    }
}

export const sevenAnswer = ['短衝規劃會議', '每日短衝會議', '短衝檢視會議', '短衝自省會議']