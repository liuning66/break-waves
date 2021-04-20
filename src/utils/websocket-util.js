/**
 * websocket服务
 *
 * @autor ln
 * @date 2021/4/20
 */

export class WebSocketUtil {
    constructor() {

    }

    static open(url) {
        if (!url) {
            throw new Error("websocket路径不能为空!!!")
        }
        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log("websocket 链接已开启!")
        }

        ws.onerror = err => {
            console.error(err);
        }

        ws.onmessage = e => {
            console.log(e);
        }

    }

}
