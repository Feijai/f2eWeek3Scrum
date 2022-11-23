import { nanoid } from "nanoid";

export const sevenData = {
    [nanoid()]: {
        title: 'To-do',
        items: [
            {
                content: '短衝自省會議',
                id:nanoid(),
            },
            {
                content: "每日短衝會議",
                id:nanoid(),
            },
            {
                content: '短衝規劃會議',
                id:nanoid(),
            },
            {
                content: '短衝檢視會議',
                id:nanoid(),
            }
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