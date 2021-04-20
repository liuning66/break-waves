/**
 * App工具类
 *
 * @autor ln
 * @date 2021/4/20
 */
export class AppUtil {
    static eventBus = null;

    static init(eventBus) {
        AppUtil.eventBus = eventBus;
    }
}
